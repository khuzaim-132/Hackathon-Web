import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1500);
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl shadow-indigo-200 transition-all duration-700">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl">
          {isSubscribed ? (
            <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center">
              <div className="bg-emerald-400/20 backdrop-blur-md w-24 h-24 rounded-3xl flex items-center justify-center mb-8 border border-emerald-400/30">
                <CheckCircle2 className="text-emerald-400" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">You're on the list!</h2>
              <p className="text-indigo-100 text-lg leading-relaxed">
                Thank you for joining our community. Check your inbox for your 10% discount code!
              </p>
            </div>
          ) : (
            <>
              <div className="bg-white/10 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                <Mail className="text-white" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Community</h2>
              <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
                Stay updated with our latest releases, exclusive offers, and lifestyle tips. Get 10% off your first order!
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 w-full" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-8 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md disabled:opacity-50"
                  disabled={isSubmitting}
                />
                <button 
                  disabled={isSubmitting}
                  className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-indigo-50 active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Subscribe
                      <Send size={20} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
              <p className="mt-8 text-indigo-200 text-xs">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
