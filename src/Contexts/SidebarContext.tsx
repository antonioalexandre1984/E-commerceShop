import React, { createContext, useState } from "react";

interface SidebarContextType {
    isOpen: boolean;
    handleCloseSidebar: () => void;
    setIsOpen: (value: boolean) => void;
}

interface SidebarProviderProps {
    children: React.ReactNode
}

export const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType);

export function SidebarProvider({ children }: SidebarProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseSidebar = () => {
        setIsOpen(false);
    }

    return (
        <SidebarContext.Provider
            value={{
                isOpen,
                handleCloseSidebar,
                setIsOpen
            }}>
            {children}
        </SidebarContext.Provider>
    )
}