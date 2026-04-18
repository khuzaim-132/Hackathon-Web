import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Sparkles, TrendingUp, AlertCircle, Users, ChevronRight } from 'lucide-react';

const insights = [
  {
    tag: 'TREND PULSE',
    title: 'Web Development',
    value: '',
    description: 'Most common support area based on active community requests.',
    icon: TrendingUp
  },
  {
    tag: 'URGENCY WATCH',
    title: '2',
    value: '',
    description: 'Requests currently flagged high priority by the urgency detector.',
    icon: AlertCircle
  },
  {
    tag: 'MENTOR POOL',
    title: '2',
    value: '',
    description: 'Trusted helpers with strong response history and contribution signals.',
    icon: Users
  }
];

const recommendations = [
  {
    id: 1,
    title: 'Need help',
    summary: 'AI summary: Web Development request with high urgency. Best suited for members with relevant expertise.',
    tags: ['Web Development', 'High']
  },
  {
    id: 2,
    title: 'Need help making my portfolio responsive before demo day',
    summary: 'Responsive layout issue with a short deadline. Best helpers are frontend mentors comfortable with CSS grids and media queries.',
    tags: ['Web Development', 'High']
  },
  {
    id: 3,
    title: 'Looking for Figma feedback on a volunteer event poster',
    summary: 'A visual design critique request where feedback on hierarchy, spacing, and messaging would create the most value.',
    tags: ['Design', 'Medium']
  },
  {
    id: 4,
    title: 'Need mock interview support for internship applications',
    summary: 'Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews.',
    tags: ['Career', 'Low']
  }
];

const AICenter = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="bg-brand-dark rounded-[3rem] p-16 text-white space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
            
            <div className="space-y-4 relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                AI Center
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl">
                See what the platform intelligence is noticing.
              </h1>
              <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
                AI-like insights summarize demand trends, helper readiness, urgency signals, and request recommendations.
              </p>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover-lift group">
                <div className="space-y-6">
                  <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.3em]">
                    {item.tag}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommendations List */}
          <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-10">
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                AI Recommendations
              </div>
              <h2 className="text-4xl font-bold text-brand-dark tracking-tight">
                Requests needing attention
              </h2>
            </div>

            <div className="space-y-6">
              {recommendations.map((rec, idx) => (
                <Link 
                  key={idx} 
                  to={`/request/${rec.id}`}
                  className="block bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-xl hover:shadow-brand-teal/5 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3 flex-1">
                      <h4 className="text-lg font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                        {rec.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                        {rec.summary}
                      </p>
                      <div className="flex gap-2">
                        {rec.tags.map(tag => (
                          <span key={tag} className="px-4 py-1.5 bg-white text-[10px] font-bold rounded-full border border-gray-100 text-brand-teal shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-brand-teal group-hover:scale-110 transition-all shadow-sm">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AICenter;
