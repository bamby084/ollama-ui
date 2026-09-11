import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { PlusIcon, SendHorizontalIcon } from "lucide-react";
import {useState, useCallback} from "react";

interface ChatInputProps {
  onSend?: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps){
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = useCallback((e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(message && onSend){
      onSend(message);
      setMessage(null);
    }
  }, [onSend, message]);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <InputGroup className="rounded-[24px] py-[24px] px-[6px] items-center">
        <InputGroupInput placeholder="Type your message..." onChange={(e) => setMessage(e.target.value)} />
        <InputGroupAddon align="inline-start">
          <PlusIcon className="size-[24px]" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton type="submit" className="rounded-full size-[36px] p-5">
            <SendHorizontalIcon className="size-[24px]"/>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}