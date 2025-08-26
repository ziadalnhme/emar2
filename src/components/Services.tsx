import React from 'react';
import { Building, Zap, Wrench, Home, Factory, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'المقاولات العامة',
      description: 'تنفيذ المشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة',
      features: ['البناء والإنشاء', 'التشطيبات الداخلية', 'الأعمال الخرسانية', 'العزل والدهانات']
    },
    {
      icon: Zap,
      title: 'الأعمال الكهربائية',
      description: 'تركيب وصيانة الأنظمة الكهربائية للمباني السكنية والتجارية',
      features: ['التمديدات الكهربائية', 'أنظمة الإضاءة', 'لوحات التحكم', 'أنظمة الطاقة الشمسية']
    },
    {
      icon: Home,
      title: 'المشاريع السكنية',
      description: 'بناء وتطوير المجمعات السكنية والفلل والشقق',
      features: ['الفلل السكنية', 'المجمعات السكنية', 'التشطيبات الفاخرة', 'الحدائق والمناظر الطبيعية']
    },
    {
      icon: Factory,
      title: 'المشاريع الصناعية',
      description: 'تنفيذ المشاريع الصناعية والمصانع والمستودعات',
      features: ['المصانع والمستودعات', 'الهناجر الصناعية', 'أنظمة التهوية', 'المعدات الثقيلة']
    },
    {
      icon: Wrench,
      title: 'الصيانة والتشغيل',
      description: 'خدمات الصيانة الدورية والطارئة للمباني والمنشآت',
      features: ['الصيانة الدورية', 'الصيانة الطارئة', 'إدارة المرافق', 'خدمات التنظيف']
    },
    {
      icon: Cog,
      title: 'الاستشارات الهندسية',
      description: 'تقديم الاستشارات الهندسية والتصاميم المعمارية',
      features: ['التصاميم المعمارية', 'الدراسات الهندسية', 'إدارة المشاريع', 'الإشراف الهندسي']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-custom-blue font-semibold text-lg mb-2 block">خدماتنا</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            نقدم مجموعة شاملة من الخدمات
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            نحن نقدم خدمات متنوعة في مجال المقاولات العامة والأعمال الكهربائية لتلبية جميع احتياجات عملائنا
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-custom-blue rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-custom-blue hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  اعرف المزيد
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-custom-blue to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">هل تحتاج إلى استشارة مجانية؟</h3>
            <p className="text-blue-100 text-lg mb-6">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
            <button className="bg-custom-yellow hover:bg-yellow-600 text-custom-blue px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              احصل على استشارة مجانية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;