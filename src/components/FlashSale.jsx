import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
          alt="Sale Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600 -skew-x-12 translate-x-1/2 opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-500/10 text-rose-500 px-6 py-2 rounded-full border border-rose-500/20 font-bold uppercase tracking-widest text-sm relative">
              <Zap size={18} fill="currentColor" /> Flash Sale Ending Soon!
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight relative z-10">
                Get Up To <span className="text-indigo-500">60% OFF</span> <br /> 
                On New Smart Devices
              </h2>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center group">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-black mb-2 backdrop-blur-md group-hover:bg-indigo-600 transition-all">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-50">{unit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Link to="/shop" className="w-full sm:w-auto">
                <button className="w-full px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-indigo-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 group">
                  <ShoppingCart className="group-hover:translate-x-1 transition-transform" /> Shop Sale Items
                </button>
              </Link>
              <p className="text-sm font-medium text-slate-400">
                Offer valid for selected electronics and wearable items. <br />
                Free shipping on all sale orders!
              </p>
            </div>
          </div>

          <div className="flex-1 relative group">
            <div className="relative z-10 w-full max-w-lg mx-auto bg-white p-8 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] transform -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <div className="bg-slate-50 rounded-[2rem] overflow-hidden mb-6 aspect-square">
                    <img 
                        src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop" 
                        alt="Ultra Wireless Headphones" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900">Ultra Wireless S24</h3>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Noise Cancelling • Onyx Black</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-400 line-through font-bold">$499.00</p>
                        <p className="text-3xl font-black text-indigo-600">$199.00</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-600/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
