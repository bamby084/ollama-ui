import React from "react";
import { ChatInput } from "../components/ChatInput";
import { useNavigate } from "react-router-dom";
import { useChat } from "../hooks/useChat";

export function NewChatView(){
  const navigate = useNavigate();
  const {startNewChat} = useChat();
  const send = React.useCallback((content: string) => {
    const chatId = startNewChat(content);
    navigate(`/chat/${chatId}`);
  },[startNewChat, navigate]);
  
  return (
    <div className="flex flex-col items-center justify-center w-full px-[100px] gap-5">
      <div className="text-3xl">How can I help you today?</div>
      <ChatInput onSend={send} />
    </div>
  )
}