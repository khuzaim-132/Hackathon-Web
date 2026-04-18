import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Share2, Users, MessageCircle, Heart, Globe } from 'lucide-react';

const CommunityPage = () => {
  const stories = [
    { name: "Alex Rivera", role: "Creative Director", text: "LUXE products have completely transformed my workspace. The minimal design keeps me focused and inspired.", image: "https://i.pravatar.cc/150?u=alex" },
    { name: "Sarah Jenkins", role: "Tech Blogger", text: "I've been part of the LUXE Circle for 2 years. The community support and early access perks are unmatched.", image: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Marcus Thorne", role: "Minimalist Enthusiast", text: "Finally, a brand that understands the balance between high performance and aesthetic beauty.", image: "https://i.pravatar.cc/150?u=marcus" }
  ];

  const meetups = [
    { city: "New York", date: "Nov 15, 2024", location: "SoHo Loft", theme: "Tech & Design" },
    { city: "London", date: "Dec 02, 2024", location: "The Shard", theme: "Sustainable Future" },
    { city: "Tokyo", date: "Jan 12, 2025", location: "Shibuya Sky", theme: "Minimalist Living" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="bg-indigo-50 py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl border border-indigo-100">
              <Share2 size={40} className="text-indigo-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">LUXE <span className="text-indigo-600">Circle.</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Join a global community of style enthusiasts and tech lovers. Share your experience, get inspired, and be part of the future of lifestyle.
            </p>
          </div>
        </section>

        {/* Member Stories */}
        <section className="py-24 container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 text-center tracking-tight">Voices of the <span className="text-indigo-600">Circle.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stories.map((story, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[3rem] relative group hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-indigo-100">
                <div className="w-20 h-20 rounded-3xl overflow-hidden mb-8 ring-4 ring-white shadow-lg">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-lg text-slate-600 italic mb-8">"{story.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{story.name}</h4>
                  <p className="text-sm text-indigo-600 font-medium">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Upcoming Global <span className="text-indigo-400">Meetups.</span></h2>
                <p className="text-gray-400 mt-4 text-lg">Join us in person for workshops, product demos, and networking.</p>
              </div>
              <button className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20">
                View All Events
              </button>
            </div>
            
            <div className="space-y-6">
              {meetups.map((event, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-center p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/5 transition-all group">
                  <div className="flex items-center gap-8 mb-6 md:mb-0">
                    <div className="text-center md:text-left">
                      <p className="text-2xl font-black">{event.city}</p>
                      <p className="text-indigo-400 font-bold text-sm uppercase tracking-widest">{event.theme}</p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-xl font-bold text-white mb-1">{event.date}</p>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                  </div>
                  <button className="mt-6 md:mt-0 px-8 py-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 font-bold rounded-xl transition-all">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ambassador Program */}
        <section className="py-32 container mx-auto px-6">
          <div className="max-w-[1200px] mx-auto bg-slate-50 rounded-[4rem] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
                Join the Elite
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">LUXE <span className="text-indigo-600">Ambassador</span> Program.</h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Are you a creator, visionary, or trendsetter? Join our ambassador program to represent LUXE and earn exclusive benefits, commissions, and early access to our most prestigious collections.
              </p>
              <ul className="space-y-4 mb-10">
                {["15% Affiliate Commission", "Monthly Product Allowance", "V.I.P Event Invitations", "Direct Access to Design Team"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <Heart size={14} className="fill-emerald-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all shadow-xl">
                Apply for Program
              </button>
            </div>
            <div className="relative aspect-square">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Community" className="w-full h-full object-cover rounded-[3rem] shadow-2xl" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-600 rounded-[3rem] flex items-center justify-center text-white p-8 shadow-2xl rotate-12">
                <p className="text-xl font-bold text-center">Be the Face of LUXE.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Community Feed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
              "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1000",
              "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000",
              "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1000"
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-[2rem] overflow-hidden group">
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Community" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
