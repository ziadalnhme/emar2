import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-custom-blue font-semibold text-lg mb-2 block">تواصل معنا</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            نحن هنا لخدمتك
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            تواصل معنا للحصول على استشارة مجانية أو عرض سعر مخصص لمشروعك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">معلومات التواصل</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-custom-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">الهاتف</h4>
                  <p className="text-gray-600">+966558571233</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-custom-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</h4>
                  <p className="text-gray-600">emaar.bun@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-custom-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">العنوان</h4>
                  <p className="text-gray-600">
                    جدة – حي الصفاء – أم القرى<br />
                    المملكة العربية السعودية
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-custom-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">ساعات العمل</h4>
                  <p className="text-gray-600">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                  <p className="text-gray-600">الجمعة - السبت: مغلق</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">خريطة الموقع</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800">حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.</p>
                  </div>
                )}
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">نوع الخدمة</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                    disabled={isSubmitting}
                    required
                  >
                    <option value="">اختر نوع الخدمة</option>
                    <option value="general">مقاولات عامة</option>
                    <option value="electrical">أعمال كهربائية</option>
                    <option value="residential">مشاريع سكنية</option>
                    <option value="commercial">مشاريع تجارية</option>
                    <option value="industrial">مشاريع صناعية</option>
                    <option value="maintenance">صيانة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent resize-none"
                    placeholder="اكتب رسالتك هنا..."
                    disabled={isSubmitting}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-custom-blue hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;