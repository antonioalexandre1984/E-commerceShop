//import { useProduct } from '../../../../Hooks/useProduct';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { useCart } from '../../../../Hooks/useCart';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

interface ProductProps {
  product: Product;
}

export function Product({ product }: ProductProps) {

  const { id, title, price, category, image } = product;
  const { addToCart } = useCart();
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>

          { /* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='' />
          </div>
        </div>

        { /* buttons */}
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div
              onClick={() => addToCart(product)}
              className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'> {category}</div>
        <Link to={`/category/${id}`}>
          <h2 className='font-semibold mb-1'> {title} </h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div >
  );
}
