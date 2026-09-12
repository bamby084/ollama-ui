import { useLocation } from "react-router-dom";
import { ChatInput } from "../components/ChatInput";

export function ChatView(){
  const location = useLocation();
  const message = location.state?.message;

  console.log("ChatView message:", message);
  return (
    <div className="flex flex-col w-full h-full relative">
      <h1>Chat View</h1>
      <div className="absolute bottom-0 p-[32px] w-full">
        <ChatInput />
      </div>
    </div>
  )
}