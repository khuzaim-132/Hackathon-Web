import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CoreFlow from '../components/CoreFlow';
import RequestForm from '../components/RequestForm';
import FeaturedRequests from '../components/FeaturedRequests';
import Footer from '../components/Footer';

const Home = () => {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    const fetchTestData = async () => {
      const { data, error } = await supabase
        .from('test')
        .select('*');
      
      if (error) {
        console.error('Error fetching test data:', error);
      } else {
        console.log('Fetched from test table:', data);
        setTestData(data);
      }
    };

    fetchTestData();
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-teal selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <CoreFlow />
        <RequestForm />
        <FeaturedRequests />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
