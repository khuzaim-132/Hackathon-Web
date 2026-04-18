import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RequestDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="space-y-12">
          {/* Request Header */}
          <div className="bg-brand-dark rounded-[3rem] p-16 text-white space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex flex-wrap gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-teal px-1">Career</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 px-1">Low</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-400 px-1">Solved</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
                Need mock interview support for internship applications
              </h1>
              <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
                Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* AI Summary */}
              <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-8">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                    AI Summary
                  </div>
                </div>
                
                <div className="bg-gray-50/50 p-10 rounded-[2rem] border border-gray-100/50 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-teal text-white rounded-xl flex items-center justify-center font-bold">H</div>
                    <span className="font-bold text-brand-dark">HelpHub AI</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    This request focuses on career coaching for entry-level frontend interviews. The candidate is looking for confidence-building and practice with common interview patterns.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Interview Prep', 'Career', 'Frontend'].map(tag => (
                      <span key={tag} className="px-5 py-2 bg-white text-[10px] font-bold rounded-full border border-gray-100 text-brand-teal">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-8">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                    Actions
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-4 bg-brand-teal text-white font-bold rounded-2xl shadow-xl shadow-brand-teal/20 hover:bg-brand-teal/90 transition-all active:scale-95">
                    I can help
                  </button>
                  <button className="px-10 py-4 bg-white text-brand-dark font-bold rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all active:scale-95">
                    Mark as solved
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Requester */}
              <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm space-y-8">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                  Requester
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-100/50">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl" />
                  <div>
                    <p className="font-bold text-brand-dark">Demo User</p>
                    <div className="flex gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                      <span>Dashboard</span>
                      <span>Explore</span>
                      <span>Messages</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Helpers */}
              <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm space-y-8">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                    Helpers
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark tracking-tight">People ready to support</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Ayesha Khan', skills: 'Figma, UI/UX, HTML/CSS', trust: 'Trust 100%' },
                    { name: 'Hassan Ali', skills: 'JavaScript, React, Git/GitHub', trust: 'Trust 88%' }
                  ].map((helper, idx) => (
                    <div key={idx} className="p-6 bg-gray-50/50 rounded-[2rem] border border-gray-100/50 space-y-4 group hover:bg-white hover:shadow-xl transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-100 text-brand-orange rounded-xl flex items-center justify-center font-bold text-xs">
                            {helper.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-bold text-brand-dark text-sm">{helper.name}</span>
                        </div>
                        <span className="px-3 py-1 bg-brand-teal/5 text-brand-teal text-[9px] font-bold rounded-full border border-brand-teal/10">
                          {helper.trust}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        {helper.skills}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestDetailPage;
