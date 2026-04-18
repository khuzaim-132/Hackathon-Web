import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Mail, ArrowRight, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { name: 'Explore Feed', href: '/explore' },
      { name: 'Leaderboard', href: '/leaderboard' },
      { name: 'AI Center', href: '/ai-center' },
      { name: 'Create Request', href: '/create-request' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'About HelpHub', href: '/about' },
      { name: 'Mentors', href: '/explore?role=mentor' },
      { name: 'Success Stories', href: '/' },
      { name: 'Community Guidelines', href: '/' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Bug Report', href: '/' },
      { name: 'Status', href: '/' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 mt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-teal to-transparent opacity-20" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-brand-teal rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-brand-teal/20 transition-transform group-hover:scale-105">
                H
              </div>
              <span className="text-xl font-bold tracking-tight text-white">HelpHub AI</span>
            </Link>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold leading-tight max-w-sm">
                Join our newsletter for platform updates and tips.
              </h3>
              <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/10 max-w-md group focus-within:border-brand-teal/50 transition-all">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-transparent px-6 py-3 outline-none text-sm font-medium"
                />
                <button className="p-3 bg-brand-teal text-white rounded-xl hover:bg-brand-teal/80 transition-all group-hover:shadow-lg">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex gap-6">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-brand-teal transition-colors">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-8">
                <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.4em]">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href} 
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-0 h-[1px] bg-brand-teal transition-all group-hover:w-4" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500 font-medium">
            © 2026 HelpHub AI. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-white transition-colors">Cookies</Link>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            Made with <Heart size={14} className="text-brand-orange fill-brand-orange" /> for the community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
