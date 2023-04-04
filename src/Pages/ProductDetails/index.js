import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";
import { useProduct } from "../../Hooks/useProduct";
export function ProductDetails() {
    const { id } = useParams();
    const { products } = useProduct();
    const { addToCart } = useCart();
    const product = products.find((item) => {
        return item.id === parseInt(id);
    });
    // if product is not found
    if (!product) {
        return (_jsx("section", { className: 'h-screen flex justify-center items-center', children: "Loading..." }));
    }
    const { title, price, image, description } = product;
    return (_jsx("section", { className: 'pt-32 pb-12 lg:py-32 h-screen flex items-center', children: _jsx("div", { className: 'container mx-auto', children: _jsxs("div", { className: 'flex flex-col lg:flex-row items-center', children: [_jsx("div", { className: 'flex flex-1 justify-center items-center mb-8 lg:mb-0', children: _jsx("img", { className: 'max-w-[200px] lg:max-w-sm', src: image, alt: '' }) }), _jsxs("div", { className: 'flex-1 text-center lg:text-left', children: [_jsx("h1", { className: 'text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0', children: title }), _jsxs("div", { className: 'text-xl text-red-500 font-medium mb-6', children: ["$ ", price] }), _jsx("p", { className: 'mb-8', children: description }), _jsx("button", { onClick: () => addToCart(product), className: 'bg-primary py-4 px-8 text-white', children: "Add to cart" })] })] }) }) }));
}
