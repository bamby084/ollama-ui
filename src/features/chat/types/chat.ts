
export type MessageRole = "user" | "assistant" | "system" | "tool";

export interface Message {
  role: MessageRole;
  content: string;
  images?: string[];
  tool_calls?: [];
}