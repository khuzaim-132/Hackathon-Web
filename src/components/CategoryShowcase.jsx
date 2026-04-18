import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1000&auto=format&fit=crop",
    count: "120+ Products",
    size: "md:col-span-2",
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83e26371?q=80&w=1000&auto=format&fit=crop",
    count: "85+ Products",
    size: "md:col-span-1",
  },
  {
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop",
    count: "40+ Products",
    size: "md:col-span-3",
  },
];

const CategoryShowcase = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Shop by Category</h2>
          <p className="text-gray-500">Explore our wide range of premium products.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link 
            to="/categories"
            key={index} 
            className={`${cat.size} group relative overflow-hidden rounded-[2rem] bg-gray-100 min-h-[300px] cursor-pointer`}
          >
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
              <div>
                <p className="text-indigo-400 font-semibold mb-1">{cat.count}</p>
                <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white border border-white/20 transition-all group-hover:bg-indigo-600 group-hover:border-indigo-600">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
