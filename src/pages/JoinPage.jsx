import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JoinPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        toast.success('Welcome back!');
        navigate('/dashboard');
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        toast.success('Signup successful! Please check your email.');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {/* Left Column: Info */}
            <div className="bg-brand-dark rounded-[3rem] p-16 text-white flex flex-col justify-center space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
              
              <div className="space-y-6 relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                  {isLogin ? 'Welcome Back' : 'Join Us'}
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  {isLogin ? 'Enter the support network.' : 'Start your learning journey.'}
                </h1>
                <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                  {isLogin 
                    ? 'Access your personalized dashboard and connect with the community again.' 
                    : 'Create an account to start asking for help and offering your expertise to others.'}
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    'Live real-time collaboration',
                    'Direct path into dashboard and AI Center',
                    'Persistent profile sync via Supabase'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-[3rem] p-16 border border-gray-100 shadow-sm flex flex-col justify-center space-y-10">
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                  {isLogin ? 'Login' : 'Signup'}
                </div>
                <h2 className="text-4xl font-bold text-brand-dark tracking-tight">
                  {isLogin ? 'Welcome back to HelpHub' : 'Create your account'}
                </h2>
              </div>

              <form onSubmit={handleAuth} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 px-8 focus:ring-2 focus:ring-brand-teal/20 outline-none font-bold text-sm text-brand-dark"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Password</label>
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 px-8 focus:ring-2 focus:ring-brand-teal/20 outline-none font-bold text-sm text-brand-dark"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-6 bg-brand-teal text-white font-bold rounded-2xl shadow-xl shadow-brand-teal/20 hover:bg-brand-teal/90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : (isLogin ? 'Login to dashboard' : 'Create account')}
                </button>

                <div className="text-center">
                  <button 
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm font-bold text-gray-400 hover:text-brand-teal transition-colors"
                  >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinPage;
