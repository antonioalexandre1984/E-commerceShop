import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { ProductDetails } from "./Pages/ProductDetails";

export function Router(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
    )
}