import { produce } from 'immer';
import { createContext, ReactNode, useEffect, useState } from "react";
import { IProduct } from './ProductContext';

export interface CartItem extends IProduct {
    amount: number;
}

interface CartContextType {
    addToCart: (product: IProduct) => void;
    removeCartItem: (id: number) => void;
    increaseAmount: (id: number) => void;
    decreaseAmount: (id: number) => void;
    clearCart: () => void;
    cartItemsTotal: number;
    cartQuantity: number;
    itemAmount: number;
    cartItem: CartItem[];
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [itemAmount, setItemAmount] = useState(0);

    // Quantity of items in cart
    const cartQuantity = cart.length;

    // Total to cart
    const cartItemsTotal = cart.reduce((acc, item) => {
        return acc + item.amount * item.price;
    }, 0)

    // update item amount (Method 2)
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((acc, item) => {
                return acc + item.amount;
            }, 0)
            setItemAmount(amount);
        }
    }, [cart]);

    // increase amount
    const increaseAmount = (id: number) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem);
    };

    // decrease amount
    const decreaseAmount = (id: number) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
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
    function removeCartItem(id: number) {
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
    function addToCart(product: IProduct) {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === product.id;
        })
        if (cartItem) {
            const newCart = produce(cart, (draft) => {
                const index = draft.findIndex((item) => {
                    return item.id === product.id;
                })
                draft[index].amount += 1;
            })
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItem: cart,
                addToCart,
                cartItemsTotal,
                cartQuantity,
                removeCartItem,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
            }}>
            {children}
        </CartContext.Provider>
    );
}