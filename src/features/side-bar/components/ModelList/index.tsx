import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLLMModels } from "@/features/chat/api/ollama-api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CheckIcon} from "lucide-react";
import { useModelStore } from "../../stores/model-store";

export function ModelList(){
  const [selectedModel, setSelectedModel] = useState<string | null>( useModelStore.getState().selectedModel);

  const {data, isSuccess} = useQuery({
    queryKey: ['fetch-models'],
    queryFn: getLLMModels
  });
  
  const handleModelSelect = (modelName: string) => {
    setSelectedModel(modelName);
    useModelStore.getState().setSelectedModel(modelName);
  }

  return (
    <Accordion className="w-full" defaultValue={["llm-list"]}>
      <AccordionItem value="llm-list">
        <AccordionTrigger className="w-full">Models</AccordionTrigger>
        <AccordionContent className="w-full">
          {isSuccess && data.map((model) => (
            <div key={model.name} onClick={() => handleModelSelect(model.name)}
              className="flex flex-row items-center w-full border-b p-2 border-gray-200">
              <span className="flex-1">{model.name}</span>
              {selectedModel === model.name && <CheckIcon className="ml-auto h-4 w-4" />}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}