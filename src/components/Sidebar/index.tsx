import { Link } from 'react-router-dom';
/* import { useCart } from '../../hooks/useCart'; * / */
import React, { useState } from 'react';
import { useSidebar } from '../../hooks/useSidebar';
/* import { CartItem } from '../CartItem'; */
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { useProduct } from '../../Hooks/useProduct';
import { CartContext } from '../../Contexts/CartContext';
import { CartItem } from '../../Pages/Home/components/CartItem';
import { useCart } from '../../Hooks/useCart';

export function Sidebar() {
  const { isOpen, handleCloseSidebar } = useSidebar();
  const { cartItem, cartItemsTotal, clearCart } = useCart();

  console.log(useProduct);

  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>

        <div className='uppercase text-sm font-semibold'>
          Shopping Bag ({cartItem.length})
        </div>
        { /* icon to close sidebar */}
        <div
          onClick={() => handleCloseSidebar()}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cartItem.map((item) => {
          return (
            <CartItem item={item} key={item.id} />
          )
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          { /* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total</span>$ {(cartItemsTotal).toFixed(2)}
          </div>
          { /* clear cart */}
          <div
            onClick={() => clearCart()}
            className='cursor-pointer py-4 bg-red-500 text-white w-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        <Link
          to='/'
          className='bg-gray-200 flex py-4 justify-center items-center text-primary w-full font-semibold'
        >
          View Cart
        </Link>
        <Link
          to='/'
          className='bg-primary flex py-4 justify-center items-center text-white w-full font-medium'
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

