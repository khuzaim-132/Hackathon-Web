import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Scale, AlertCircle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 bg-slate-100 text-slate-900 rounded-3xl">
              <FileText size={32} />
            </div>
            <h1 className="text-5xl font-black text-slate-900">Terms of Service</h1>
          </div>
          <div className="prose prose-slate max-w-none text-gray-500 leading-relaxed space-y-8 text-lg">
            <p className="font-bold text-slate-900">Last Updated: April 2026</p>
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing LUXE, you agree to be bound by these terms. If you disagree with any part, you may not access the service.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property</h2>
              <p>
                All content, features, and functionality are the exclusive property of LUXE and its licensors.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
              <p>
                You are responsible for safeguarding your account password and for any activities or actions under your account.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
