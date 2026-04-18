import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, BarChart3, Users, Zap, ArrowRight } from 'lucide-react';

const AffiliatesPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "High Commissions",
      desc: "Earn up to 15% commission on every successful referral you bring to LUXE."
    },
    {
      icon: BarChart3,
      title: "Real-time Tracking",
      desc: "Access your own dashboard to monitor clicks, conversions, and earnings in real-time."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      desc: "Get personalized help from our affiliate managers to optimize your performance."
    },
    {
      icon: Zap,
      title: "Early Access",
      desc: "Be the first to know about new product launches and exclusive seasonal promotions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
              Partner Program
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
              Grow with <span className="text-indigo-600">LUXE.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Join our affiliate community and earn rewards by sharing the products you love with your audience.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">How it works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {[
                  { step: "01", title: "Sign Up", desc: "Join our program for free in just a few minutes." },
                  { step: "02", title: "Promote", desc: "Share your unique link on your blog or social media." },
                  { step: "03", title: "Earn", desc: "Get paid for every sale made through your link." }
                ].map((item, i) => (
                  <div key={i} className="relative z-10">
                    <div className="text-6xl font-black text-white/10 mb-6">{item.step}</div>
                    <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-indigo-600 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start earning?</h2>
              <button className="px-12 py-5 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all flex items-center gap-2 mx-auto group">
                Become an Affiliate <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform"/>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AffiliatesPage;
