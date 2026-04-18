import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Explore', href: '/explore' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'AI Center', href: '/ai-center' },
  { name: 'Dashboard', href: '/dashboard' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-white/70 backdrop-blur-3xl rounded-[2rem] border border-white/40 px-6 h-20 flex items-center justify-between gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-[#167D75] rounded-[0.9rem] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-teal/20 transition-transform group-hover:scale-105">
            H
          </div>
          <span className="text-base font-bold tracking-tight text-brand-dark">HelpHub AI</span>
        </Link>

        {/* Desktop Navigation: Pill-in-a-Pill Design */}
        <nav className="hidden md:flex items-center bg-[#F1F3EE] rounded-full p-1.5 border border-gray-100/20">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`px-6 py-2.5 text-sm font-bold transition-all rounded-full ${
                  isActive 
                  ? 'bg-white text-brand-dark shadow-sm' 
                  : 'text-gray-400 hover:text-brand-dark'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-2.5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            Live community signals
          </div>
          
          <Link 
            to="/join" 
            className="hidden sm:block px-8 py-3.5 bg-brand-dark text-white text-sm font-bold rounded-2xl hover:bg-brand-teal transition-all shadow-xl shadow-brand-dark/10 active:scale-95"
          >
            Join the platform
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 hover:bg-gray-100 rounded-2xl transition-colors md:hidden text-brand-dark"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 md:hidden animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-5 rounded-[1.5rem] text-brand-dark font-bold hover:bg-gray-50 transition-all group"
              >
                {link.name}
                <ChevronRight size={18} className="text-gray-300 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
            <Link 
              to="/join"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full py-5 bg-brand-dark text-white text-center font-bold rounded-2xl hover:bg-brand-teal transition-all shadow-lg"
            >
              Join the platform
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
