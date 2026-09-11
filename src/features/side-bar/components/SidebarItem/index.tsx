import { IonIcon } from "@ionic/react";

export function SidebarItem({ icon, label }: { icon?: string, label: string }) {
  return (
    <div className="flex flex-row items-center gap-2 p-2 rounded-[12px] hover:bg-gray-100 cursor-pointer">
      {icon && <IonIcon icon={icon} />}
      <span>{label}</span>
    </div>
  )
}