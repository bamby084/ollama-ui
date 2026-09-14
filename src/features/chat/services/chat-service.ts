import type { ChatMessage } from "../types/chat";
import { streamChat } from "../api/ollama-api";

export async function sendMessages(model: string, messages: ChatMessage[], onStreamDataReceived: (data: string) => void){
  if(!model){
    throw new Error("Please select a model first.");
  }

  const ollamaMessages = messages.map(m => ({
    role: m.role,
    content: m.content
  }));

  const stream = await streamChat({model, messages: ollamaMessages});

  for await (const chunk of stream) {
    const content = chunk.message?.content;
    if (!content) {
      continue;
    }

    onStreamDataReceived?.(content);
  }
}