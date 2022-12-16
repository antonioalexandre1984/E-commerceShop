import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export interface ProductContextType {
    product: IProduct[];
    fetchProducts: () => Promise<void>;
}

interface ProductProviderProps {
    children: React.ReactNode
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export function ProductProvider({ children }: ProductProviderProps) {

    const [product, setProduct] = useState<IProduct[]>([]);

    async function fetchProducts() {
        const response = await api.get('/products');
        setProduct(response.data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                fetchProducts,
                product,
            }}>
            {children}
        </ProductContext.Provider>
    )

}
