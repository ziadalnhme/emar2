import React from 'react';
import { Building2, Shield, Users, Award } from 'lucide-react';

const Clients = () => {
  const governmentClients = [
    {
      name: 'أمانة منطقة الرياض',
      description: 'شريك استراتيجي في تطوير البنية التحتية للعاصمة',
      icon: Building2
    },
    {
      name: 'الهيئة السعودية للمقاييس والجودة',
      description: 'تنفيذ مشاريع متخصصة وفق أعلى معايير الجودة',
      icon: Shield
    }
  ];

  const privateClients = [
    {
      name: 'شركة شبه الجزيرة',
      description: 'مشاريع تجارية وصناعية متنوعة',
      icon: Building2
    },
    {
      name: 'شركة العيوني',
      description: 'تنفيذ مشاريع إنشائية متخصصة',
      icon: Award
    },
    {
      name: 'شركة الهاجدية',
      description: 'شراكة طويلة الأمد في المشاريع التطويرية',
      icon: Building2
    },
    {
      name: 'مجموعة عملاء القطاع الخاص',
      description: 'شبكة واسعة من العملاء في مختلف القطاعات',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-custom-blue font-semibold text-lg mb-2 block">عملاؤنا</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            نفخر بثقة عملائنا الكرام
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            نحن نعمل مع مجموعة متنوعة من العملاء في القطاعين الحكومي والخاص، ونفخر بالثقة التي يضعونها فينا
          </p>
        </div>

        {/* Government Clients */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Shield className="w-8 h-8 text-custom-blue" />
              <h3 className="text-2xl font-bold text-gray-900">القطاع الحكومي</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {governmentClients.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <client.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{client.name}</h4>
                    <p className="text-gray-600 leading-relaxed">{client.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Clients */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Building2 className="w-8 h-8 text-custom-blue" />
              <h3 className="text-2xl font-bold text-gray-900">القطاع الخاص</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privateClients.map((client, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-custom-blue to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <client.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{client.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-custom-blue to-blue-700 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-blue-100">عملاء رئيسيين</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-blue-100">قطاعات رئيسية</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;