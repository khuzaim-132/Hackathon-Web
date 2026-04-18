import React from 'react';
import { Leaf, Zap, Heart, Globe, Award, Users, Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We prioritize eco-friendly materials and ethical manufacturing processes in every product we curate."
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "Pushing the boundaries of design and technology to bring you the most advanced lifestyle gadgets."
  },
  {
    icon: Heart,
    title: "Community",
    desc: "Building a global network of creators and enthusiasts who value quality, style, and performance."
  }
];

const stats = [
  { label: "Happy Customers", value: "10k+" },
  { label: "Years Experience", value: "5+" },
  { label: "Global Partners", value: "50+" }
];

const team = [
  {
    name: "Emma Sullivan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "James Chen",
    role: "Chief Design Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Sarah Miller",
    role: "Head of Community",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Split-Screen Hero Section */}
        <section className="flex flex-col lg:flex-row min-h-[700px]">
          <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-20 bg-slate-50">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full w-fit">
              Our Mission
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Redefining <br />
              <span className="text-indigo-600">Quality.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-10">
              We believe that great design should be accessible, sustainable, and built to last. Our mission is to bridge the gap between premium performance and everyday luxury.
            </p>
            <div className="flex gap-4">
              <Link to="/shop" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-600 transition-all active:scale-95">
                Explore Collection
              </Link>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden h-[400px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
              alt="Brand Mission" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Statistics Bar */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-5xl font-bold text-slate-900 tracking-tighter">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="container mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-gray-500 text-lg">The principles that guide every decision we make and every product we select.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Team */}
        <section className="bg-slate-50 py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet the Visionaries</h2>
                <p className="text-gray-500 text-lg">A diverse team of designers, engineers, and strategists working together to build the future of e-commerce.</p>
              </div>
              <button className="px-8 py-4 border-2 border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-white hover:border-indigo-100 transition-all flex items-center gap-2">
                Join Our Team <Users size={18} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <div key={index} className="group relative overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-2">
                  <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 bg-gray-50">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-indigo-600 font-medium text-sm mb-6">{member.role}</p>
                  
                  {/* Social Icons Overlay on Hover */}
                  <div className="flex gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer">
                      <Share2 size={18} />
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer">
                      <Globe size={18} />
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer">
                      <Mail size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-6 py-24 lg:py-32 text-center">
          <div className="max-w-3xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-24 shadow-2xl shadow-indigo-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Have Questions?</h2>
              <p className="text-indigo-100 text-lg mb-12 max-w-md mx-auto leading-relaxed">
                Whether you're looking for help with an order or just want to say hi, our team is always here to listen.
              </p>
              <Link to="/contact" className="inline-flex px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl shadow-xl hover:bg-indigo-50 transition-all active:scale-95 group">
                Contact Support <Share2 size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
