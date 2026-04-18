import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addItem, removeItem, removeFromCart } from '../store/slices/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice, totalQuantity } = useAppSelector((state) => state.cart);

  const shipping = totalQuantity > 0 ? 15.00 : 0;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-6 flex flex-col items-center justify-center text-center py-20">
          <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-8">
            <ShoppingBag size={48} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Your Bag is Empty</h1>
          <p className="text-gray-500 max-w-md mb-10 leading-relaxed">
            Looks like you haven't added anything to your cart yet. 
            Explore our latest collections and find something you love!
          </p>
          <Link 
            to="/shop" 
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-2"
          >
            Start Shopping
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-slate-900">Your Shopping Bag</h1>
          <Link to="/shop" className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-2">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-indigo-100 transition-all group">
                {/* Product Image */}
                <div className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    <div className="text-indigo-600 font-bold">${item.price.toFixed(2)}</div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-6 sm:gap-8">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                      <button 
                        onClick={() => dispatch(removeItem(item.id))}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-600 transition-all"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center font-bold text-slate-900">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(addItem(item))}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-600 transition-all"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Total & Remove */}
                    <div className="flex flex-col items-end gap-2 min-w-[100px]">
                      <div className="font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</div>
                      <button 
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        title="Remove Item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-slate-50 p-8 rounded-[2.5rem] border border-gray-100">
              <h2 className="text-xl font-bold text-slate-900 mb-8 px-2">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-600 font-medium px-2">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium px-2">
                  <span>Estimated Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium px-2 pb-6 border-b border-gray-200">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-900 text-xl font-bold px-2 pt-2">
                  <span>Grand Total</span>
                  <span className="text-indigo-600">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => console.log('Processing...')}
                className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95 flex items-center justify-center gap-2 group"
              >
                Proceed to Checkout
                <ShoppingBag size={20} className="transition-transform group-hover:scale-110" />
              </button>
              
              <div className="mt-8 px-4 py-3 bg-white/50 rounded-xl border border-gray-100 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-500">Secure Checkout Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
