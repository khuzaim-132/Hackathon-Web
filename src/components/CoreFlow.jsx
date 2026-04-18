import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Users, Award } from 'lucide-react';

const features = [
  {
    title: 'Ask for help clearly',
    description: 'Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.',
    icon: PenTool,
  },
  {
    title: 'Discover the right people',
    description: 'Use the explore feed, helper lists, notifications, and messaging to move quickly once a match happens.',
    icon: Users,
  },
  {
    title: 'Track real contribution',
    description: 'Trust scores, badges, solved requests, and rankings help the community recognize meaningful support.',
    icon: Award,
  },
];

const CoreFlow = () => {
  return (
    <section className="container mx-auto px-6 py-40">
      <div className="space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
              Core Flow
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark tracking-tight leading-[1.1]">
              From struggling alone to<br className="hidden md:block" /> solving together
            </h2>
          </div>
          
          <Link 
            to="/onboarding" 
            className="px-8 py-4 bg-white text-brand-dark font-bold rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all active:scale-95 text-sm uppercase tracking-widest"
          >
            Try onboarding AI
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-teal/5 transition-all group"
            >
              <div className="w-16 h-16 bg-brand-teal/10 rounded-[1.5rem] flex items-center justify-center text-brand-teal mb-10 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-6 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFlow;
