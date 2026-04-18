import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12 md:py-20">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Browse by Category</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Discover a world of premium products carefully curated to elevate every aspect of your life.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <div 
              key={category.id}
              onClick={() => navigate(`/shop?category=${category.slug}`)}
              className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-slate-900 h-[320px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 group-hover:pb-12">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{category.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-[280px]">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Shop Now <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
