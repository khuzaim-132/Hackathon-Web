import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-black text-slate-900 mb-12">Legal Information</h1>
            
            <div className="space-y-16">
              <section id="privacy">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                    <Eye size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
                </div>
                <div className="prose prose-slate max-w-none text-gray-500 leading-relaxed space-y-4">
                  <p>
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                  </p>
                  <p>
                    We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This may include your name, email address, shipping address, and payment information.
                  </p>
                </div>
              </section>

              <section id="terms">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                    <FileText size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Terms of Service</h2>
                </div>
                <div className="prose prose-slate max-w-none text-gray-500 leading-relaxed space-y-4">
                  <p>
                    By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.
                  </p>
                  <p>
                    We reserve the right to modify or replace these terms at any time. Your continued use of the website after any changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </section>

              <section id="cookies">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                    <Lock size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Cookie Settings</h2>
                </div>
                <div className="prose prose-slate max-w-none text-gray-500 leading-relaxed space-y-4">
                  <p>
                    We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                  </p>
                  <p>
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
