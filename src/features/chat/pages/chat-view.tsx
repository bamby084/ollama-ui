import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChatInput } from "../components/ChatInput";
import { useChatStore } from "../stores/chat-store";
import { MessagesView } from "../components/MessagesView";
import { useNavigate } from "react-router-dom";

export function ChatView(){
  const navigate = useNavigate();
  const {chatId} = useParams();
  const chat = useChatStore.getState().chats.find(chat => chat.id === chatId);

  useEffect(() => {
    if(!chat){
      navigate("/");
    }
  }, [chat, navigate]);

  return (
    <div className="flex flex-col w-full h-full relative">
      <div className="w-full h-full">
        <MessagesView messages={chat?.messages ?? []}/>
      </div>
      <div className="absolute bottom-0 p-[32px] w-full">
        <ChatInput />
      </div>
    </div>
  )
}