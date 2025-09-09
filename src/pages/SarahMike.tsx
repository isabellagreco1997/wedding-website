import React from 'react';
import { ArrowLeft, Heart, Calendar, MapPin, Users, Camera, Gift, Sparkles, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const SarahMike = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <Link 
          to="/" 
          className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full hover:bg-white transition-all flex items-center shadow-lg border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Main Site
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
          <a href="#gallery" className="text-gray-600 hover:text-gray-900 transition-colors">Points of Interest</a>
          <a href="#schedule" className="text-gray-600 hover:text-gray-900 transition-colors">Gallery</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8 lg:space-y-12">
            {/* Hero Section */}
            <section id="home" className="text-center">
              <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-4" style={{fontFamily: 'Dancing Script, cursive'}}>
                Wedding Sarah & Mike
              </h1>
              <p className="text-lg text-gray-600 mb-8">JUNE 15th 2024 - LONDON</p>
              
              {/* Photo Gallery Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-8">
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg" 
                    alt="Sarah and Mike" 
                    className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" 
                    alt="Wedding moment" 
                    className="w-full h-24 sm:h-32 md:h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" 
                    alt="Ceremony" 
                    className="w-full h-24 sm:h-32 md:h-48 object-cover rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg" 
                    alt="Reception" 
                    className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 mb-8">
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">127</div>
                    <div className="text-sm text-gray-600">days</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">15</div>
                    <div className="text-sm text-gray-600">hours</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">42</div>
                    <div className="text-sm text-gray-600">minutes</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">18</div>
                    <div className="text-sm text-gray-600">seconds</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Schedule Section */}
            <section id="schedule" className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
              <h2 className="text-3xl font-serif text-center mb-8 text-gray-800" style={{fontFamily: 'Dancing Script, cursive'}}>
                Schedule
              </h2>
              
              <div className="space-y-8">
                {/* June 23rd */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 border-b pb-2">June 23rd</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <div className="font-semibold text-gray-800">17:30</div>
                        <div className="text-sm text-gray-600">GROOM & GUESTS ARRIVAL TO CHURCH</div>
                        <div className="text-sm text-gray-500">Iglesia de San Bartolomé</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* June 24th */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 border-b pb-2">June 24th</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <div className="font-semibold text-gray-800">18:00</div>
                        <div className="text-sm text-gray-600">CEREMONY</div>
                        <div className="text-sm text-gray-500">Iglesia de San Bartolomé</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <div className="font-semibold text-gray-800">19:30</div>
                        <div className="text-sm text-gray-600">BUS TO CELEBRATION VENUE</div>
                        <div className="text-sm text-gray-500">to be defined</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <div className="font-semibold text-gray-800">20:00</div>
                        <div className="text-sm text-gray-600">CELEBRATION</div>
                        <div className="text-sm text-gray-500">Cerrajería</div>
                      </div>
                      <img 
                        src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" 
                        alt="Celebration venue" 
                        className="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded-lg mt-2 sm:mt-0 sm:ml-4"
                      />
                    </div>
                  </div>
                </div>

                {/* June 25th */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 border-b pb-2">June 25th</h3>
                  <div className="text-center py-8">
                    <div className="text-3xl sm:text-4xl lg:text-6xl font-light text-gray-300 mb-4">DESCANSO</div>
                    <div className="text-sm text-gray-500">Rest and recovery day</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Directions & Points of Interest */}
            <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-serif mb-6 text-gray-800" style={{fontFamily: 'Dancing Script, cursive'}}>
                Directions & Points of Interest
              </h2>
              
              {/* Map placeholder */}
              <div className="bg-green-100 h-32 sm:h-40 lg:h-48 rounded-lg mb-6 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg" 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                    <MapPin className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">Wedding Venue</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span>Iglesia de San Bartolomé</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span>Cerrajería (Ceremony)</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span>Hotel contestable</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span>Bus to celebration</span>
                </div>
              </div>

              <button className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                See other recommended places
              </button>
            </section>

            {/* Instagram Section */}
            <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-serif mb-6 text-gray-800 text-center" style={{fontFamily: 'Dancing Script, cursive'}}>
                Instagram
              </h2>
              
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 mb-2">CONNECT TO INSTAGRAM AND TAG THIS EVENT</p>
                <div className="text-base sm:text-lg font-semibold text-gray-800">#SARAH-MIKE</div>
              </div>

              {/* Instagram Grid */}
              <div className="grid grid-cols-2 gap-1 sm:gap-2 mb-4">
                <img 
                  src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg" 
                  alt="Instagram post" 
                  className="w-full h-16 sm:h-20 lg:h-24 object-cover rounded"
                />
                <img 
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" 
                  alt="Instagram post" 
                  className="w-full h-16 sm:h-20 lg:h-24 object-cover rounded"
                />
                <img 
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" 
                  alt="Instagram post" 
                  className="w-full h-16 sm:h-20 lg:h-24 object-cover rounded"
                />
                <img 
                  src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg" 
                  alt="Instagram post" 
                  className="w-full h-16 sm:h-20 lg:h-24 object-cover rounded"
                />
              </div>

              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                Go to Gallery
              </button>
            </section>

            {/* RSVP Section */}
            <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-serif mb-6 text-gray-800 text-center" style={{fontFamily: 'Dancing Script, cursive'}}>
                RSVP
              </h2>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400 text-sm"
                  />
                </div>
                <div>
                  <select className="w-full p-2 sm:p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400 text-sm text-gray-600">
                    <option>Will you be joining us?</option>
                    <option>Yes, with joy in my heart!</option>
                    <option>Sadly, I cannot attend</option>
                  </select>
                </div>
                <div>
                  <select className="w-full p-2 sm:p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400 text-sm text-gray-600">
                    <option>Dinner Selection</option>
                    <option>Herb-Crusted Chicken</option>
                    <option>Beef Tenderloin</option>
                    <option>Garden Vegetarian</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Special dietary requirements or message for the couple..."
                    className="w-full p-2 sm:p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400 text-sm h-16 sm:h-20 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-gray-200 text-gray-700 py-2 sm:py-3 rounded text-sm hover:bg-gray-300 transition-colors font-medium">
                  Send RSVP
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>

      {/* Add Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" 
        rel="stylesheet"
      />
    </div>
  );
};

export default SarahMike;