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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-2xl md:text-6xl block" style={{fontFamily: 'Dancing Script, cursive'}}>
              Your Dream Wedding Website,
            </span>
            <span className="text-2xl md:text-6xl text-white block" style={{fontFamily: 'Dancing Script, cursive'}}>
              Beautifully Crafted
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-sm md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your perfect wedding website delivered in 3 days, with unlimited adjustments until your big day.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={handleEmailClick}
              className="bg-pink-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-pink-600 transition-all transform hover:scale-105 shadow-xl flex items-center backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Mail className="w-5 h-5 mr-2" />
              </motion.div>
              Get Your Free Quote
            </motion.button>
            
            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl flex items-center backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
              </motion.div>
              Chat on WhatsApp
            </motion.button>
          </motion.div>

          <motion.div 
            className="text-xs md:text-sm text-white drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Free consultation • 3-day delivery • Unlimited adjustments • Mobile-friendly
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;