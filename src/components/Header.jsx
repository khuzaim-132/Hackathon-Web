import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Package, ChevronRight, LayoutDashboard } from 'lucide-react';
import { useAppSelector } from '../store/hooks';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer relative z-50">
          <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
            <Package className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">LUXE.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar - Hidden on Mobile */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-50 border-none rounded-2xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all outline-none text-sm"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 relative z-50">
          <button className="p-3 hover:bg-gray-50 rounded-2xl transition-colors md:hidden text-slate-700">
            <Search size={22} />
          </button>
          
          <Link to="/cart" className="relative p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all cursor-pointer group active:scale-95">
            <ShoppingCart size={22} className="text-slate-700 group-hover:text-indigo-600 transition-colors" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                {totalQuantity}
              </span>
            )}
          </Link>

          <button 
            onClick={toggleMenu}
            className="p-3 hover:bg-gray-50 rounded-2xl transition-colors text-slate-700 lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden pt-24 px-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Navigation</p>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between p-4 rounded-2xl text-slate-700 font-medium hover:bg-slate-50 hover:text-indigo-600 transition-all group"
            >
              {link.name}
              <ChevronRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="p-4 bg-indigo-50 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3 text-indigo-600 font-bold">
                <ShoppingCart size={20} />
                <span>Your Cart</span>
              </div>
              <span className="bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100">
                {totalQuantity} Items
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
