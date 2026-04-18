import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User, Mail, Hash, Loader2 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('Student')
          .select('name, email, roll_number');

        if (supabaseError) throw supabaseError;
        setStudents(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-32 bg-slate-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-brand-dark tracking-tight">Student Directory</h1>
          <p className="text-gray-400 mt-2 font-medium">Viewing all students in the system</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-12 h-12 text-brand-teal animate-spin" />
          </div>
        ) : error ? (
          <div className="p-6 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 text-center font-bold">
            Error: {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal">
                      <User size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</p>
                      <p className="font-bold text-lg text-brand-dark group-hover:text-brand-teal transition-colors">{student.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</p>
                      <p className="font-medium text-slate-600">{student.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                      <Hash size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Roll Number</p>
                      <p className="font-black text-xl text-brand-dark">{student.roll_number}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {students.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400 italic">
                No students found in the database.
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default StudentList;
