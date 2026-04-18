import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Dashboard from './pages/Dashboard';
import CareersPage from './pages/CareersPage';
import ShippingPage from './pages/ShippingPage';
import LegalPage from './pages/LegalPage';
import JobApplicationPage from './pages/JobApplicationPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ShippingInfoPage from './pages/ShippingInfoPage';
import AffiliatesPage from './pages/AffiliatesPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import GlobalPage from './pages/GlobalPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="antialiased font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/global" element={<GlobalPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/shipping-info" element={<ShippingInfoPage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/apply" element={<JobApplicationPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
