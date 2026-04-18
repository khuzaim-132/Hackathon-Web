import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Globe, Clock, ShieldCheck, MapPin, Package } from 'lucide-react';

import { Link } from 'react-router-dom';

const ShippingInfoPage = () => {
  const methods = [
    {
      name: "Standard Shipping",
      time: "3-5 Business Days",
      price: "Free on orders over $100",
      desc: "Reliable delivery for your everyday essentials."
    },
    {
      name: "Express Shipping",
      time: "1-2 Business Days",
      price: "$15.00",
      desc: "Priority handling and faster transit for urgent needs."
    },
    {
      name: "Next Day Delivery",
      time: "24 Hours",
      price: "$25.00",
      desc: "Order before 2 PM for next-day arrival (Select regions)."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-indigo-600 py-24 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-black mb-6">Fast & Reliable Shipping</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              We deliver globally with the world's leading carriers to ensure your products arrive safely and on time.
            </p>
          </div>
        </section>

        {/* Shipping Methods */}
        <section className="py-24 container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Delivery Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methods.map((method, i) => (
              <div key={i} className="p-10 border border-gray-100 rounded-[3rem] hover:shadow-xl transition-all bg-slate-50">
                <div className="w-12 h-12 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Truck size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{method.name}</h3>
                <p className="text-indigo-600 font-bold mb-4">{method.price}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
                  <Clock size={16} /> {method.time}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracking & Info */}
        <section className="bg-white py-24 border-t border-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-bold text-slate-900">Track Your Package</h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  As soon as your order ships, you'll receive a confirmation email with a tracking number. You can use this to follow your journey from our warehouse to your doorstep.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Worldwide Shipping</h4>
                      <p className="text-gray-500 text-sm">We ship to over 50 countries across the globe.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Insured Delivery</h4>
                      <p className="text-gray-500 text-sm">Every package is insured against loss or damage.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-slate-900 p-12 rounded-[3rem] text-white relative overflow-hidden">
                  <Package className="absolute -right-8 -bottom-8 text-white/5 w-64 h-64 rotate-12" />
                  <h3 className="text-2xl font-bold mb-6 relative z-10">Where's my order?</h3>
                  <div className="space-y-4 relative z-10">
                    <input 
                      type="text" 
                      placeholder="Enter Order Number"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder:text-gray-400"
                    />
                    <Link to="/dashboard">
                      <button className="w-full py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-indigo-500 hover:text-white transition-all">
                        Track Order
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingInfoPage;
