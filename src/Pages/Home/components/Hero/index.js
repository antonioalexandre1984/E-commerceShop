import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import WomamImg from '../../../../assets/woman_hero.png';
export function Hero() {
    return (_jsx("section", { className: 'h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24', children: _jsxs("div", { className: 'container mx-auto flex justify-around h-full', children: [_jsxs("div", { className: 'flex flex-col justify-center', children: [_jsxs("div", { className: 'font-semibold flex items-center uppercase', children: [_jsx("div", { className: 'w-10 h-[2px] bg-red-500 mr-3' }), "New Trend"] }), _jsxs("h1", { className: 'text-[70px] leading-[1.1] font-light mb-4', children: ["AUTUMN SALE STYLISH ", _jsx("br", {}), _jsx("span", { className: 'font-semibold', children: "WOMENS" })] }), _jsx(Link, { to: '/', className: 'self-start uppercase font-semibold border-b-2 border-primary', children: "Discover More" })] }), _jsx("div", { className: 'hidden lg:block', children: _jsx("img", { src: WomamImg, alt: '' }) })] }) }));
}
