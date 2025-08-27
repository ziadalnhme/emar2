import React from 'react';
import { Award, Shield, CheckCircle, Star, FileText, Calendar, Building2 } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'شهادة تسجيل الشركة',
      issuer: 'وزارة التجارة',
      date: '2025 - 1445',
      type: 'quality',
      description: 'شهادة تسجيل الشركة',
      icon: Award,
      image: 'https://i.postimg.cc/MGw1prKT/1-0.jpg'
    },
    {
      id: 2,
      title: 'شهادة السلامة والصحة المهنية',
      issuer: 'وزارة الموارد البشرية والتنمية الاجتماعية',
      date: '2023',
      type: 'safety',
      description: 'اعتماد معايير السلامة والصحة المهنية في بيئة العمل',
      icon: Shield,
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'ترخيص المقاولات العامة',
      issuer: 'وزارة الشؤون البلدية والقروية والإسكان',
      date: '2023',
      type: 'license',
      description: 'ترخيص رسمي لممارسة أعمال المقاولات العامة',
      icon: FileText,
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'شهادة الاعتماد الكهربائي',
      issuer: 'الهيئة السعودية للمواصفات والمقاييس والجودة',
      date: '2023',
      type: 'electrical',
      description: 'اعتماد للقيام بالأعمال الكهربائية والكهروميكانيكية',
      icon: CheckCircle,
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'شهادة التميز في الأداء',
      issuer: 'غرفة التجارة والصناعة',
      date: '2022',
      type: 'excellence',
      description: 'تقدير للأداء المتميز في قطاع المقاولات',
      icon: Star,
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'شهادة البيئة ISO 14001',
      issuer: 'المنظمة الدولية للمعايير',
      date: '2022',
      type: 'environment',
      description: 'شهادة نظام الإدارة البيئية',
      icon: Shield,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const accreditations = [
    {
      title: 'عضوية غرفة التجارة والصناعة',
      description: 'عضو فعال في غرفة التجارة والصناعة بالرياض',
      icon: Building2
    },
    {
      title: 'اعتماد وزارة الإسكان',
      description: 'مقاول معتمد لدى وزارة الشؤون البلدية والقروية والإسكان',
      icon: Shield
    },
    {
      title: 'تصنيف المقاولين',
      description: 'مصنف في الدرجة الأولى للمقاولات العامة',
      icon: Award
    },
    {
      title: 'اعتماد هيئة المواصفات',
      description: 'معتمد من الهيئة السعودية للمواصفات والمقاييس والجودة',
      icon: CheckCircle
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'quality': return 'from-blue-500 to-blue-600';
      case 'safety': return 'from-green-500 to-green-600';
      case 'license': return 'from-purple-500 to-purple-600';
      case 'electrical': return 'from-yellow-500 to-yellow-600';
      case 'excellence': return 'from-red-500 to-red-600';
      case 'environment': return 'from-teal-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-custom-blue font-semibold text-lg mb-2 block">الشهادات والاعتمادات</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            معتمدون ومؤهلون بأعلى المعايير
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            نحن نحمل جميع الشهادات والاعتمادات اللازمة لضمان تقديم خدمات عالية الجودة وفق أفضل المعايير المحلية والدولية
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">شهاداتنا</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${getTypeColor(cert.type)} rounded-full flex items-center justify-center`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-custom-blue font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(cert.type)} text-white text-xs font-semibold rounded-full`}>
                      معتمد
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">الاعتمادات والعضويات</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {accreditations.map((acc, index) => (
              <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-custom-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <acc.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{acc.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{acc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-custom-blue to-blue-700 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-blue-100">شهادات معتمدة</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4+</div>
              <div className="text-blue-100">اعتمادات رسمية</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">سنة من الخبرة</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">الالتزام بالمعايير</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;