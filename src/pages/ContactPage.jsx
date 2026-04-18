import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Our team will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "support@luxe-ecommerce.com",
      description: "Our support team typically responds within 2 hours during business hours."
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm EST. International rates may apply."
    },
    {
      icon: MapPin,
      title: "Visit Our Studio",
      value: "123 Design Avenue, New York, NY 10012",
      description: "Come visit our showroom to experience our products in person."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Contact Hero */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              We'd love to <span className="text-indigo-600">hear from you.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Have a question about an order, a product, or just want to say hello? Our dedicated team is here to help you every step of the way.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="container mx-auto px-6 -mt-16 relative z-10 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <method.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{method.value}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form & Extra Info */}
        <section className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Form */}
            <div className="flex-1">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Send us a Message</h2>
                <p className="text-gray-500 mb-10">Use the form below to reach out, and we'll connect you with the right person from our team.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full md:w-fit px-12 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-600 transition-all active:scale-95 flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              </div>
            </div>

            {/* Side Info */}
            <div className="lg:w-1/3 space-y-12">
              <div className="p-10 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200">
                <h3 className="text-2xl font-bold mb-6">Support Hours</h3>
                <div className="space-y-4 opacity-90">
                  <div className="flex items-center gap-4">
                    <Clock size={20} />
                    <div>
                      <p className="font-bold">Monday - Friday</p>
                      <p className="text-sm">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock size={20} />
                    <div>
                      <p className="font-bold">Saturday</p>
                      <p className="text-sm">10:00 AM - 4:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe size={20} />
                    <div>
                      <p className="font-bold">Sunday</p>
                      <p className="text-sm">Closed (Online Support Only)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Connect with us</h3>
                <div className="flex flex-col gap-4">
                  <div 
                    onClick={() => alert('Starting Live Chat... our agents will be with you shortly!')}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-100"
                  >
                    <div className="p-3 bg-slate-100 rounded-xl text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Live Chat</p>
                      <p className="text-sm text-gray-500">Available on our website</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
