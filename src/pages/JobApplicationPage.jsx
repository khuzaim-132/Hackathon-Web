import React, { useState } from 'react';
import { Upload, Send, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JobApplicationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    linkedin: '',
    coverLetter: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Application submitted successfully! Our hiring team will review it and get back to you.');
    navigate('/careers');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/careers" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 font-bold mb-8 transition-colors group">
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Careers
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Start Your Journey.</h1>
            <p className="text-xl text-gray-500 mb-12">Complete the form below and show us why you're a great fit for our team.</p>

            <form onSubmit={handleSubmit} className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Portfolio Link</label>
                  <input 
                    type="url" 
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="https://behance.net/yourname"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">LinkedIn Profile</label>
                <input 
                  type="url" 
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  placeholder="https://linkedin.com/in/yourname"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Resume / CV</label>
                <div className="w-full p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-white flex flex-col items-center justify-center gap-4 hover:border-indigo-500 hover:bg-indigo-50/30 transition-all cursor-pointer group">
                  <div className="p-4 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-all">
                    <Upload size={24} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-700">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400">PDF, DOCX (Max 5MB)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Cover Letter</label>
                <textarea 
                  rows={6}
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                  placeholder="Tell us why you're excited about this role..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-6 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-600 transition-all active:scale-95 flex items-center justify-center gap-3 group"
              >
                Submit Application
                <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplicationPage;
