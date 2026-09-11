import { apiGet } from "../../../core/api";
import { env } from "../../../env";
import type { Message } from "../types/chat";

export interface LLMModel {
  name: string;
  model: string;
}

export interface LLMModelsResponse {
  models: LLMModel[];
}

export interface OllamaChatChunk {
  model: string;
  created_at: string;
  message?: {
    role: 'assistant';
    content?: string;
    thinking?: string;
  };
  done: boolean;
}

export async function getLLMModels() {
  const url = `${env.OLLAMA_URL}/api/tags`;
  const response = await apiGet<LLMModelsResponse>(url);
  return response.models;
}

export async function* streamChat({model, messages}: {model: string, messages: Message[]}){
  const response = await fetch(`${env.OLLAMA_URL}/api/chat`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        format: "json",
        stream: true,
      }),
    }
  );

  if(!response.ok){
    throw new Error(`Cannot send request to Ollama: ${response.statusText}`);
  }

  if(!response.body){
    throw new Error("Response body is null");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = '';

  try {
    while (true) {
      const { value, done } = await reader.read();

      if (done) {
        break;
      }

      // A network chunk is NOT necessarily a complete JSON object.
      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split('\n');

      // Keep the incomplete line for the next read()
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line.trim()) {
          continue;
        }

        const chunk: OllamaChatChunk = JSON.parse(line);

        yield chunk;

        if (chunk.done) {
          return;
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}