import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
export function useCart() {
    const context = useContext(CartContext);
    return context;
}
