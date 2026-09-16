import { ArrowDownToLine } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <div className="flex w-ful h-screen">
            <aside className="flex-1 flex flex-col border-r border-white/5">
                <div className="w-full p-4 border-b border-white/5">

                    {/* LOGO */}
                    <div className="h-full flex-1 flex gap-2.5 items-center ">
                            <div className="size-8 flex items-center justify-center rounded-lg bg-orange-500">
                                <ArrowDownToLine stroke-width="3" className="text-white size-4"/>
                            </div>
                        <div className="flex flex-col leading-none gap-1">
                            <span className="text-[15px] font-bold tracking-[-0.08px] text-white">DevPack</span>
                            <span className="text-[10px] tracking-[-0.12px]">ENV MANAGER</span>
                        </div>
                    </div>
                </div>
                 
                <nav className="p-2.5 flex flex-col">
                    <NavLink to={'/'}>
                        Overview
                    </NavLink>
                </nav>
            </aside>

            <aside className="flex-3">
                <div>

                </div>

                <main>
                    <Outlet />
                </main>
            </aside>

        </div>
    )
}