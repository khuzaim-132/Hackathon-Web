import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
  {
    title: "Senior Product Designer",
    location: "New York / Remote",
    type: "Full-time",
    department: "Design"
  },
  {
    title: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "Content Marketing Manager",
    location: "London / Hybrid",
    type: "Full-time",
    department: "Marketing"
  }
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-black text-slate-900 mb-6">Build the Future of <br/><span className="text-indigo-600">Commerce.</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Join a team of visionaries, creators, and engineers working together to redefine the shopping experience.
            </p>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Open Positions</h2>
              <p className="text-gray-500">Find your next challenge and grow with us.</p>
            </div>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold">All Departments</span>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Link to="/apply" key={index} className="p-8 border border-gray-100 rounded-[2rem] hover:border-indigo-200 hover:shadow-xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer block">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{job.department}</span>
                  <h3 className="text-2xl font-bold text-slate-900">{job.title}</h3>
                  <div className="flex gap-6 text-gray-400 text-sm">
                    <span className="flex items-center gap-2"><MapPin size={16}/> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={16}/> {job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Apply Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform"/>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
