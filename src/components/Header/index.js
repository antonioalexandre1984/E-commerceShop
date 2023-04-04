import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from '../../Hooks/useCart';
import { useSidebar } from '../../Hooks/useSidebar';
import Logo from '../../assets/logo.svg';
export function Header() {
    const { isOpen, setIsOpen } = useSidebar();
    const [isActive, setIsActive] = useState(false);
    const { itemAmount } = useCart();
    // event listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    return (_jsx("header", { className: `${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`, children: _jsxs("div", { className: 'container mx-auto flex items-center justify-between h-full', children: [_jsx(Link, { to: '/', children: _jsx("div", { children: _jsx("img", { className: 'w-[40px]', src: Logo, alt: '' }) }) }), _jsxs("div", { onClick: () => setIsOpen(!isOpen), className: 'cursor-pointer flex relative', children: [_jsx(BsBag, { className: 'text-2xl' }), _jsx("div", { className: 'bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center', children: itemAmount })] })] }) }));
}
