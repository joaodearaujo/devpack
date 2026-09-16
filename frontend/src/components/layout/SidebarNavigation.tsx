import { NavLink } from "react-router-dom";
import { LinkButton } from "../button/LinkButton";
import { Box, Layers, LayoutGrid, List, History } from "lucide-react";

const navigationItems = [
    { name: "Overview", icon: LayoutGrid, to: "/" },
    { name: "Packages", icon: Box, to: "/packages" },
    { name: "Categories", icon: Layers, to: "/categories" },
    { name: "My Setup", icon: List, to: "/setup" },
    { name: "History", icon: History, to: "/history" },
];

export default function SidebarNavigation() {
    return (
        <nav className="p-2.5 flex flex-1 flex-col gap-1">
            {navigationItems.map(item => {
                return (
                    <NavLink to={item.to}>
                        <LinkButton 
                            key={`${item.name}${item.to}`}
                            name={item.name}
                            icon={item.icon}
                        />
                    </NavLink>
                )
            })}
        </nav>
    )
}