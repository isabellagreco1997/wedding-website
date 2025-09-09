import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-pink-500 mr-3" />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">GetMyWeddingWebsite</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-pink-500 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
            <a href="#contact" className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105">
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-pink-500 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
              <a href="#contact" className="bg-pink-500 text-white px-6 py-2 rounded-full text-center hover:bg-pink-600 transition-colors">
                Get Started
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;