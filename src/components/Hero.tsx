import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:getmyweddingwebsite@yahoo.com?subject=Wedding Website Inquiry';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447838174191?text=Hi! I\'d love to learn more about getting a wedding website designed.', '_blank');
  };

  return (
    <section 
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            <span className="text-2xl md:text-6xl" style={{fontFamily: 'Dancing Script, cursive'}}>Your Dream Wedding Website,</span>
            <span className="text-2xl md:text-6xl text-white block" style={{fontFamily: 'Dancing Script, cursive'}}>Beautifully Crafted</span>
          </h1>
          
          <p className="text-sm md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Your perfect wedding website delivered in 3 days, with unlimited adjustments until your big day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleEmailClick}
              className="bg-pink-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-pink-600 transition-all transform hover:scale-105 shadow-xl flex items-center backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Your Free Quote
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl flex items-center backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </button>
          </div>

          <div className="text-xs md:text-sm text-white drop-shadow-md">
            Free consultation • 3-day delivery • Unlimited adjustments • Mobile-friendly
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;