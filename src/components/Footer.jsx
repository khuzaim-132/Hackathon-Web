import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Globe, Share2, Mail, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-indigo-600 p-2 rounded-xl">
                <Package className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">LUXE.</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Redefining your shopping experience with premium curated products and exceptional service since 2024.
            </p>
            <div className="flex gap-4">
              <Link to="/global" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-all cursor-pointer">
                <Globe size={18} />
              </Link>
              <Link to="/community" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-all cursor-pointer">
                <Share2 size={18} />
              </Link>
              <Link to="/contact" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-all cursor-pointer">
                <Mail size={18} />
              </Link>
              <Link to="/about" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-all cursor-pointer">
                <Info size={18} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-indigo-600 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/affiliates" className="hover:text-indigo-600 transition-colors">Affiliates</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link to="/help" className="hover:text-indigo-600 transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-indigo-600 transition-colors">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/shipping-info" className="hover:text-indigo-600 transition-colors">Shipping Info</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-indigo-600 transition-colors">Track Order</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-indigo-600 transition-colors">Cookie Settings</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">© 2024 LUXE E-Commerce. Built with passion for better shopping.</p>
          <div className="flex gap-8 text-sm text-gray-400">
            <span className="hover:text-indigo-600 cursor-pointer">English (US)</span>
            <span className="hover:text-indigo-600 cursor-pointer">USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
