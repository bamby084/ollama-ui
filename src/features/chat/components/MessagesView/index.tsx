import type { ChatMessage } from "../../types/chat";

export function MessagesView({messages}: {messages: ChatMessage[]}){
  return (
    <div className="flex flex-col w-full h-full p-[32px]">
      {messages.map((message) => {
        if(message.role === "user"){
          return (
            <div key={message.id} className="flex justify-end">
              <div className="max-w-[70%] rounded-[24px] px-4 py-2.5 bg-[#E8F3FE]">
                {message.content}
              </div>
            </div>
          )
        }else if(message.role === "assistant"){
          return (<div>assistant</div>)
        }
      })}
    </div>
  )
}