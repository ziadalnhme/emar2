import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <img 
                src="/logo-0١.svg" 
                alt="شعار شركة اعمار البنيان" 
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">شركة اعمار البنيان للمقاولات</h3>
                <p className="text-gray-400">مقاولات عامة وكهرباء</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              شركة رائدة في مجال المقاولات العامة والأعمال الكهربائية، نقدم خدمات متنوعة بأعلى معايير الجودة والسلامة منذ عام 2008.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="#certificates" className="text-gray-300 hover:text-white transition-colors">الشهادات</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">مشاريعنا</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-custom-yellow" />
                <span className="text-gray-300">+966558571233</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-custom-yellow" />
                <span className="text-gray-300">emaar.bun@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-custom-yellow mt-1" />
                <span className="text-gray-300">
                  جدة – حي الصفاء – أم القرى<br />
                  المملكة العربية السعودية
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 شركة اعمار البنيان للمقاولات العامة والكهرباء. جميع الحقوق محفوظة
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">سياسة الخصوصية</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;