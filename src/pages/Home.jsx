import React from 'react';
import { Truck } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import TrustBar from '../components/TrustBar';
import CategoryShowcase from '../components/CategoryShowcase';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import FlashSale from '../components/FlashSale';
import BrandShowcase from '../components/BrandShowcase';
import BlogSection from '../components/BlogSection';
import { PRODUCTS } from '../data/products';

const Home = () => {
  const trendingProducts = PRODUCTS.filter(p => p.trending);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        <CategoryShowcase />

        {/* Trending Now Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Trending Now</h2>
                <p className="text-gray-500">Most popular choices from our community.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trendingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <FlashSale />

        {/* Featured Products Section */}
        <section className="container mx-auto px-6 py-20 border-t border-gray-100">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">New Arrivals</h2>
              <p className="text-gray-500">Explore our most recent products of the season.</p>
            </div>
            <button className="text-indigo-600 font-semibold hover:underline decoration-2 underline-offset-4">
              View All Products
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <BrandShowcase />
        <BlogSection />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
