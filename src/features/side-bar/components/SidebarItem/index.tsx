import { IonIcon } from "@ionic/react";

export function SidebarItem({ icon, label, onClick }: { icon?: string, label: string, onClick?: () => void }) {
  return (
    <div className="flex flex-row items-center gap-2 p-2 rounded-[12px] hover:bg-gray-100 cursor-pointer"
      onClick={onClick}>
      {icon && <IonIcon icon={icon} />}
      <span>{label}</span>
    </div>
  )
}