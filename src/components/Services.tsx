import React from 'react';
import { Building, Zap, Wrench, Home, Factory, Cog } from 'lucide-react';
import { useServices } from '../hooks/useServices';

const Services = () => {
  const { services: dbServices, loading, error } = useServices();

  // البيانات الافتراضية
  const defaultServices = [
    {
      id: '1',
      icon: Building,
      title: 'الأعمال الإنشائية',
      description: 'تنفيذ جميع أنواع الأعمال الإنشائية بأعلى معايير الجودة والسلامة',
      features: ['الأعمال الخرسانية', 'الهياكل الإنشائية', 'الأساسات', 'الأعمال المدنية']
    },
    {
      id: '2',
      icon: Factory,
      title: 'الهياكل المعدنية',
      description: 'تصميم وتنفيذ الهياكل المعدنية للمشاريع الصناعية والتجارية',
      features: ['المصانع والمعامل', 'المخازن والمستودعات', 'المباني المعدنية', 'الصالات الرياضية']
    },
    {
      icon: Home,
      title: 'تنفيذ المباني',
      description: 'تنفيذ جميع أنواع المباني بمختلف الاستخدامات والأغراض',
      features: ['المباني الإدارية والتجارية', 'المباني التعليمية والصحية', 'المباني السكنية والخدمية', 'التشطيبات المتكاملة']
    },
    {
      icon: Wrench,
      title: 'شبكات المياه والصرف',
      description: 'تنفيذ وصيانة شبكات المياه ومشاريع الصرف الصحي',
      features: ['شبكات المياه', 'مشاريع الصرف الصحي', 'محطات المعالجة', 'أنظمة الري']
    },
    {
      icon: Cog,
      title: 'الطرق والجسور',
      description: 'تنفيذ مشاريع الطرق والجسور والعلامات المرورية',
      features: ['إنشاء الطرق', 'بناء الجسور', 'العلامات المرورية', 'أعمال الأسفلت']
    },
    {
      icon: Zap,
      title: 'أعمال الكهروميكانيك',
      description: 'تنفيذ الأنظمة الكهربائية والميكانيكية المتكاملة',
      features: ['الأنظمة الكهربائية', 'أنظمة التكييف', 'أنظمة السلامة', 'أنظمة التحكم الآلي']
    }
  ];

  // استخدام البيانات من قاعدة البيانات أو البيانات الافتراضية
  const services = dbServices.length > 0 ? dbServices.map(service => ({
    ...service,
    icon: getIconComponent(service.icon),
    features: service.features || []
  })) : defaultServices;

  function getIconComponent(iconName: string) {
    const icons: { [key: string]: any } = {
      building: Building,
      factory: Factory,
      home: Home,
      wrench: Wrench,
      cog: Cog,
      zap: Zap
    };
    return icons[iconName] || Building;
  }

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
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-custom-blue"></div>
            <p className="mt-2 text-gray-600">جاري تحميل الخدمات...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-gray-600">سيتم عرض الخدمات الافتراضية</p>
          </div>
        ) : null}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id || index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features?.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-custom-blue rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                )) || null}
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

      </div>
    </section>
  );
};

export default Services;