import React from 'react';
import { Link } from 'react-router-dom';

const brands = [
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Intel', logo: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
];

const BrandShowcase = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center uppercase tracking-widest opacity-20">Our Tech Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
          {brands.map((brand, index) => (
            <Link to="/shop" key={index} className="flex justify-center group cursor-pointer">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-8 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
