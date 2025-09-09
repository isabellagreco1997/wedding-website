import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, Calendar, Users } from 'lucide-react';

const Mockups = () => {
  const mockups = [
    {
      title: "Sarah & Mike's Wedding",
      url: "sarahandmike.com",
      link: "/sarah-mike",
      image: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg",
      features: ["Custom RSVP", "Photo Gallery", "Countdown Timer"],
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Emma & James Forever",
      url: "emmaandjames.love",
      link: "/emma-james",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
      features: ["Digital Guestbook", "Venue Maps", "Wedding Party"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Lisa & David's Big Day",
      url: "lisaanddavid.wedding",
      link: "/lisa-david",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
      features: ["Event Timeline", "Registry Links", "Travel Info"],
      color: "from-coral-400 to-orange-400"
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
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">
            Beautiful Wedding Websites I've Created
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            Each website is completely custom-designed to reflect the couple's unique love story. 
            Here are some examples of my recent work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockups.map((mockup, index) => (
            <motion.div
              key={index} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link 
                to={mockup.link}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
              >
              {/* Mockup Browser Frame */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600 text-center">
                  {mockup.url}
                </div>
              </div>

              {/* Website Preview */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${mockup.color} opacity-90`}></div>
                <img 
                  src={mockup.image} 
                  alt={`${mockup.title} website preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="text-lg font-bold">{mockup.title}</h3>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {mockup.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Delivered in 3 days</span>
                    <div className="flex items-center">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      <span>View Website</span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm md:text-lg text-gray-600 mb-6">
            Ready to see your love story come to life online?
          </p>
          <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            Your website could be ready in just 3 days!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockups;