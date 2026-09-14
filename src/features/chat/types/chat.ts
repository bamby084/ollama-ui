
export type MessageRole = "user" | "assistant" | "system" | "tool";

export interface Message {
  role: MessageRole;
  content: string;
}

export interface OllamaMessage extends Message {
  images?: string[];
  tool_calls?: [];
}

export interface ChatMessage extends Message {
  id: string;
}