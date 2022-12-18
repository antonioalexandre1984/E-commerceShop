import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
export const ProductContext = createContext({});
export function ProductProvider({ children }) {
    const [product, setProduct] = useState([]);
    async function fetchProducts() {
        const response = await api.get('/products');
        setProduct(response.data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (_jsx(ProductContext.Provider, { value: {
            fetchProducts,
            product,
        }, children: children }));
}
