import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '../store/hooks';

const CartIcon = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
      <ShoppingCart size={24} className="text-gray-700" />
      {totalQuantity > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
