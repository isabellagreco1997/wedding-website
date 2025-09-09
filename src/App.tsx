import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Mockups from './components/Mockups';
import Testimonials from './components/Testimonials';
import WhyWeddingWebsite from './components/WhyWeddingWebsite';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SarahMike from './pages/SarahMike';
import EmmaJames from './pages/EmmaJames';
import LisaDavid from './pages/LisaDavid';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Features />
          <Mockups />
          <Testimonials />
          <WhyWeddingWebsite />
          <About />
          <CTA />
          <Footer />
        </div>
      } />
      <Route path="/sarah-mike" element={<SarahMike />} />
      <Route path="/emma-james" element={<EmmaJames />} />
      <Route path="/lisa-david" element={<LisaDavid />} />
    </Routes>
  );
}

export default App;