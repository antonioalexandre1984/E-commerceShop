import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Contexts/ProductContext";
import { Router } from "./Router";
import { SidebarProvider } from "./Contexts/SidebarContext";
import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { CartProvider } from "./Contexts/CartContext";

function App() {

  return (
    <SidebarProvider>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Sidebar />
          <ProductProvider>
            <Router />
          </ProductProvider>
        </CartProvider>
      </BrowserRouter>
    </SidebarProvider>
  )
}

export default App
