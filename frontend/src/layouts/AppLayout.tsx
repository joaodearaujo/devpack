import { ArrowDownToLine, Box, History, Layers, LayoutGrid, List, Settings, User } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";

export function AppLayout() {

    const location = useLocation();

    return (
        <div className="flex w-ful h-screen">
            <aside className="flex-1 flex flex-col border-r border-white/5">
                <div className="w-full p-4 border-b border-white/5">

                    {/* LOGO */}
                    <div className="h-full flex-1 flex gap-2.5 items-center ">
                            <div className="size-8 flex items-center justify-center rounded-lg bg-orange-500">
                                <ArrowDownToLine stroke-width={3} color="white" height={16} width={16}/>
                            </div>
                        <div className="flex flex-col leading-none gap-1">
                            <span className="text-[15px] font-bold tracking-[-0.08px] text-white text-left">DevPack</span>
                            <span className="text-[10px] tracking-[-0.12px] text-left">ENV MANAGER</span>
                        </div>
                    </div>
                </div>
                 
                <nav className="p-2.5 flex flex-1 flex-col gap-1">
                     <NavLink 
                        to={'/'}
                        className=""
                    >
                        <LinkButton name='Overview' icon={LayoutGrid}/>
                    </NavLink>                                

                    <NavLink 
                        to={'/'}
                        className=""
                    >
                        <LinkButton name='Packages' icon={Box}/>
                    </NavLink>    

                                        <NavLink 
                        to={'/'}
                        className=""
                    >
                        <LinkButton name='Categories' icon={Layers}/>
                    </NavLink> 

                                        <NavLink 
                        to={'/'}
                        className=""
                    >
                        <LinkButton name='My Setup' icon={List
                            
                        }/>
                    </NavLink> 

                                        <NavLink 
                        to={'/'}
                        className=""
                    >
                        <LinkButton name='History' icon={History}/>
                    </NavLink> 
                </nav>

                <div className="border-t border-white/10 p-2.5 flex flex-col gap-2">
                    <NavLink 
                        to={'/'}
                        className=""
                    >
                        <LinkButton name='Settings' icon={Settings}/>
                    </NavLink>  

                    <div>
                        <div className="h-full flex-1 flex gap-2.5 items-center ">
                            <div className="size-8 flex items-center justify-center rounded-full bg-gray-500">
                                <User stroke-width={3} color="white" height={16} width={16}/>
                            </div>
                        <div className="flex flex-col leading-none gap-1">
                            <span className="text-[15px] font-bold tracking-[-0.08px] text-white text-left">Ubuntu</span>
                            <span className="text-[10px] tracking-[-0.12px] text-left">@localhost</span>
                        </div>
                    </div>
                    </div>
                </div>
            </aside>

            <aside className="flex-3">
                <div>
                    {location.pathname}
                </div>

                <main>
                    <Outlet />
                </main>
            </aside>

        </div>
    )
}