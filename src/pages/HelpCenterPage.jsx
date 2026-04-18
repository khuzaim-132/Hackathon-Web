import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, ShoppingBag, Truck, RotateCcw, CreditCard, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenterPage = () => {
  const categories = [
    { icon: ShoppingBag, title: "Orders", desc: "Track, change, or cancel an order" },
    { icon: Truck, title: "Shipping", desc: "Delivery times and shipping costs" },
    { icon: RotateCcw, title: "Returns", desc: "How to return or exchange items" },
    { icon: CreditCard, title: "Payments", desc: "Methods and billing issues" },
  ];

  const faqs = [
    { q: "How do I track my order?", a: "Once your order ships, you'll receive an email with a tracking link. You can also view it in your dashboard." },
    { q: "What is your return policy?", a: "We offer a 30-day return policy for all unworn items in their original packaging." },
    { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide. Shipping costs vary by location." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Search Hero */}
        <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">How can we help?</h1>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input 
                type="text" 
                placeholder="Search for articles, topics..."
                className="w-full pl-16 pr-8 py-6 bg-white/10 border border-white/20 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-md text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="p-10 border border-gray-100 rounded-[3rem] hover:border-indigo-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <cat.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Questions */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Popular Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{faq.q}</h4>
                  <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help? */}
        <section className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageCircle size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Still need help?</h2>
            <p className="text-gray-500 mb-10">Our support team is available 24/7 to assist you with any questions.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all active:scale-95">
              Contact Support <ChevronRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenterPage;
