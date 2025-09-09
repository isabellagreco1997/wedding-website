import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Sparkles, Crown } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie & James",
      location: "London, UK",
      text: "Absolutely incredible service! Our website was ready in exactly 3 days as promised. The design captured our love story perfectly, and being able to make unlimited changes meant we could add new details right up until our wedding. Our guests loved the RSVP system!",
      rating: 5,
    },
    {
      name: "Aisha & David",
      location: "Birmingham, UK", 
      text: "Working with you was a dream! The 3-day turnaround was amazing, and we loved how responsive you were to all our tweaks and changes. The countdown timer had everyone so excited, and the photo gallery became the highlight for our families. Highly recommend!",
      rating: 5,
    },
    {
      name: "Maria & Alex",
      location: "Manchester, UK",
      text: "From start to finish, the experience was flawless. Our website was delivered in 3 days and looked more beautiful than we ever imagined. The unlimited adjustments feature was a lifesaver - we made so many little changes as our plans evolved. Worth every penny!",
      rating: 5,
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-6">
            Happy Couples Say It Best
          </h2>
          <p className="text-sm md:text-xl text-gray-600">
            Real reviews from couples who trusted me with their special day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <p className="text-xs md:text-base text-gray-600 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Couple Info */}
                <div className="flex items-center">
                  <img 
                    src={index === 0 ? "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg" : 
                         index === 1 ? "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" : 
                         "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"} 
                    alt={`${testimonial.name} couple photo`}
                    className="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0 border-2 border-gray-200"
                  />
                  <div>
                    <p className="text-xs md:text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;