import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
              }`}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.rating}.0)</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-4">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => dispatch(addItem(product))}
            className="p-3 bg-gray-900 text-white rounded-xl transition-all duration-300 hover:bg-blue-600 active:scale-95 shadow-lg shadow-gray-200"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
