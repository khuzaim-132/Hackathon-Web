import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const messages = [
  {
    participants: 'Ayesha Khan → Sara Noor',
    content: 'I checked your portfolio request. Share the breakpoint screenshots and I can suggest fixes.',
    time: '09:45 AM'
  },
  {
    participants: 'Hassan Ali → Ayesha Khan',
    content: 'Your event poster concept is solid. I would tighten the CTA and reduce the background texture.',
    time: '11:10 AM'
  }
];

const MessagesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="bg-brand-dark rounded-[3rem] p-16 text-white space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent" />
            <div className="space-y-4 relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                Interaction / Messaging
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
                Keep support moving through direct communication.
              </h1>
              <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
                Basic messaging gives helpers and requesters a clear follow-up path once a match happens.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Conversation Stream */}
            <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-10">
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                  Conversation Stream
                </div>
                <h2 className="text-4xl font-bold text-brand-dark tracking-tight">
                  Recent messages
                </h2>
              </div>

              <div className="space-y-6">
                {messages.map((msg, idx) => (
                  <div key={idx} className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-xl hover:shadow-brand-teal/5 transition-all group cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                          {msg.participants}
                        </h4>
                        <span className="px-4 py-1.5 bg-white text-[10px] font-bold rounded-full border border-gray-100 text-brand-teal shadow-sm">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-md font-medium">
                        {msg.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Send Message */}
            <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-10">
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                  Send Message
                </div>
                <h2 className="text-5xl font-bold text-brand-dark tracking-tight">
                  Start a<br />conversation
                </h2>
              </div>

              <form className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">To</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-5 px-8 focus:ring-2 focus:ring-brand-teal/20 outline-none font-bold text-sm text-brand-dark appearance-none cursor-pointer">
                    <option>Ayesha Khan</option>
                    <option>Sara Noor</option>
                    <option>Hassan Ali</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Share support details, ask for files, or suggest next steps."
                    className="w-full bg-gray-50 border border-gray-100 rounded-[2rem] py-6 px-8 focus:ring-2 focus:ring-brand-teal/20 focus:bg-white transition-all outline-none font-medium text-brand-dark resize-none"
                  />
                </div>

                <button type="submit" className="w-full py-6 bg-brand-teal text-white font-bold rounded-2xl shadow-xl shadow-brand-teal/20 hover:bg-brand-teal/90 transition-all active:scale-95">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MessagesPage;
