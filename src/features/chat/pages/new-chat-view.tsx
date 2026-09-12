import React from "react";
import { ChatInput } from "../components/ChatInput";
import { useNavigate } from "react-router-dom";
import type { Message } from "../types/chat";

export function NewChatView(){
  const navigate = useNavigate();
  const startNewChat = React.useCallback((content: string) => {
    const chatId = crypto.randomUUID();
    const message: Message = {
      role: "user",
      content,
    };
    
    navigate(`/chat/${chatId}`, {
      state: {
        message: message,
      }
    });

  },[navigate]);
  
  return (
    <div className="flex flex-col items-center justify-center w-full px-[100px] gap-5">
      <div className="text-3xl">How can I help you today?</div>
      <ChatInput onSend={startNewChat} />
    </div>
  )
}