import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Contexts/ProductContext";
import { Router } from "./Router";
import { SidebarProvider } from "./Contexts/SidebarContext";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { CartProvider } from "./Contexts/CartContext";
function App() {
    return (_jsx(SidebarProvider, { children: _jsx(BrowserRouter, { children: _jsxs(CartProvider, { children: [_jsx(Header, {}), _jsx(Sidebar, {}), _jsx(ProductProvider, { children: _jsx(Router, {}) })] }) }) }));
}
export default App;
