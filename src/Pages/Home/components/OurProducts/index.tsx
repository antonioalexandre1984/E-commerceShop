import React from 'react';
import { useProduct } from '../../../../Hooks/useProduct';
import { Product } from "../Product";

export function OurProducts() {
    const { product } = useProduct()
    //console.log(product);
    const filteredProducts = product.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing"
        );
    });
    //console.log(filteredProducts);
    return (
        <div>
            <section className='py-16'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {filteredProducts.map((product) => {
                            return (
                                <Product key={product.id} product={product} />
                            );
                        })}
                    </div>
                </div>
                <div className="w-full h-[300px]"></div>
            </section>
        </div>
    );
}