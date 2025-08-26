import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <img src="/logo nem-0١.svg" alt="شعار الشركة" className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-custom-blue">شركة اعمار البنيان</h1>
                <p className="text-sm text-gray-600">للمقاولات العامة والكهرباء</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors">الرئيسية</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors">من نحن</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors">خدماتنا</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors">مشاريعنا</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors">اتصل بنا</button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-custom-blue hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors text-right">الرئيسية</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors text-right">من نحن</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors text-right">خدماتنا</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors text-right">مشاريعنا</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-custom-blue font-medium transition-colors text-right">اتصل بنا</button>
              </nav>
            </div>
          )}
        </div>
      </div>
      </header>
  );
};

export default Header;