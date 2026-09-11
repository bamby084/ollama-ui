import { chatboxOutline } from 'ionicons/icons';
import { SidebarItem } from './components/SidebarItem';
import { ModelList } from './components/ModelList';

export function Sidebar() {
  return (
    <div className="flex flex-col w-[250px] border-r border-gray-200 p-2">
      <div className="pb-5">
        <span className="text-xl font-bold">Ollama UI</span>
      </div>

      <SidebarItem icon={chatboxOutline} label="New Chat"/>
      <ModelList/>
    </div>
  )
}