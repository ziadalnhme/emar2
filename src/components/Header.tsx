import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'الرئيسية', type: 'link' },
    { href: '#about', label: 'من نحن', type: 'scroll' },
    { href: '#services', label: 'خدماتنا', type: 'scroll' },
    { href: '/certificates', label: 'الشهادات', type: 'link' },
    { href: '#projects', label: 'مشاريعنا', type: 'scroll' },
    { href: '#contact', label: 'اتصل بنا', type: 'scroll' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (item: any) => {
    if (item.type === 'scroll') {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
        window.location.href = '/' + item.href;
      } else {
        scrollToSection(item.href);
      }
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      {/* Main Navigation */}
      <nav className={`py-4 px-6 mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-2xl' : 'bg-white/95 backdrop-blur-sm shadow-lg'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img 
                  src="/logo-0١.svg" 
                  alt="شعار شركة اعمار البنيان" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">شركة اعمار البنيان</h1>
                  <p className="text-sm text-gray-600">للمقاولات العامة والكهرباء</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-gray-700 hover:text-custom-blue font-medium transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item)}
                    className="text-gray-700 hover:text-custom-blue font-medium transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom-blue transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              ))}
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
                  item.type === 'link' ? (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-700 hover:text-custom-blue font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.href}
                      onClick={() => handleNavigation(item)}
                      className="text-gray-700 hover:text-custom-blue font-medium transition-colors text-right"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-custom-blue font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
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
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-custom-blue font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;