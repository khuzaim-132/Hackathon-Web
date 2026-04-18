import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, MapPin, Search, Filter } from 'lucide-react';

const requests = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    category: 'Design',
    priority: 'Medium',
    status: 'Open',
    title: 'Looking for Figma feedback on a volunteer event poster',
    description: 'I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.',
    author: 'Ayesha Khan',
    location: 'Lahore',
    helpers: 1,
    tags: ['Figma', 'Poster', 'Design Review']
  },
  {
    id: 4,
    category: 'Career',
    priority: 'Low',
    status: 'Open',
    title: 'Need mock interview support for internship applications',
    description: 'Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.',
    author: 'Hassan Ali',
    location: 'Karachi',
    helpers: 2,
    tags: ['Interview Prep', 'Career', 'Frontend']
  }
];

const ExplorePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="bg-brand-dark rounded-[3rem] p-16 text-white space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
            <div className="space-y-4 relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                Explore Requests
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
                Discover where you can make an impact.
              </h1>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-teal transition-all" size={20} />
              <input 
                type="text" 
                placeholder="Search requests by title, tags, or category..." 
                className="w-full bg-white border border-gray-100 rounded-[2rem] py-5 pl-16 pr-8 focus:ring-4 focus:ring-brand-teal/5 focus:border-brand-teal/20 transition-all outline-none font-medium shadow-sm"
              />
            </div>
            <button className="px-8 py-5 bg-white border border-gray-100 rounded-[2rem] font-bold text-brand-dark flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm">
              <Filter size={20} className="text-brand-teal" />
              Filters
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {requests.map((request) => (
              <div 
                key={request.id}
                className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-700"
              >
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-brand-teal/5 text-brand-teal text-[10px] font-bold rounded-full border border-brand-teal/10">
                      {request.category}
                    </span>
                    <span className={`px-4 py-1.5 text-[10px] font-bold rounded-full ${
                      request.priority === 'High' ? 'bg-orange-50 text-brand-orange border border-brand-orange/10' : 'bg-blue-50 text-blue-600 border border-blue-100'
                    }`}>
                      {request.priority}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-brand-dark leading-tight group-hover:text-brand-teal transition-colors tracking-tight">
                      {request.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {request.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between border-t border-gray-50 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-brand-teal font-bold text-xs">
                      {request.author[0]}
                    </div>
                    <div className="text-[11px] font-bold text-brand-dark">
                      {request.author}
                    </div>
                  </div>

                  <Link 
                    to={`/request/${request.id}`}
                    className="px-6 py-3 bg-gray-50 text-brand-dark text-[10px] font-bold rounded-xl hover:bg-brand-teal hover:text-white transition-all active:scale-95"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExplorePage;
