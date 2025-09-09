import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users, 
  Smartphone, 
  Globe, 
  CheckCircle, 
  Heart,
  Calendar,
  MessageSquare,
  Camera,
  Gift
} from 'lucide-react';

const WhyWeddingWebsite = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time & Stress",
      description: "No more answering the same questions over and over. Your website handles RSVPs, directions, and FAQs automatically."
    },
    {
      icon: Users,
      title: "Keep Everyone Informed",
      description: "One central place for all wedding details. Guests always have the latest information at their fingertips."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Your guests will access your site on their phones. A mobile-optimized website ensures everyone can easily find what they need."
    },
    {
      icon: Globe,
      title: "Professional & Personal",
      description: "Stand out with a custom domain and beautiful design that reflects your unique love story and personality."
    },
    {
      icon: CheckCircle,
      title: "Effortless RSVP Management",
      description: "Track responses, meal choices, and special requests in real-time. No more chasing down paper invitations."
    },
    {
      icon: Heart,
      title: "Share Your Love Story",
      description: "Create a beautiful digital space to share your journey, photos, and excitement with family and friends."
    }
  ];

  const stats = [
    { number: "85%", label: "of couples now have wedding websites" },
    { number: "3x", label: "faster RSVP response rates" },
    { number: "60%", label: "reduction in wedding planning stress" },
    { number: "100%", label: "of guests appreciate having all info in one place" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-coral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Every Modern Couple Needs a Wedding Website
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your wedding website isn't just a nice-to-have—it's become essential for modern weddings. 
            Here's why couples who skip it often regret it.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don't Let Your Guests Feel Lost or Confused
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Without a wedding website, you'll spend countless hours answering the same questions, 
            chasing RSVPs, and dealing with confused guests. Make your life easier and your wedding more organized.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">3-day delivery guaranteed</span>
            </div>
            <div className="flex items-center text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Unlimited adjustments included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeddingWebsite;