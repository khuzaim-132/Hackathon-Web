import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cookie, Info, Settings } from 'lucide-react';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 bg-amber-50 text-amber-600 rounded-3xl">
              <Cookie size={32} />
            </div>
            <h1 className="text-5xl font-black text-slate-900">Cookie Settings</h1>
          </div>
          <div className="prose prose-slate max-w-none text-gray-500 leading-relaxed space-y-8 text-lg">
            <p>
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What are cookies?</h2>
              <p>
                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Manage Preferences</h2>
              <div className="space-y-4">
                {[
                  { title: "Necessary Cookies", desc: "Required for the website to function properly." },
                  { title: "Functional Cookies", desc: "Help perform certain functionalities like sharing content." },
                  { title: "Analytical Cookies", desc: "Used to understand how visitors interact with the site." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                    <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPage;
