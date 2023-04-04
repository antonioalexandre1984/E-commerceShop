import { jsx as _jsx } from "react/jsx-runtime";
import { produce } from 'immer';
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext({});
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    // Quantity of items in cart
    const cartQuantity = cart.length;
    // Total to cart
    const cartItemsTotal = cart.reduce((acc, item) => {
        return acc + item.amount * item.price;
    }, 0);
    // update item amount (Method 2)
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((acc, item) => {
                return acc + item.amount;
            }, 0);
            setItemAmount(amount);
        }
    }, [cart]);
    // increase amount
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem);
    };
    // decrease amount
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                }
                else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeCartItem(id);
        }
    };
    // remove from cart
    function removeCartItem(id) {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }
    // Clear cart
    function clearCart() {
        setCart([]);
    }
    // add to cart
    function addToCart(product) {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === product.id;
        });
        if (cartItem) {
            const newCart = produce(cart, (draft) => {
                const index = draft.findIndex((item) => {
                    return item.id === product.id;
                });
                draft[index].amount += 1;
            });
            setCart(newCart);
        }
        else {
            setCart([...cart, newItem]);
        }
    }
    ;
    return (_jsx(CartContext.Provider, { value: {
            cartItem: cart,
            addToCart,
            cartItemsTotal,
            cartQuantity,
            removeCartItem,
            clearCart,
            increaseAmount,
            decreaseAmount,
            itemAmount,
        }, children: children }));
}
