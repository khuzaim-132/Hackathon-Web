import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Star, MapPin, User, Save } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="space-y-12">
          {/* Profile Header */}
          <div className="bg-brand-dark rounded-[3rem] p-16 text-white space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
            <div className="space-y-4 relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                Profile
              </div>
              <h1 className="text-6xl font-bold tracking-tight">Ayesha Khan</h1>
              <div className="flex items-center gap-4 text-gray-400 font-bold">
                <span className="text-sm">Both • Karachi</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Skills & Reputation */}
            <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-12">
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                  Public Profile
                </div>
                <h2 className="text-4xl font-bold text-brand-dark tracking-tight">
                  Skills and reputation
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-sm font-bold text-gray-500">Trust score</span>
                  <span className="text-sm font-bold text-brand-dark uppercase tracking-widest">100%</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-sm font-bold text-gray-500">Contributions</span>
                  <span className="text-sm font-bold text-brand-dark uppercase tracking-widest">35</span>
                </div>

                <div className="space-y-4">
                  <span className="text-sm font-bold text-gray-500">Skills</span>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'UI/UX', 'HTML/CSS', 'Career Guidance'].map(skill => (
                      <span key={skill} className="px-5 py-2 bg-brand-teal/5 text-brand-teal text-[10px] font-bold rounded-full border border-brand-teal/10 uppercase tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-sm font-bold text-gray-500">Badges</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Design Ally', color: 'bg-orange-50 text-brand-orange border-brand-orange/10' },
                      { name: 'Fast Responder', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                      { name: 'Top Mentor', color: 'bg-green-50 text-green-600 border-green-100' }
                    ].map(badge => (
                      <span key={badge.name} className={`px-5 py-2 text-[10px] font-bold rounded-full border ${badge.color} uppercase tracking-widest`}>
                        {badge.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Profile */}
            <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-10">
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                  Edit Profile
                </div>
                <h2 className="text-4xl font-bold text-brand-dark tracking-tight">
                  Update your identity
                </h2>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Name</label>
                    <input type="text" defaultValue="Ayesha Khan" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/20 outline-none font-bold text-sm text-brand-dark" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Location</label>
                    <input type="text" defaultValue="Karachi" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/20 outline-none font-bold text-sm text-brand-dark" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Skills</label>
                  <input type="text" defaultValue="Figma, UI/UX, HTML/CSS, Career Guidance" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/20 outline-none font-bold text-sm text-brand-dark" />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Interests</label>
                  <input type="text" defaultValue="Hackathons, UI/UX, Community Building" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/20 outline-none font-bold text-sm text-brand-dark" />
                </div>

                <button className="w-full py-5 bg-brand-teal text-white font-bold rounded-2xl shadow-xl shadow-brand-teal/20 hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-3 active:scale-95 group">
                  <Save size={20} className="group-hover:rotate-[15deg] transition-transform" />
                  Save profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
