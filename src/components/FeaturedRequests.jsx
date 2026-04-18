import React from 'react';
import { Link } from 'react-router-dom';
import { User, MapPin, Users } from 'lucide-react';

const requests = [
  {
    category: 'Web Development',
    priority: 'High',
    status: 'Solved',
    title: 'Need help',
    description: 'Help needed with some core features.',
    author: 'Ayesha Khan',
    location: 'Karachi',
    helpers: 1,
    tags: []
  },
  {
    category: 'Web Development',
    priority: 'High',
    status: 'Solved',
    title: 'Need help making my portfolio responsive before demo day',
    description: 'My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.',
    author: 'Sara Noor',
    location: 'Karachi',
    helpers: 1,
    tags: ['HTML/CSS', 'Responsive', 'Portfolio']
  },
  {
    category: 'Design',
    priority: 'Medium',
    status: 'Open',
    title: 'Looking for Figma feedback on a volunteer event poster',
    description: 'I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.',
    author: 'Ayesha Khan',
    location: 'Lahore',
    helpers: 1,
    tags: ['Figma', 'Poster', 'Design Review']
  }
];

const FeaturedRequests = () => {
  return (
    <section className="container mx-auto px-6 py-40">
      <div className="space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
              Featured Requests
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark tracking-tight leading-[1.1]">
              Community problems<br className="hidden md:block" /> currently in motion
            </h2>
          </div>
          
          <Link 
            to="/feed" 
            className="px-8 py-4 bg-white text-brand-dark font-bold rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all active:scale-95 text-xs uppercase tracking-widest"
          >
            View full feed
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {requests.map((request, index) => (
            <div 
              key={index}
              className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-700"
            >
              <div className="space-y-10">
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 bg-brand-teal/5 text-brand-teal text-[11px] font-bold rounded-full border border-brand-teal/10">
                    {request.category}
                  </span>
                  <span className={`px-5 py-2 text-[11px] font-bold rounded-full ${
                    request.priority === 'High' ? 'bg-orange-50 text-brand-orange border border-brand-orange/10' : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}>
                    {request.priority}
                  </span>
                  <span className={`px-5 py-2 text-[11px] font-bold rounded-full ${
                    request.status === 'Solved' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-gray-50 text-gray-500 border border-gray-200'
                  }`}>
                    {request.status}
                  </span>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-brand-dark leading-tight group-hover:text-brand-teal transition-colors tracking-tight">
                    {request.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed line-clamp-4">
                    {request.description}
                  </p>
                </div>

                {request.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {request.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-gray-100/50 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-xl border border-gray-200/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-12 flex items-center justify-between border-t border-gray-50 mt-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm font-bold text-brand-dark">
                    <User size={18} className="text-gray-400" />
                    {request.author}
                  </div>
                  <div className="flex flex-col gap-1.5 text-[11px] text-gray-400">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} />
                      {request.location} • 1 helper interested
                    </span>
                  </div>
                </div>

                <Link 
                  to={`/request/${index + 1}`}
                  className="px-7 py-4 bg-gray-50 text-brand-dark text-xs font-bold rounded-2xl hover:bg-brand-teal hover:text-white transition-all shadow-sm active:scale-95"
                >
                  Open details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRequests;
