import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useProduct } from '../../../../Hooks/useProduct';
import { Product } from "../Product";
export function OurProducts() {
    const { product } = useProduct();
    //console.log(product);
    const filteredProducts = product.filter((item) => {
        return (item.category === "men's clothing" || item.category === "women's clothing");
    });
    //console.log(filteredProducts);
    return (_jsx("div", { children: _jsxs("section", { className: 'py-16', children: [_jsx("div", { className: 'container mx-auto', children: _jsx("div", { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0', children: filteredProducts.map((product) => {
                            return (_jsx(Product, { product: product }, product.id));
                        }) }) }), _jsx("div", { className: "w-full h-[300px]" })] }) }));
}
