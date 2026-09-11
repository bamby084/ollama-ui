import { Outlet } from "react-router-dom";
import { Sidebar } from "../features/side-bar";

export function MainLayout(){
  return (
    <div className="flex flex-row w-full h-full">
    <Sidebar/>
    <main className="flex items-center justify-center flex-1 overflow-auto">
      <Outlet/>
    </main>
  </div>
  )
}