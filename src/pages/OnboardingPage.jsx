import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const OnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-[0.3em] rounded-full border border-brand-teal/20 mx-auto">
              Onboarding AI
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark tracking-tight leading-[1.05]">
              Let's build your<br />community identity.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Our AI will guide you through setting up your profile, discovering requests, and matching with the right people to help or learn from.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 pt-10">
            {[
              { title: 'Define Role', desc: 'Choose if you want to help, get help, or both.', icon: CheckCircle2 },
              { title: 'Match Skills', desc: 'Our AI analyzes your expertise for better matching.', icon: Sparkles },
              { title: 'Start Helping', desc: 'Jump into the feed and see live community signals.', icon: ArrowRight }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6 group hover:shadow-2xl hover:shadow-brand-teal/5 transition-all">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
                  <step.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-dark">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="pt-10 flex justify-center">
            <button 
              onClick={() => navigate('/join')}
              className="px-12 py-5 bg-brand-dark text-white font-bold rounded-2xl shadow-2xl hover:bg-brand-teal transition-all flex items-center gap-3 active:scale-95 group"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OnboardingPage;
