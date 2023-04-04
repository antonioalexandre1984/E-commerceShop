import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { CartItem } from '../../Pages/Home/components/CartItem';
import { useCart } from '../../Hooks/useCart';
import { useSidebar } from '../../Hooks/useSidebar';
export function Sidebar() {
    const { isOpen, handleCloseSidebar } = useSidebar();
    const { cartItem, cartItemsTotal, clearCart } = useCart();
    return (_jsxs("div", { className: `${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`, children: [_jsxs("div", { className: 'flex items-center justify-between py-6 border-b', children: [_jsxs("div", { className: 'uppercase text-sm font-semibold', children: ["Shopping Bag (", cartItem.length, ")"] }), _jsx("div", { onClick: () => handleCloseSidebar(), className: 'cursor-pointer w-8 h-8 flex justify-center items-center', children: _jsx(IoMdArrowForward, { className: 'text-2xl' }) })] }), _jsx("div", { className: 'flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b', children: cartItem.map((item) => {
                    return (_jsx(CartItem, { item: item }, item.id));
                }) }), _jsxs("div", { className: 'flex flex-col gap-y-3 py-4 mt-4', children: [_jsxs("div", { className: 'flex w-full justify-between items-center', children: [_jsxs("div", { className: 'uppercase font-semibold', children: [_jsx("span", { className: 'mr-2', children: "Total" }), "$ ", (cartItemsTotal).toFixed(2)] }), _jsx("div", { onClick: () => clearCart(), className: 'cursor-pointer py-4 bg-red-500 text-white w-12 flex justify-center items-center text-xl', children: _jsx(FiTrash2, {}) })] }), _jsx(Link, { to: '/', className: 'bg-gray-200 flex py-4 justify-center items-center text-primary w-full font-semibold', children: "View Cart" }), _jsx(Link, { to: '/', className: 'bg-primary flex py-4 justify-center items-center text-white w-full font-medium', children: "Checkout" })] })] }));
}
