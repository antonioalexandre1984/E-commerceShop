import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
export const ProductContext = createContext({});
export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    async function fetchProducts() {
        const response = await api.get('/products');
        setProducts(response.data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (_jsx(ProductContext.Provider, { value: {
            fetchProducts,
            products,
        }, children: children }));
}
