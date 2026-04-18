import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ShoppingCart, Eye, Star, X, Filter, ChevronRight, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addItem } from '../store/slices/cartSlice';
import { CATEGORIES } from '../data/categories';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const ShopPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const PRODUCTS = useAppSelector(state => state.products.items);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const maxPriceLimit = useMemo(() => {
    return Math.ceil(Math.max(...PRODUCTS.map(p => p.price)));
  }, [PRODUCTS]);
  
  const [priceRange, setPriceRange] = useState(maxPriceLimit);
  
  const categoryFilter = searchParams.get('category');
  const searchQuery = searchParams.get('search');

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    
    // Category Filter
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    // Search Query
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Price Filter
    result = result.filter(p => p.price <= priceRange);

    // Sort result
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => (b.rating || 5) - (a.rating || 5));
    }

    return result;
  }, [categoryFilter, searchQuery, sortBy, priceRange, PRODUCTS]);

  const clearFilter = () => {
    setSearchParams({});
    setPriceRange(maxPriceLimit);
  };

  const updateCategory = (slug) => {
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className={`hover:text-indigo-600 transition-colors ${!categoryFilter ? 'font-bold text-slate-900' : ''}`}>Shop</Link>
          {categoryFilter && (
            <>
              <ChevronRight size={14} />
              <span className="font-bold text-slate-900 capitalize">{categoryFilter}</span>
            </>
          )}
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters (Desktop) */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-10">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Filter size={18} className="text-indigo-600" /> Categories
                </h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => updateCategory('all')}
                    className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${!categoryFilter ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-100' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    All Collections
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button 
                      key={cat.id}
                      onClick={() => updateCategory(cat.slug)}
                      className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${categoryFilter === cat.slug ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-100' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <SlidersHorizontal size={18} className="text-indigo-600" /> Price Range
                </h3>
                <div className="space-y-4 px-2">
                  <div className="flex items-center justify-between text-sm font-black text-slate-900">
                    <span>$0</span>
                    <span className="text-indigo-600">${priceRange.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max={maxPriceLimit}
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                  />
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                    Max Price: ${maxPriceLimit.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Electronics', 'Fashion', 'Computing', 'Smart Home'].map(tag => (
                    <button 
                      key={tag} 
                      onClick={() => updateCategory(tag)}
                      className={`px-4 py-2 text-xs font-bold rounded-full transition-colors ${categoryFilter === tag ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                  {searchQuery 
                    ? `Search: "${searchQuery}"` 
                    : categoryFilter 
                      ? `${categoryFilter} Collection` 
                      : 'Our Full Shop'
                  }
                </h1>
                <p className="text-gray-500 max-w-2xl leading-relaxed font-medium">
                  Showing {filteredProducts.length} premium items curated for your lifestyle.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-100 px-6 py-4 pr-12 rounded-2xl font-bold text-slate-900 shadow-sm hover:border-indigo-200 transition-all cursor-pointer outline-none"
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ArrowUpDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden p-4 bg-white border border-gray-100 rounded-2xl text-slate-900 shadow-sm"
                >
                  <Filter size={20} />
                </button>
              </div>
            </header>

            {(categoryFilter || searchQuery || priceRange < maxPriceLimit) && (
              <div className="flex items-center gap-3 mb-8">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Active Filters:</span>
                <div className="flex flex-wrap gap-2">
                  {categoryFilter && (
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-xl flex items-center gap-2">
                      Category: {categoryFilter} <X size={14} className="cursor-pointer" onClick={() => updateCategory('all')} />
                    </span>
                  )}
                  {searchQuery && (
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-xl flex items-center gap-2">
                      Search: {searchQuery} <X size={14} className="cursor-pointer" onClick={() => setSearchParams({ category: categoryFilter || '' })} />
                    </span>
                  )}
                  {priceRange < maxPriceLimit && (
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-xl flex items-center gap-2">
                      Under ${priceRange.toLocaleString()} <X size={14} className="cursor-pointer" onClick={() => setPriceRange(maxPriceLimit)} />
                    </span>
                  )}
                </div>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button 
                          onClick={() => navigate(`/product/${product.id}`)}
                          className="p-4 bg-white text-slate-900 rounded-2xl shadow-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
                        >
                          <Eye size={20} />
                        </button>
                        <button 
                          onClick={() => {
                            dispatch(addItem(product));
                            toast.success('Added to bag!');
                          }}
                          className="p-4 bg-white text-slate-900 rounded-2xl shadow-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
                        >
                          <ShoppingCart size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={i < Math.floor(product.rating || 5) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                        ))}
                        <span className="text-xs font-bold text-gray-400 ml-2">({product.rating || '5.0'})</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-6">{product.category}</p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <span className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                        <button 
                          onClick={() => navigate(`/product/${product.id}`)}
                          className="text-sm font-black text-indigo-600 hover:text-indigo-700 underline underline-offset-8"
                        >
                          EXPLORE
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-32 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                  <X size={40} className="text-slate-300" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">No items found</h2>
                <p className="text-gray-500 mb-8 max-w-xs mx-auto">Try adjusting your filters or browsing our other curated collections.</p>
                <button 
                  onClick={clearFilter}
                  className="px-10 py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
          <aside className="absolute inset-y-0 right-0 w-80 bg-white p-8 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black">Filters</h3>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-50 rounded-xl">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Collections</h4>
                <div className="space-y-3">
                  <button onClick={() => updateCategory('all')} className={`w-full text-left font-bold ${!categoryFilter ? 'text-indigo-600' : 'text-slate-600'}`}>All Products</button>
                  {CATEGORIES.map(cat => (
                    <button key={cat.id} onClick={() => updateCategory(cat.slug)} className={`w-full text-left font-bold ${categoryFilter === cat.slug ? 'text-indigo-600' : 'text-slate-600'}`}>{cat.name}</button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ShopPage;
