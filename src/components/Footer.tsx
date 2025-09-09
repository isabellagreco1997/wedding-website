import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:getmyweddingwebsite@yahoo.com?subject=Wedding Website Inquiry';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447838174191?text=Hi! I\'d love to learn more about getting a wedding website designed.', '_blank');
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-8 sm:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500 mr-2 sm:mr-3" />
            </motion.div>
            <span className="text-lg sm:text-2xl font-bold">GetMyWeddingWebsite</span>
          </motion.div>
          
          <motion.p 
            className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Creating beautiful, personalized wedding websites that make your special day even more memorable.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleEmailClick}
              className="flex items-center justify-center text-sm sm:text-base text-gray-400 hover:text-pink-500 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              getmyweddingwebsite@yahoo.com
            </motion.button>
            <motion.button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center text-sm sm:text-base text-gray-400 hover:text-green-500 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              WhatsApp Chat
            </motion.button>
          </motion.div>

          <motion.div 
            className="border-t border-gray-800 pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-xs sm:text-sm px-2">
              © 2025 GetMyWeddingWebsite. Made with{' '}
              <motion.span
                className="inline-block"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Heart className="w-4 h-4 inline text-pink-500" />
              </motion.span>
              {' '}for couples everywhere.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;