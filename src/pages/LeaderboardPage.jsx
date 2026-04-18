import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const rankings = [
  {
    rank: '#1',
    name: 'Ayesha Khan',
    trust: '100%',
    contributions: '35 contributions',
    skills: 'Figma, UI/UX, HTML/CSS'
  },
  {
    rank: '#2',
    name: 'Hassan Ali',
    trust: '88%',
    contributions: '24 contributions',
    skills: 'JavaScript, React, Git/GitHub'
  },
  {
    rank: '#3',
    name: 'Sara Noor',
    trust: '74%',
    contributions: '11 contributions',
    skills: 'Python, Data Analysis'
  }
];

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="bg-brand-dark rounded-[3rem] p-16 text-white space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
            <div className="space-y-4 relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                Leaderboard
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
                Recognize the people who keep the community moving.
              </h1>
              <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
                Trust score, contribution count, and badges create visible momentum for reliable helpers.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Rankings */}
            <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-10">
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                  Top Helpers
                </div>
                <h2 className="text-5xl font-bold text-brand-dark tracking-tight">
                  Rankings
                </h2>
              </div>

              <div className="space-y-6">
                {rankings.map((user, idx) => (
                  <div key={idx} className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100/50 hover:bg-white hover:shadow-xl hover:shadow-brand-teal/5 transition-all group cursor-pointer">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-brand-dark text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-brand-teal transition-colors">
                          {user.rank}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold text-brand-dark">
                            {user.name}
                          </h4>
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                            {user.skills}
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-lg font-black text-brand-dark">{user.trust}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{user.contributions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust and achievement */}
            <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-10">
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                  Badge System
                </div>
                <h2 className="text-5xl font-bold text-brand-dark tracking-tight">
                  Trust and achievement
                </h2>
              </div>

              <div className="space-y-12 pt-6">
                {rankings.map((user, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="text-lg font-bold text-brand-dark mb-1">{user.name}</h4>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                          {idx === 0 ? 'Design Ally • Top Mentor' : idx === 1 ? 'Code Rescuer • Bug Hunter' : 'Community Voice'}
                        </p>
                      </div>
                    </div>
                    <div className="h-4 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                      <div 
                        className="h-full bg-brand-teal rounded-full transition-all duration-1000"
                        style={{ width: user.trust }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LeaderboardPage;
