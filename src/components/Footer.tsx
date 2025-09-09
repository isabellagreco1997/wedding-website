import React from 'react';
import { Heart, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:getmyweddingwebsite@yahoo.com?subject=Wedding Website Inquiry';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447838174191?text=Hi! I\'d love to learn more about getting a wedding website designed.', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500 mr-2 sm:mr-3" />
            <span className="text-lg sm:text-2xl font-bold">GetMyWeddingWebsite</span>
          </div>
          
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Creating beautiful, personalized wedding websites that make your special day even more memorable.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center text-sm sm:text-base text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              getmyweddingwebsite@yahoo.com
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center text-sm sm:text-base text-gray-400 hover:text-green-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              WhatsApp Chat
            </button>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-gray-400 text-xs sm:text-sm px-2">
              © 2025 GetMyWeddingWebsite. Made with <Heart className="w-4 h-4 inline text-pink-500" /> for couples everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;