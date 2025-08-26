import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '200+', label: 'مشروع مكتمل' },
    { icon: Users, number: '50+', label: 'عميل راضي' },
    { icon: Clock, number: '15+', label: 'سنة خبرة' },
    { icon: Shield, number: '100%', label: 'ضمان الجودة' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="text-blue-600 font-semibold text-lg mb-2 block">من نحن</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                شركة نيم للمقاولات العامة والكهرباء
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                تأسست شركة نيم للمقاولات العامة والكهرباء عام 2008، وهي شركة رائدة في مجال المقاولات العامة والأعمال الكهربائية في المملكة العربية السعودية. نحن نفخر بتقديم خدمات متميزة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                نمتلك فريقاً من المهندسين والفنيين المؤهلين والمعتمدين، ونستخدم أحدث التقنيات والمعدات لضمان تنفيذ المشاريع بأعلى معايير الجودة والسلامة.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-3">رؤيتنا</h3>
                <p className="text-gray-600">
                  أن نكون الشركة الرائدة في مجال المقاولات العامة والكهرباء في المنطقة
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-3">رسالتنا</h3>
                <p className="text-gray-600">
                  تقديم خدمات متميزة بأعلى معايير الجودة والسلامة لعملائنا الكرام
                </p>
              </div>
            </div>

            {/* CTA */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              تعرف على خدماتنا
            </button>
          </div>

          {/* Image & Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="فريق العمل"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            {/* Stats Grid */}
            <div className="absolute -bottom-8 left-4 right-4 z-20">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-lg text-center">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;