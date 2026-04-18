import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/slices/cartSlice';
import { PRODUCTS } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-8 text-lg">Sorry, the item you are looking for does not exist or has been removed.</p>
        <Link 
          to="/shop" 
          className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="mb-10">
          <Link to="/shop" className="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-indigo-600 transition-colors">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery Mockup */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-100'} />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-400">(4.8 / 5.0 Rating)</span>
              </div>

              <div className="text-3xl font-bold text-slate-900 mb-8">
                ${product.price.toFixed(2)}
              </div>

              <p className="text-lg text-gray-500 leading-relaxed mb-10 border-l-4 border-indigo-100 pl-6">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => dispatch(addItem(product))}
                  className="flex-1 px-8 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 active:scale-95 group"
                >
                  <ShoppingCart size={22} className="transition-transform group-hover:scale-110" />
                  Add to Shopping Bag
                </button>
                <button className="px-8 py-5 border-2 border-slate-100 text-slate-900 font-bold rounded-2xl hover:border-indigo-100 hover:bg-slate-50 transition-all active:scale-95">
                  Save to Wishlist
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600"><Truck size={20} /></div>
                  Free Express Shipping
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600"><Shield size={20} /></div>
                  2-Year Warranty
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600"><RotateCcw size={20} /></div>
                  30-Day Free Returns
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
