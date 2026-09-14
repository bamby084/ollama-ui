import { useModelStore } from "@/features/side-bar/stores/model-store";
import { useChatStore } from "../stores/chat-store";
import type { ChatMessage } from "../types/chat";
import { sendMessages } from "../services/chat-service";

export function useChat() {

  const startNewChat = (content: string) => {
    const chatId = crypto.randomUUID();
    const message: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };

    useChatStore.getState().addNewChat({
      id: chatId,
      messages: [message]
    });

    //Fire and forget so the streaming will happen in the background and the caller
    //does not need to wait for the streaming to complete.
    startStreaming(chatId);

    return chatId;
  }

  const startStreaming =  async (chatId: string) => {
    const model = useModelStore.getState().selectedModel;
    if(!model){
      throw new Error("Please select a model.");
    }

    const chat = useChatStore.getState().chats.find(c => c.id === chatId);
    if(!chat){
      throw new Error("Cannot find the specific chat.");
    }

    await sendMessages(model, chat.messages, (data: string) => {
      console.log(data);
    })
  }

  return {
    startNewChat
  }
}