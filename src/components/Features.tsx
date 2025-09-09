import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Camera, 
  Calendar, 
  MapPin, 
  Heart, 
  MessageSquare, 
  Gift, 
  Clock, 
  Globe, 
  Plane, 
  HelpCircle, 
  Smartphone 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Custom RSVP Form",
      description: "Easy online RSVP system for guests, with meal choices, song requests, or extra questions (e.g. allergies, plus-ones)."
    },
    {
      icon: Camera,
      title: "Photo Gallery",
      description: "Dedicated section for engagement photos, couple's journey, pre-wedding shoots, or a post-wedding photo album."
    },
    {
      icon: Calendar,
      title: "Event Schedule",
      description: "Timeline for the big day (and pre/post events)—think ceremony, reception, after-party, brunch, etc."
    },
    {
      icon: MapPin,
      title: "Venue Map & Directions",
      description: "Embedded Google Maps, clickable address, parking tips, and even nearby accommodation suggestions."
    },
    {
      icon: Heart,
      title: "Wedding Party Bios",
      description: "Cute intros for bridesmaids, groomsmen, parents, and VIPs with fun photos or stories."
    },
    {
      icon: MessageSquare,
      title: "Digital Guestbook",
      description: "A space for guests to leave well-wishes, funny messages, or share memories before and after the wedding."
    },
    {
      icon: Gift,
      title: "Registry Links",
      description: "Direct links to your gift registry (Amazon, John Lewis, etc.), honeymoon fund, or charity donations."
    },
    {
      icon: Clock,
      title: "Countdown Timer",
      description: "Live countdown to the wedding date—always a hit for getting people excited!"
    },
    {
      icon: Globe,
      title: "Custom Domain Name",
      description: "Personalized website link (like iz-and-omrit.com), looks so much more special."
    },
    {
      icon: Plane,
      title: "Travel & Accommodation Info",
      description: "Hotel blocks, discount codes, airport info, transportation options—so guests never feel lost."
    },
    {
      icon: HelpCircle,
      title: "Frequently Asked Questions",
      description: "A section to answer things like dress code, kids welcome, parking, shuttle buses, RSVP deadlines, etc."
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Responsive Design",
      description: "Looks gorgeous on every device—phone, tablet, or desktop. Your guests will love the experience!"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything Your Wedding Website Needs
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            I'll include all these premium features in your custom wedding website, 
            delivered in just 3 days with unlimited adjustments until your big day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;