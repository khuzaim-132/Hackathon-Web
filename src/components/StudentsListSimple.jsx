import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const StudentsListSimple = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        // Fetch name, email, and roll_number from 'students' table
        const { data, error } = await supabase
          .from('students')
          .select('name, email, roll_number');

        if (error) throw error;
        setStudents(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading students...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Student Directory</h2>
      <ul className="space-y-4">
        {students.map((student, index) => (
          <li 
            key={index} 
            className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col gap-1">
              <span className="font-bold text-lg text-slate-900">{student.name}</span>
              <span className="text-sm text-slate-500">{student.email}</span>
              <span className="text-xs font-mono text-brand-teal mt-1">
                Roll: {student.roll_number}
              </span>
            </div>
          </li>
        ))}
        {students.length === 0 && (
          <p className="text-slate-500 italic">No students found.</p>
        )}
      </ul>
    </div>
  );
};

export default StudentsListSimple;
