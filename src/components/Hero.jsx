import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [urgency, setUrgency] = useState('Medium');

  return (
    <section className="container mx-auto px-6 pt-48 pb-28">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        
        {/* Right Column: Dark Product Feel Card (Order 1 on mobile) */}
        <div className="relative group order-1 lg:order-2">
          <div className="absolute -inset-6 bg-brand-teal/5 rounded-[4rem] blur-3xl group-hover:bg-brand-teal/10 transition-all duration-700" />
          
          <div className="relative bg-brand-dark rounded-[3rem] p-12 text-white overflow-hidden min-h-[680px] flex flex-col justify-center shadow-2xl">
            {/* Decorative Sun Icon */}
            <div className="absolute top-10 right-10 w-28 h-28 bg-gradient-to-br from-brand-orange/60 to-brand-orange rounded-full blur-sm opacity-90 shadow-[0_0_50px_rgba(255,194,92,0.3)]" />
            
            <div className="space-y-12 relative z-10">
              <div className="space-y-4 text-center lg:text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-teal">
                  Student Portal
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  Quick Support<br />
                  Request
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm max-w-sm mx-auto lg:mx-0">
                  Fill in your details below and our AI will match you with the best available mentor instantly.
                </p>
              </div>

              {/* Student Help Form */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/50 outline-none font-medium text-white placeholder:text-gray-600 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-1">Help Topic</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/50 outline-none font-medium text-white appearance-none cursor-pointer transition-all"
                  >
                    <option className="bg-brand-dark">Web Development</option>
                    <option className="bg-brand-dark">UI/UX Design</option>
                    <option className="bg-brand-dark">Digital Marketing</option>
                    <option className="bg-brand-dark">Career Guidance</option>
                    <option className="bg-brand-dark">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-1">Urgency Level</label>
                  <div className="flex gap-3">
                    {['Low', 'Medium', 'High'].map((level) => (
                      <button 
                        key={level}
                        type="button"
                        onClick={() => setUrgency(level)}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${
                          urgency === level 
                          ? 'bg-brand-teal/20 border-brand-teal text-brand-teal shadow-[0_0_20px_rgba(20,184,166,0.2)]' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-5 bg-brand-teal text-white font-bold rounded-2xl shadow-xl shadow-brand-teal/20 hover:bg-brand-teal/90 transition-all active:scale-95 flex items-center justify-center gap-3 mt-4"
                >
                  <Sparkles size={20} />
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Left Column: Content & Stats (Order 2 on mobile) */}
        <div className="space-y-20 order-2 lg:order-1 lg:pr-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-[0.3em] rounded-full border border-brand-teal/20">
              SMIT GRAND CODING NIGHT 2026
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.05] tracking-tighter">
              Find help faster.<br />
              Become help that<br />
              matters.
            </h1>
            
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              HelpHub AI is a community-powered support network for students, mentors, 
              creators, and builders. Ask for help, offer help, track impact, and let AI surface 
              smarter matches across the platform.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link 
                to="/explore" 
                className="px-10 py-4 bg-gradient-to-r from-brand-teal to-[#167D75] text-white font-bold rounded-2xl shadow-xl shadow-brand-teal/25 hover:from-[#167D75] hover:to-brand-teal transition-all active:scale-95 text-sm"
              >
                Open product demo
              </Link>
              <Link 
                to="/create-request" 
                className="px-10 py-4 bg-white text-brand-dark font-bold rounded-2xl border border-gray-200 hover:border-brand-teal/30 hover:bg-gray-50 transition-all active:scale-95 shadow-sm text-sm"
              >
                Post a request
              </Link>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-3 hover:shadow-xl hover:shadow-brand-teal/5 transition-all">
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">Members</div>
              <div className="text-3xl font-bold text-brand-dark tracking-tight">384+</div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Students, mentors, and helpers in the loop.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-3 hover:shadow-xl hover:shadow-brand-teal/5 transition-all">
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">Requests</div>
              <div className="text-3xl font-bold text-brand-dark tracking-tight">72+</div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Support posts shared across journeys.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-3 hover:shadow-xl hover:shadow-brand-teal/5 transition-all">
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">Solved</div>
              <div className="text-3xl font-bold text-brand-dark tracking-tight">69+</div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Problems resolved through community action.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
