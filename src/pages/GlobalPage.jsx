import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Globe, Shield, Zap, Heart, ArrowRight, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalPage = () => {
  const regions = [
    { name: "North America", status: "Full Coverage", delay: "2-3 Days", hub: "New York, USA" },
    { name: "Europe", status: "Full Coverage", delay: "3-5 Days", hub: "Berlin, Germany" },
    { name: "Asia Pacific", status: "Expanding", delay: "5-7 Days", hub: "Singapore" },
    { name: "Middle East", status: "Available", delay: "7-10 Days", hub: "Dubai, UAE" }
  ];

  const globalStats = [
    { label: "Countries Served", value: "120+" },
    { label: "Daily Shipments", value: "25k+" },
    { label: "Support Languages", value: "18" },
    { label: "Carbon Neutral", value: "100%" }
  ];

  const shippingRates = [
    { zone: "Zone 1 (Domestic)", weight: "Up to 5kg", price: "$5.00", delivery: "1-2 Days" },
    { zone: "Zone 2 (Regional)", weight: "Up to 5kg", price: "$12.00", delivery: "2-4 Days" },
    { zone: "Zone 3 (Global)", weight: "Up to 5kg", price: "$25.00", delivery: "5-7 Days" },
    { zone: "Zone 4 (Remote)", weight: "Up to 5kg", price: "$45.00", delivery: "7-10 Days" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-indigo-500/50">
              <Globe size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Global Presence</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Experience LUXE anywhere in the world. We've built a robust global network to bring premium lifestyle products to your doorstep, no matter the distance.
            </p>
          </div>
        </section>

        {/* Global Stats */}
        <section className="py-20 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {globalStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{stat.value}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Seamless International <span className="text-indigo-600">Shipping.</span></h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Our logistics network spans across continents, ensuring that every package is handled with the utmost care and delivered with precision speed.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Truck, title: "Express Delivery", desc: "Premium air freight for all international orders." },
                  { icon: Shield, title: "Secure Customs", desc: "Automated paperwork for hassle-free border crossing." },
                  { icon: Zap, title: "Real-time Tracking", desc: "Monitor your package across every border in real-time." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {regions.map((region, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{region.name}</h4>
                  <p className="text-xs font-bold text-indigo-600 mb-4">{region.hub}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{region.status}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium">Avg. Transit: {region.delay}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Rates Table */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Standard Shipping Rates</h2>
              <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest">Region Zone</th>
                      <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest">Weight Limit</th>
                      <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest">Flat Rate</th>
                      <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest">Est. Delivery</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {shippingRates.map((rate, i) => (
                      <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                        <td className="px-8 py-6 font-bold text-slate-900">{rate.zone}</td>
                        <td className="px-8 py-6 text-slate-500 font-medium">{rate.weight}</td>
                        <td className="px-8 py-6 font-black text-indigo-600">{rate.price}</td>
                        <td className="px-8 py-6 text-slate-900 font-bold">{rate.delivery}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-indigo-600 py-32 text-center text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to join our world?</h2>
            <Link to="/shop" className="inline-flex px-12 py-5 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all shadow-xl group">
              Start Shopping <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GlobalPage;
