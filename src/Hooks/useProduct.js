import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
export function useProduct() {
    const context = useContext(ProductContext);
    return context;
}
