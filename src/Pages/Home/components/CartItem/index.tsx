import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCart } from "../../../../Hooks/useCart";

interface Item {
    id: number;
    title: string;
    image: string;
    price: number;
    amount: number;
}
interface CartItemProps {
    item: Item;
}


export function CartItem({ item }: CartItemProps) {
    const { removeCartItem, increaseAmount, decreaseAmount } = useCart();
    const { id, title, image, price, amount } = item;
    const subItemsTotal = (price * amount).toFixed(2);

    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link to={`/product/${id}`}>
                    <img className='max-w-[80px]' src={image} alt='' />
                </Link>
                <div className="w-full flex flex-col">
                    {/* title & remove icon */}
                    <div className="flex justify-between mb-2">
                        {/* title */}
                        <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
                            {title}
                        </Link>
                        {/* remove icon */}
                        <div
                            onClick={() => removeCartItem(id)}
                            className="text-xl cursor-pointer">
                            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
                        </div>
                    </div>
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        {/* qty */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                            {/* minus icon */}
                            <div
                                onClick={() => decreaseAmount(id)}
                                className="flex-1 flex justify-center items-center cursor-pointer h-full">
                                <IoMdRemove />
                            </div>
                            {/* amount */}
                            <div className="h-full flex justify-center items-center px-2">
                                {amount}
                            </div>
                            {/* plus icon */}
                            <div
                                onClick={() => increaseAmount(id)}
                                className="flex-1 flex justify-center items-center cursor-pointer h-full">
                                <IoMdAdd />
                            </div>
                        </div>
                        {/* item price */}
                        <div className="flex-1 flex items-center justify-around">
                            ${price}
                        </div>
                        {/* final price */}
                        {/* make the price at 2 decimals */}
                        <div className="flex-1 flex justify-end items-center text-primary font-medium">
                            ${(subItemsTotal)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}