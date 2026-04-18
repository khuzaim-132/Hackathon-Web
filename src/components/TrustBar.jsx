import React from 'react';
import { Truck, Headphones, ShieldCheck, RotateCcw } from 'lucide-react';

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On all orders over $150" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support team" },
  { icon: ShieldCheck, title: "Secure Payment", desc: "100% secure checkout" },
  { icon: RotateCcw, title: "Money Back", desc: "30-day return policy" },
];

const TrustBar = () => {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
