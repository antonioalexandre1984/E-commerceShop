import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const SidebarContext = createContext({});
export function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseSidebar = () => {
        setIsOpen(false);
    };
    return (_jsx(SidebarContext.Provider, { value: {
            isOpen,
            handleCloseSidebar,
            setIsOpen
        }, children: children }));
}
