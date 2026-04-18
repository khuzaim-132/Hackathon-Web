import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 min-h-[500px] flex items-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 px-8 md:px-20 max-w-2xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Summer Collection 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Design for the <br />
            <span className="text-blue-500">Modern Era.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            Experience the future of lifestyle with our curated selection of premium electronics and minimalist accessories.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-xl shadow-blue-500/25 active:scale-95 group">
              Shop Now
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md transition-all border border-white/10 active:scale-95 text-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
