import React from 'react';
import { ArrowLeft, Heart, Calendar, MapPin, Plane, Hotel, Car, Sun, Flower, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const LisaDavid = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <Link 
          to="/" 
          className="bg-white/90 backdrop-blur-sm text-amber-700 px-4 py-2 rounded-full hover:bg-white transition-all flex items-center shadow-lg border border-amber-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Main Site
        </Link>
      </div>

      {/* Hero Section - Warm Autumn Romance */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-orange-900/40 to-red-900/50"></div>
        
        {/* Floating autumn elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Leaf className="absolute top-20 left-12 w-5 h-5 text-amber-300/40 animate-pulse" />
          <Flower className="absolute top-32 right-16 w-4 h-4 text-orange-300/50 animate-pulse" style={{animationDelay: '1s'}} />
          <Sun className="absolute bottom-40 left-16 w-6 h-6 text-yellow-300/40 animate-pulse" style={{animationDelay: '2s'}} />
          <Leaf className="absolute top-48 right-12 w-4 h-4 text-red-300/40 animate-pulse" style={{animationDelay: '0.5s'}} />
          <Flower className="absolute bottom-32 right-20 w-5 h-5 text-amber-300/40 animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-400/20 to-orange-400/20 backdrop-blur-md rounded-full p-4 w-20 h-20 mx-auto mb-8 border border-white/30">
            <Sun className="w-12 h-12 text-amber-300 mx-auto" />
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif font-light mb-4 tracking-wide">
            Lisa <span className="text-amber-300">&</span> David
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light italic">August 10, 2024</p>
          
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-white/20">
            <p className="text-base md:text-lg mb-4 font-light">Our Golden Moment Awaits</p>
            <div className="text-3xl md:text-4xl font-serif font-light">89 Days</div>
            <div className="flex justify-center mt-4 space-x-2">
              <Sun className="w-4 h-4 text-amber-300 fill-current" />
              <Flower className="w-4 h-4 text-orange-300 fill-current" />
              <Leaf className="w-4 h-4 text-red-300 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Information - Warm Hospitality */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-amber-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6">Journey to Our Celebration</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600 font-light">We've arranged everything for your comfort</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center border border-amber-200/50 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-amber-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-amber-800 mb-4">Arriving by Air</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="font-semibold text-amber-700">Birmingham Airport (BHX)</p>
                  <p className="text-sm font-light">15 minutes to venue</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="font-semibold text-amber-700">Manchester Airport (MAN)</p>
                  <p className="text-sm font-light">1.5 hours to venue</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl text-center border border-orange-200/50 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-400 to-red-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hotel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-orange-800 mb-4">Rest & Relaxation</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="font-semibold text-orange-700">The Golden Manor</p>
                  <p className="text-sm font-light">Code: LISA2024</p>
                  <p className="text-sm text-orange-600 font-semibold">20% off</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="font-semibold text-orange-700">Cozy Inn Birmingham</p>
                  <p className="text-sm font-light">Budget-friendly charm</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-2xl text-center border border-red-200/50 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-red-400 to-amber-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-red-800 mb-4">Getting Around</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="font-semibold text-red-700">Complimentary Shuttle</p>
                  <p className="text-sm font-light">From Golden Manor to venue</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="font-semibold text-red-700">Free Parking</p>
                  <p className="text-sm font-light">Ample on-site spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Warm & Welcoming */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Sun className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6">Everything You Need to Know</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200/50 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-amber-700 flex items-center">
                <Flower className="w-5 h-5 mr-3" />
                What should I wear?
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                Think garden party elegance with autumn warmth! Flowing dresses, linen suits, and warm earth tones. 
                You'll be celebrating in our beautiful garden, so comfortable shoes are recommended for dancing on the terrace!
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200/50 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-orange-700 flex items-center">
                <Heart className="w-5 h-5 mr-3" />
                Can we bring our little ones?
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                We adore your children, but we've planned an adults-only celebration so everyone can relax and enjoy 
                the evening festivities. We hope this gives you a wonderful opportunity to unwind and dance the night away!
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-red-200/50 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-red-700 flex items-center">
                <Sun className="w-5 h-5 mr-3" />
                What time should we arrive?
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                Please join us by 3:45 PM for our 4:00 PM ceremony. The garden gates open at 3:30 PM, giving you time 
                to find your seat and enjoy the pre-ceremony ambiance with a welcome drink.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200/50 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-amber-700 flex items-center">
                <Leaf className="w-5 h-5 mr-3" />
                Photography during the ceremony?
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                We're having an unplugged ceremony to keep the moment intimate and sacred. Please keep phones and cameras 
                tucked away during the service. Our photographer will capture every precious moment, and you can snap away at the reception!
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200/50 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-orange-700 flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                When do you need our RSVP?
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                Please let us know by June 10, 2024. This helps us finalize our garden seating arrangements and 
                ensure our chef prepares the perfect amount of our signature autumn feast for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registry Section - Golden Wishes */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/30">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Golden Wishes</h2>
          <p className="text-lg md:text-xl text-amber-100 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Your presence at our celebration is the greatest gift we could ask for. If you'd like to help us 
            create our cozy new home together, we've gathered a few meaningful wishes here.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <Flower className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">John Lewis</h3>
              <p className="text-base md:text-lg text-amber-100 mb-6 font-light">Home essentials for our nest</p>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors font-serif shadow-lg">
                View Our Registry
              </button>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <Sun className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">Amazon</h3>
              <p className="text-base md:text-lg text-orange-100 mb-6 font-light">Everything for our golden life</p>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors font-serif shadow-lg">
                View Our Registry
              </button>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <Leaf className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">Honeymoon Fund</h3>
              <p className="text-base md:text-lg text-red-100 mb-6 font-light">Adventures in golden Japan!</p>
              <button className="bg-white text-red-600 px-6 py-3 rounded-xl hover:bg-red-50 transition-colors font-serif shadow-lg">
                Contribute
              </button>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center space-x-2">
            <Sun className="w-5 h-5 text-amber-300 fill-current" />
            <span className="text-amber-100 font-serif italic">With warmth and gratitude</span>
            <Heart className="w-5 h-5 text-amber-300 fill-current" />
          </div>
        </div>
      </section>

      {/* Contact - Warm Invitation */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-amber-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-8">Questions?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 font-light max-w-xl mx-auto">
            We're here to help make your journey to our celebration as smooth as possible. 
            Don't hesitate to reach out with any questions!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all font-serif text-lg shadow-lg">
              Email Lisa
            </button>
            <button className="bg-white border-2 border-amber-300 text-amber-700 px-8 py-4 rounded-xl hover:bg-amber-50 transition-all font-serif text-lg shadow-lg">
              Text David
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LisaDavid;