import { useModelStore } from "@/features/side-bar/stores/model-store";
import { streamChat } from "../api/ollama-api";

export function useChat() {
  const sendMessage = async (message: string) => {
    console.log("Sending message:", message);
    const selectedModel = useModelStore.getState().selectedModel;
    if(!selectedModel){
      return;
    }

    const stream = await streamChat({
      model: selectedModel,
      messages: [{
        role: "user",
        content: message,
      }]
    });

    for await (const chunk of stream) {
      const content = chunk.message?.content;
      if (!content) {
        continue;
      }

      console.log("Received content:", content);
    }
  }

  return {
    sendMessage,
  }
}