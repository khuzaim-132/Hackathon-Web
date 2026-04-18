import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    category: 'Lifestyle',
    title: 'The Future of Wearable Tech in 2026',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    author: 'Admin',
    date: 'Apr 10, 2026',
    slug: 'future-of-wearable-tech'
  },
  {
    id: 2,
    category: 'Innovation',
    title: 'How Smart Home Hubs are Changing Lives',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1000&auto=format&fit=crop',
    author: 'Tech Guru',
    date: 'Apr 12, 2026',
    slug: 'smart-home-hubs'
  },
  {
    id: 3,
    category: 'Fashion',
    title: 'Minimalism: The New Luxury Standard',
    image: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=1000&auto=format&fit=crop',
    author: 'Style Edit',
    date: 'Apr 15, 2026',
    slug: 'minimalism-luxury-standard'
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Latest from the Journal</h2>
            <p className="text-gray-500 font-medium">Discover stories, style guides, and tech reviews curated by our team.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-indigo-600 font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
            Visit Journal <ChevronRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article) => (
            <Link to={`/shop`} key={article.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-slate-900 shadow-xl">
                  {article.category}
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                {article.author} • {article.date}
              </p>
              <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors mb-4">
                {article.title}
              </h3>
              <p className="text-gray-500 line-clamp-2 font-medium mb-6">
                Explore the latest trends and innovations that are shaping the future of modern lifestyle and technology.
              </p>
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                Read More <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
