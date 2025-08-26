import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#projects', label: 'مشاريعنا' },
    { href: '#contact', label: 'اتصل بنا' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-custom-blue text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Phone className="w-4 h-4" />
              <span>+966558571233</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Mail className="w-4 h-4" />
              <span>emaar.bun@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>مرحباً بكم في شركة اعمار البنيان للمقاولات</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-custom-blue to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ن</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">شركة اعمار البنيان</h1>
                <p className="text-sm text-gray-600">للمقاولات العامة والكهرباء</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-custom-blue font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-custom-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                احصل على عرض سعر
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-custom-blue"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-custom-blue font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="bg-custom-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
                  احصل على عرض سعر
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;