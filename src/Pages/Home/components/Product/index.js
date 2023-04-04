import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//import { useProduct } from '../../../../Hooks/useProduct';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { useCart } from '../../../../Hooks/useCart';
export function Product({ product }) {
    const { id, title, price, category, image } = product;
    const { addToCart } = useCart();
    return (_jsxs("div", { children: [_jsxs("div", { className: 'border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition', children: [_jsx("div", { className: 'w-full h-full flex justify-center items-center', children: _jsx("div", { className: 'w-[200px] mx-auto flex justify-center items-center', children: _jsx("img", { className: 'max-h-[160px] group-hover:scale-110 transition duration-300', src: image, alt: '' }) }) }), _jsxs("div", { className: 'absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300', children: [_jsx("button", { children: _jsx("div", { onClick: () => addToCart(product), className: 'flex justify-center items-center text-white w-12 h-12 bg-red-500', children: _jsx(BsPlus, { className: 'text-3xl' }) }) }), _jsx(Link, { to: `/product/${id}`, className: 'w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl', children: _jsx(BsEyeFill, {}) })] })] }), _jsxs("div", { children: [_jsxs("div", { className: 'text-sm capitalize text-gray-500 mb-1', children: [" ", category] }), _jsx(Link, { to: `/category/${id}`, children: _jsxs("h2", { className: 'font-semibold mb-1', children: [" ", title, " "] }) }), _jsxs("div", { className: "font-semibold", children: ["$ ", price] })] })] }));
}
