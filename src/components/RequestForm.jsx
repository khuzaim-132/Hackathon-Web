import React, { useState } from 'react';
import { Send, Sparkles, AlertCircle } from 'lucide-react';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Web Development',
    urgency: 'Medium',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic here to save to LocalStorage or state
  };

  return (
    <section className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[3.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Left Side: Brand Info */}
          <div className="bg-brand-dark p-12 text-white md:w-1/3 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-brand-teal rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-brand-teal/20">
                H
              </div>
              <h2 className="text-3xl font-bold leading-tight">
                Post your<br />request
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Let our AI intelligence help you find the perfect mentor or peer to solve your problem.
              </p>
            </div>
            
            <div className="space-y-4 pt-10">
              <div className="flex items-center gap-3 text-xs text-brand-teal font-bold uppercase tracking-widest">
                <Sparkles size={16} />
                AI Enhanced
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-widest">
                <AlertCircle size={16} />
                Fast Response
              </div>
            </div>
          </div>

          {/* Right Side: Actual Form */}
          <div className="p-12 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">
                    Student Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ayesha Khan"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/20 focus:bg-white transition-all outline-none text-sm font-medium text-brand-dark"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">
                    Category
                  </label>
                  <select
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/20 focus:bg-white transition-all outline-none text-sm font-medium text-brand-dark appearance-none cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>Career Guidance</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">
                  Urgency Level
                </label>
                <div className="flex gap-4">
                  {['Low', 'Medium', 'High'].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: level })}
                      className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                        formData.urgency === level 
                        ? 'bg-brand-teal/10 border-brand-teal text-brand-teal' 
                        : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">
                  Request Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you're struggling with..."
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-teal/20 focus:bg-white transition-all outline-none text-sm font-medium text-brand-dark resize-none"
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-brand-dark text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-teal transition-all shadow-xl shadow-brand-dark/10 active:scale-[0.98] group"
              >
                Post help request
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
