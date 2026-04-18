import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const notifications = [
  {
    title: '"Need help" was marked as solved',
    type: 'Status',
    time: 'Just now',
    status: 'Unread'
  },
  {
    title: 'Ayesha Khan offered help on "Need help"',
    type: 'Match',
    time: 'Just now',
    status: 'Unread'
  },
  {
    title: 'Your request "Need help" is now live in the community feed',
    type: 'Request',
    time: 'Just now',
    status: 'Unread'
  },
  {
    title: '"Need help making my portfolio responsive before demo day" was marked as solved',
    type: 'Status',
    time: 'Just now',
    status: 'Unread'
  },
  {
    title: '"Need help making my portfolio responsive before demo day" was marked as solved',
    type: 'Status',
    time: 'Just now',
    status: 'Unread'
  },
  {
    title: '"Need help making my portfolio responsive before demo day" was marked as solved',
    type: 'Status',
    time: 'Just now',
    status: 'Unread'
  },
  {
    title: 'New helper matched to your responsive portfolio request',
    type: 'Match',
    time: '12 min ago',
    status: 'Unread'
  },
  {
    title: 'Your trust score increased after a solved request',
    type: 'Reputation',
    time: '1 hr ago',
    status: 'Unread'
  },
  {
    title: 'AI Center detected rising demand for interview prep',
    type: 'Insight',
    time: 'Today',
    status: 'Read'
  }
];

const NotificationsPage = () => {
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
                Notifications
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
                Stay updated on requests, helpers, and trust signals.
              </h1>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm space-y-10">
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.4em]">
                Live Updates
              </div>
              <h2 className="text-4xl font-bold text-brand-dark tracking-tight">
                Notification feed
              </h2>
            </div>

            <div className="space-y-4">
              {notifications.map((notif, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center justify-between p-8 rounded-[2rem] border transition-all cursor-pointer group ${
                    notif.status === 'Unread' 
                    ? 'bg-white border-gray-100 hover:shadow-xl hover:shadow-brand-teal/5' 
                    : 'bg-gray-50/50 border-transparent opacity-60'
                  }`}
                >
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                      {notif.title}
                    </h4>
                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                      <span>{notif.type}</span>
                      <span>•</span>
                      <span>{notif.time}</span>
                    </div>
                  </div>
                  <div className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    notif.status === 'Unread' 
                    ? 'bg-gray-50 text-brand-dark border border-gray-100' 
                    : 'bg-transparent text-gray-300'
                  }`}>
                    {notif.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotificationsPage;
