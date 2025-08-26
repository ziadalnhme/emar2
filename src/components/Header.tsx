import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="w-4 h-4" />
                <span>+966 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail className="w-4 h-4" />
                <span>info@nemcontracting.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <MapPin className="w-4 h-4" />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ن</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">شركة نيم للمقاولات</h1>
                <p className="text-sm text-gray-600">مقاولات عامة وكهرباء</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">الرئيسية</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">من نحن</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">خدماتنا</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">مشاريعنا</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">اتصل بنا</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">الرئيسية</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">من نحن</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">خدماتنا</a>
                <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">مشاريعنا</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">اتصل بنا</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;