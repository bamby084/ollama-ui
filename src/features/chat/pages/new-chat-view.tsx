import { ChatInput } from "../components/ChatInput";
import { useChat } from "../hooks/useChat";

export function NewChatView(){
  const {sendMessage} = useChat();

  return (
    <div className="flex flex-col items-center justify-center w-full px-[100px] gap-5">
      <div className="text-3xl">How can I help you today?</div>
      <ChatInput onSend={sendMessage} />
    </div>
  )
}