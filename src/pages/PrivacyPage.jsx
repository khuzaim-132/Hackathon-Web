import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Eye, ShieldCheck, Lock } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 bg-indigo-50 text-indigo-600 rounded-3xl">
              <Eye size={32} />
            </div>
            <h1 className="text-5xl font-black text-slate-900">Privacy Policy</h1>
          </div>
          <div className="prose prose-slate max-w-none text-gray-500 leading-relaxed space-y-8 text-lg">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p>
                At LUXE, we are committed to protecting your personal data and your privacy. This policy explains how we handle your information when you interact with our brand.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly to us (name, email, shipping address) and information collected automatically through your use of our site (IP address, device info).
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Info</h2>
              <p>
                We use your information to process orders, provide customer support, and send you personalized marketing communications if you have opted in.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
