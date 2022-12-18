import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { ProductDetails } from "./Pages/ProductDetails";
export function Router() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/product/:id', element: _jsx(ProductDetails, {}) })] }));
}
