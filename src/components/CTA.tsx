import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, CheckCircle } from 'lucide-react';

const CTA = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:getmyweddingwebsite@yahoo.com?subject=Wedding Website Inquiry';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447838174191?text=Hi! I\'d love to learn more about getting a wedding website designed.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-500 to-coral-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Ready to Create Your Dream Wedding Website?
        </motion.h2>
        <motion.p 
          className="text-sm md:text-xl text-pink-100 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Let's chat about your vision! I'll deliver your perfect website in 3 days, 
          then provide unlimited adjustments until your wedding day.
        </motion.p>

        <motion.div 
          className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-lg md:text-2xl font-bold text-white mb-6">What happens next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm font-bold">1</span>
              </div>
              <div className="text-left">
                <p className="text-xs md:text-base font-semibold">Free Consultation</p>
                <p className="text-pink-100 text-xs">We'll discuss your vision and requirements</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm font-bold">2</span>
              </div>
              <div className="text-left">
                <p className="text-xs md:text-base font-semibold">3-Day Delivery</p>
                <p className="text-pink-100 text-xs">Your complete website ready in just 3 days</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm font-bold">3</span>
              </div>
              <div className="text-left">
                <p className="text-xs md:text-base font-semibold">Unlimited Adjustments</p>
                <p className="text-pink-100 text-xs">Free revisions until your wedding day</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <button
            onClick={handleEmailClick}
            className="bg-white text-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Me Now
          </button>
          
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Chat
          </button>
        </motion.div>

        <motion.div 
          className="mt-8 flex items-center justify-center text-pink-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          <span className="text-sm md:text-base">No obligation • Free quote • Quick response</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;