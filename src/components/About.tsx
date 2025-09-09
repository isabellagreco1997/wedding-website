import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Users, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-8">
              <img 
                src="/Screenshot 2025-09-09 202301.png" 
                alt="Wedding Website Developer" 
                className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0 shadow-lg"
              />
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm Isabella - Your Wedding Website Specialist
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed">
              As a solo developer who's passionate about creating beautiful digital experiences, 
              I specialize exclusively in wedding websites. I deliver your perfect site in just 
              3 days, then provide unlimited consultations and adjustments until your wedding day.
            </p>
            <p className="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed">
              Your wedding day is unique, and your website should be too. That's why I work 
              closely with each couple to create a completely custom design that reflects your 
              love story, with unlimited revisions until it's absolutely perfect.
            </p>

            <div className="mb-8">
              <a 
                href="https://www.linkedin.com/in/isabella-greco-01960916a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg mx-auto lg:mx-0"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8 text-pink-500" />
                </div>
                <p className="font-semibold text-gray-900">5+ Years</p>
                <p className="text-sm text-gray-600">Web Design</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <p className="font-semibold text-gray-900">100+</p>
                <p className="text-sm text-gray-600">Websites Built</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <p className="font-semibold text-gray-900">3 Days</p>
                <p className="text-sm text-gray-600">Delivery</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-pink-100 to-coral-100 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Choose Me?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-pink-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-gray-900">Personal Attention</p>
                  <p className="text-xs md:text-base text-gray-600">You'll work directly with me, not a team or agency</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-pink-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-gray-900">Wedding Specialist</p>
                  <p className="text-xs md:text-base text-gray-600">I only do wedding websites, so I know exactly what works</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-pink-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-gray-900">Lightning Fast</p>
                  <p className="text-xs md:text-base text-gray-600">Your website delivered in just 3 days</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-pink-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-gray-900">Unlimited Adjustments</p>
                  <p className="text-xs md:text-base text-gray-600">Free revisions and support until your wedding day</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;