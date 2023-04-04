import { SidebarContext } from "../Contexts/SidebarContext";
import { useContext } from "react";
export function useSidebar() {
    const context = useContext(SidebarContext);
    return context;
}
