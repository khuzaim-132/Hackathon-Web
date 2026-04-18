import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Sparkles, Send, Info, Wand2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const CreateRequestPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    category: 'Web Development',
    urgency: 'Medium'
  });

  const [aiAnalysis, setAiAnalysis] = useState({
    category: 'Analyzing...',
    urgency: 'Analyzing...',
    tags: [],
    rewrite: ''
  });

  const [isApplying, setIsApplying] = useState(false);

  // Simple "AI" heuristic analysis
  useEffect(() => {
    const text = (formData.title + ' ' + formData.description).toLowerCase();
    
    let category = 'Web Development';
    if (text.includes('figma') || text.includes('ui') || text.includes('ux') || text.includes('design')) category = 'UI/UX Design';
    else if (text.includes('marketing') || text.includes('seo') || text.includes('ads')) category = 'Digital Marketing';
    else if (text.includes('career') || text.includes('job') || text.includes('interview')) category = 'Career Guidance';

    let urgency = 'Medium';
    if (text.includes('urgent') || text.includes('asap') || text.includes('deadline') || text.includes('tomorrow') || text.includes('today')) urgency = 'High';
    else if (text.includes('later') || text.includes('whenever') || text.includes('no rush')) urgency = 'Low';

    const tags = [];
    if (text.includes('react')) tags.push('React');
    if (text.includes('javascript') || text.includes('js')) tags.push('JavaScript');
    if (text.includes('css') || text.includes('tailwind')) tags.push('TailwindCSS');
    if (text.includes('node')) tags.push('Node.js');
    if (text.includes('figma')) tags.push('Figma');
    if (text.includes('responsive')) tags.push('Responsive');

    let rewrite = '';
    if (formData.description.length > 10) {
      rewrite = `I'm currently working on ${formData.title || 'a project'} and I've hit a roadblock with ${formData.description.substring(0, 30)}... I'm looking for a mentor to help me debug this and understand the best practices.`;
    }

    const timer = setTimeout(() => {
      setAiAnalysis({
        category,
        urgency,
        tags: tags.slice(0, 3),
        rewrite
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.title, formData.description]);

  const applySuggestions = () => {
    setIsApplying(true);
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        category: aiAnalysis.category,
        urgency: aiAnalysis.urgency,
        tags: aiAnalysis.tags.join(', '),
        description: aiAnalysis.rewrite || prev.description
      }));
      setIsApplying(false);
      toast.success('AI enhancements applied!');
    }, 800);
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description) {
      toast.error('Please fill in the title and description');
      return;
    }
    toast.success('Request published to the community!');
    console.log('Publishing:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F8F9F3]">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="bg-brand-dark rounded-[3.5rem] p-16 text-white space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/20 to-transparent" />
            <div className="space-y-4 relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-teal">
                Create Request
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
                Turn a rough problem into<br />a clear help request.
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-medium">
                Our smart guidance helps you structure your request so the right people can find and help you faster.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-12 border border-gray-100 shadow-sm space-y-12">
              <div className="space-y-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Problem Title</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    placeholder="e.g. Need review on my JavaScript quiz app before submission"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 px-8 focus:ring-4 focus:ring-brand-teal/5 focus:bg-white focus:border-brand-teal/20 transition-all outline-none font-bold text-brand-dark placeholder:text-gray-300"
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em]">Detailed Description</label>
                    <span className="text-[10px] font-bold text-gray-300">{formData.description.length} characters</span>
                  </div>
                  <textarea 
                    rows={8}
                    value={formData.description}
                    placeholder="Explain the challenge, what you've tried so far, your deadline, and exactly what kind of help you need..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-[2.5rem] py-8 px-8 focus:ring-4 focus:ring-brand-teal/5 focus:bg-white focus:border-brand-teal/20 transition-all outline-none font-medium text-brand-dark resize-none placeholder:text-gray-300"
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Tags (Comma Separated)</label>
                    <input 
                      type="text" 
                      value={formData.tags}
                      placeholder="e.g. JavaScript, Debugging, React"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 px-8 focus:ring-4 focus:ring-brand-teal/5 focus:bg-white focus:border-brand-teal/20 transition-all outline-none font-bold text-brand-dark placeholder:text-gray-300"
                      onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Category</label>
                    <div className="relative">
                      <select 
                        value={formData.category}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 px-8 focus:ring-4 focus:ring-brand-teal/5 focus:bg-white focus:border-brand-teal/20 transition-all outline-none font-bold text-brand-dark appearance-none cursor-pointer"
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                      >
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>Digital Marketing</option>
                        <option>Career Guidance</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <Info size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 max-w-xs">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Urgency Level</label>
                  <div className="flex p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
                    {['Low', 'Medium', 'High'].map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({...formData, urgency: level})}
                        className={`flex-1 py-3.5 text-xs font-bold rounded-xl transition-all ${
                          formData.urgency === level 
                          ? 'bg-white text-brand-dark shadow-sm border border-gray-100' 
                          : 'text-gray-400 hover:text-brand-dark'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 pt-10 border-t border-gray-50">
                <button 
                  onClick={applySuggestions}
                  disabled={isApplying || (!formData.title && !formData.description)}
                  className="px-8 py-4.5 bg-brand-teal/10 text-brand-teal font-bold rounded-2xl hover:bg-brand-teal/20 transition-all flex items-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isApplying ? (
                    <div className="w-5 h-5 border-2 border-brand-teal border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Wand2 size={20} className="group-hover:rotate-12 transition-transform" />
                  )}
                  Magic AI Enhance
                </button>
                <button 
                  onClick={handlePublish}
                  className="px-10 py-4.5 bg-brand-dark text-white font-bold rounded-2xl shadow-xl shadow-brand-dark/10 hover:bg-brand-teal transition-all flex items-center gap-3 active:scale-95 group"
                >
                  Publish request
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* AI Assistant Column */}
            <div className="bg-white rounded-[3.5rem] p-12 border border-gray-100 shadow-sm sticky top-32 space-y-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              
              <div className="space-y-2 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                    Smart Analysis
                  </div>
                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark leading-tight">
                  Guidance engine
                </h2>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center py-5 border-b border-gray-50 group">
                  <span className="text-sm font-bold text-gray-400">Suggested category</span>
                  <span className={`text-sm font-bold transition-colors ${aiAnalysis.category !== 'Analyzing...' ? 'text-brand-teal' : 'text-gray-200'}`}>
                    {aiAnalysis.category}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-5 border-b border-gray-50">
                  <span className="text-sm font-bold text-gray-400">Detected urgency</span>
                  <span className={`text-sm font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest ${
                    aiAnalysis.urgency === 'High' ? 'bg-orange-50 text-brand-orange border border-brand-orange/10' :
                    aiAnalysis.urgency === 'Medium' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                    aiAnalysis.urgency === 'Low' ? 'bg-gray-50 text-gray-500 border border-gray-100' :
                    'text-gray-200'
                  }`}>
                    {aiAnalysis.urgency}
                  </span>
                </div>

                <div className="space-y-4 py-5 border-b border-gray-50">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-400">Magic tags</span>
                    <Sparkles size={16} className={aiAnalysis.tags.length > 0 ? 'text-brand-teal' : 'text-gray-200'} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {aiAnalysis.tags.length > 0 ? (
                      aiAnalysis.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-brand-teal/5 text-brand-teal text-[10px] font-bold rounded-lg border border-brand-teal/10 animate-in zoom-in-50">
                          {tag}
                        </span>
                      ))
                    ) : (
                      <p className="text-[11px] text-gray-300 font-bold italic">
                        Type more for tag suggestions
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 py-5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-400">Draft enhancement</span>
                    <div className="flex gap-2">
                      <CheckCircle2 size={16} className={aiAnalysis.rewrite ? 'text-emerald-500' : 'text-gray-200'} />
                    </div>
                  </div>
                  <div className={`p-6 rounded-[2rem] text-xs leading-relaxed font-bold transition-all ${
                    aiAnalysis.rewrite 
                    ? 'bg-brand-dark text-white shadow-xl shadow-brand-dark/10' 
                    : 'bg-gray-50 text-gray-300 italic'
                  }`}>
                    {aiAnalysis.rewrite || "Start describing your challenge to see a professional rewrite of your request."}
                  </div>
                  {aiAnalysis.rewrite && (
                    <p className="text-[10px] text-brand-teal font-bold text-center animate-pulse">
                      Click 'Magic AI Enhance' to apply this draft
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateRequestPage;
