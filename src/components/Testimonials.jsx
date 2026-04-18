import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Tech Enthusiast",
    content: "The quality of the headphones is unmatched. Exceptional service and fast delivery. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Miller",
    role: "Interior Designer",
    content: "Found some unique pieces for my home office. The minimalist aesthetic is exactly what I was looking for.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "David Chen",
    role: "Freelance Developer",
    content: "The mechanical keyboard has significantly improved my typing speed. Great build quality and feel.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=david",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-500">Real feedback from our global community of shoppers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-8 right-8 text-gray-100" size={40} />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testi.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed">"{testi.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testi.avatar} 
                  alt={testi.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testi.name}</h4>
                  <p className="text-xs text-gray-500">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
