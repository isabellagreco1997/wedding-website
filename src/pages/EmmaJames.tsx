import React from 'react';
import { ArrowLeft, Heart, Calendar, MapPin, Users, Camera, MessageSquare, Star, Moon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmmaJames = () => {
  return (
    <div className="min-h-screen bg-white">
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
      <nav className="absolute top-0 left-0 right-0 z-40 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-lg font-light text-gray-600 tracking-wider">
              EMMA + JAMES
            </div>
            <div className="hidden md:flex space-x-8 text-sm text-gray-600">
              <a href="#story" className="hover:text-gray-900 transition-colors">Our Story</a>
              <a href="#party" className="hover:text-gray-900 transition-colors">Wedding Party</a>
              <a href="#schedule" className="hover:text-gray-900 transition-colors">Schedule</a>
              <a href="#information" className="hover:text-gray-900 transition-colors">Information</a>
              <a href="#gallery" className="hover:text-gray-900 transition-colors">Gallery</a>
              <a href="#registry" className="hover:text-gray-900 transition-colors">Registry</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
        
        {/* Decorative corners */}
        <div className="absolute top-20 left-8 w-16 h-16 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full text-sage-400">
            <path d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-20 right-8 w-16 h-16 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full text-sage-400">
            <path d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        <div className="relative z-10 text-center text-gray-700 max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide text-gray-600">
            EMMA MARIN
          </h1>
          <div className="text-3xl md:text-5xl font-script text-sage-500 mb-6" style={{fontFamily: 'Dancing Script, cursive'}}>
            and
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-12 tracking-wide text-gray-600">
            JAMES RIVERS
          </h1>
          
          <div className="text-2xl md:text-3xl font-script text-sage-500 mb-12" style={{fontFamily: 'Dancing Script, cursive'}}>
            September 22, 2024
          </div>
          
          <button className="bg-sage-400 text-white px-12 py-4 text-sm tracking-wider hover:bg-sage-500 transition-colors">
            RSVP
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-px bg-gray-300 mx-auto mb-12"></div>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
            Welcome to our wedding website! We've created this site as a convenient and interactive way to share all of the 
            important details with you leading up to our wedding. We can't wait to celebrate this exciting new chapter of our 
            lives together with you.
          </p>
          
          <div className="w-24 h-px bg-gray-300 mx-auto mt-12"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6 tracking-wide">OUR STORY</h2>
            <div className="w-24 h-px bg-sage-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg" 
                alt="Emma and James" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-700">How We Met</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Our love story began on a crisp autumn evening in Manchester, where we both happened to be attending 
                the same art gallery opening. James was admiring a painting of the night sky when Emma walked up and 
                mentioned how the stars reminded her of her favorite constellation.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                That conversation about stars and dreams lasted until the gallery closed, and we knew we had found 
                something special. Three years later, under those same stars, James proposed during a midnight picnic 
                in the countryside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Party Section */}
      <section id="party" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6 tracking-wide">WEDDING PARTY</h2>
            <div className="w-24 h-px bg-sage-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-700 mb-8">BRIDESMAIDS</h3>
              <div className="space-y-8">
                <div>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
                    alt="Maid of Honor" 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h4 className="text-lg font-light text-gray-700">Sophie - Maid of Honor</h4>
                  <p className="text-sm text-gray-500">Emma's sister and best friend</p>
                </div>
                <div>
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                    alt="Bridesmaid" 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h4 className="text-lg font-light text-gray-700">Lucy</h4>
                  <p className="text-sm text-gray-500">College roommate</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-700 mb-8">GROOMSMEN</h3>
              <div className="space-y-8">
                <div>
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                    alt="Best Man" 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h4 className="text-lg font-light text-gray-700">Tom - Best Man</h4>
                  <p className="text-sm text-gray-500">James's brother</p>
                </div>
                <div>
                  <img 
                    src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg" 
                    alt="Groomsman" 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h4 className="text-lg font-light text-gray-700">Alex</h4>
                  <p className="text-sm text-gray-500">University friend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6 tracking-wide">SCHEDULE</h2>
            <div className="w-24 h-px bg-sage-400 mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-700 mb-8">September 22, 2024</h3>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-2xl mx-auto">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <div className="text-lg font-light text-gray-700">2:00 PM</div>
                    <div className="text-sm text-gray-500">CEREMONY</div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-sm text-gray-600">St. Mary's Chapel</div>
                    <div className="text-xs text-gray-500">Manchester</div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-2xl mx-auto">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <div className="text-lg font-light text-gray-700">3:30 PM</div>
                    <div className="text-sm text-gray-500">COCKTAIL HOUR</div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-sm text-gray-600">Garden Terrace</div>
                    <div className="text-xs text-gray-500">The Grand Hotel</div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-2xl mx-auto">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <div className="text-lg font-light text-gray-700">6:00 PM</div>
                    <div className="text-sm text-gray-500">RECEPTION</div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-sm text-gray-600">Grand Ballroom</div>
                    <div className="text-xs text-gray-500">Dancing until midnight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section id="information" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6 tracking-wide">INFORMATION</h2>
            <div className="w-24 h-px bg-sage-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-gray-700 mb-6">ACCOMMODATIONS</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">The Grand Hotel</h4>
                  <p className="text-sm text-gray-600">Special rate available</p>
                  <p className="text-sm text-gray-500">Book by August 1st</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Manchester Inn</h4>
                  <p className="text-sm text-gray-600">Budget-friendly option</p>
                  <p className="text-sm text-gray-500">5 minutes from venue</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-gray-700 mb-6">TRAVEL</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Manchester Airport</h4>
                  <p className="text-sm text-gray-600">20 minutes to venue</p>
                  <p className="text-sm text-gray-500">Shuttle service available</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Parking</h4>
                  <p className="text-sm text-gray-600">Complimentary valet</p>
                  <p className="text-sm text-gray-500">At ceremony and reception</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6 tracking-wide">GALLERY</h2>
            <div className="w-24 h-px bg-sage-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg" 
              alt="Gallery" 
              className="w-full h-48 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" 
              alt="Gallery" 
              className="w-full h-48 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" 
              alt="Gallery" 
              className="w-full h-48 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg" 
              alt="Gallery" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6 tracking-wide">REGISTRY</h2>
          <div className="w-24 h-px bg-sage-400 mx-auto mb-12"></div>
          
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Your presence at our wedding is the greatest gift we could ask for. If you would like to honor us with a gift, 
            we have registered at the following stores.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-light text-gray-700 mb-4">JOHN LEWIS</h3>
              <button className="text-sage-500 hover:text-sage-600 transition-colors text-sm">
                VIEW REGISTRY
              </button>
            </div>
            <div>
              <h3 className="text-lg font-light text-gray-700 mb-4">AMAZON</h3>
              <button className="text-sage-500 hover:text-sage-600 transition-colors text-sm">
                VIEW REGISTRY
              </button>
            </div>
            <div>
              <h3 className="text-lg font-light text-gray-700 mb-4">HONEYMOON FUND</h3>
              <button className="text-sage-500 hover:text-sage-600 transition-colors text-sm">
                CONTRIBUTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" 
        rel="stylesheet"
      />
      
      <style jsx>{`
        .text-sage-400 { color: #9ca3af; }
        .text-sage-500 { color: #6b7280; }
        .text-sage-600 { color: #4b5563; }
        .bg-sage-400 { background-color: #9ca3af; }
        .bg-sage-500 { background-color: #6b7280; }
        .hover\\:bg-sage-500:hover { background-color: #6b7280; }
        .hover\\:text-sage-600:hover { color: #4b5563; }
      `}</style>
    </div>
  );
};

export default EmmaJames;