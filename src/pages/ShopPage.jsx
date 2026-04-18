import React, { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Eye, Star, X } from 'lucide-react';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/slices/cartSlice';
import { PRODUCTS } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShopPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryFilter = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    if (!categoryFilter) return PRODUCTS;
    return PRODUCTS.filter(p => p.category === categoryFilter);
  }, [categoryFilter]);

  const clearFilter = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {categoryFilter ? `Collection: ${categoryFilter}` : 'Our Shop'}
            </h1>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              Explore our curated collection of premium products, designed for style, performance, and the modern lifestyle.
            </p>
          </div>
          
          {categoryFilter && (
            <button 
              onClick={clearFilter}
              className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-2xl transition-all active:scale-95"
            >
              <X size={18} /> Clear Filters
            </button>
          )}
        </header>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-indigo-100">
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Quick Actions Overlay */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="p-3 bg-white text-slate-900 rounded-2xl shadow-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
                      title="View Details"
                    >
                      <Eye size={20} />
                    </button>
                    <button 
                      onClick={() => dispatch(addItem(product))}
                      className="p-3 bg-white text-slate-900 rounded-2xl shadow-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                    ))}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="text-sm font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">No products found</h2>
            <p className="text-gray-500 mb-8">Try adjusting your filters or browsing our full collection.</p>
            <button 
              onClick={clearFilter}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 transition-all"
            >
              Browse All Products
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ShopPage;
