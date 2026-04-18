import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, RotateCcw, ShieldCheck, Globe } from 'lucide-react';

const ShippingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-black text-slate-900 mb-12">Shipping & Returns</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="p-8 bg-slate-50 rounded-[2.5rem]">
                <Truck className="text-indigo-600 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Fast Shipping</h3>
                <p className="text-gray-500 leading-relaxed">
                  We offer free standard shipping on all orders over $100. Most orders are processed and shipped within 1-2 business days.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem]">
                <RotateCcw className="text-indigo-600 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Easy Returns</h3>
                <p className="text-gray-500 leading-relaxed">
                  Not satisfied? Return your items within 30 days for a full refund or exchange. We make the process simple and hassle-free.
                </p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Detailed Shipping Info</h2>
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-4 font-bold text-slate-900">Method</th>
                        <th className="px-6 py-4 font-bold text-slate-900">Delivery Time</th>
                        <th className="px-6 py-4 font-bold text-slate-900">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-6 py-4">Standard Shipping</td>
                        <td className="px-6 py-4">3-5 Business Days</td>
                        <td className="px-6 py-4">Free ($100+)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Express Shipping</td>
                        <td className="px-6 py-4">1-2 Business Days</td>
                        <td className="px-6 py-4">$15.00</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">International</td>
                        <td className="px-6 py-4">7-14 Business Days</td>
                        <td className="px-6 py-4">$35.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Return Policy</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Items must be returned in their original condition, unworn and with all tags attached. Once we receive your return, we'll process your refund within 5-7 business days.
                </p>
                <ul className="space-y-4">
                  {['Free return shipping on exchanges', 'Full refund to original payment method', '30-day money-back guarantee'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <ShieldCheck className="text-indigo-600" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPage;
