import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'مجمع الأمير السكني',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'الرياض',
      date: '2023',
      description: 'مجمع سكني فاخر يضم 50 وحدة سكنية بتصميم عصري ومرافق متكاملة'
    },
    {
      id: 2,
      title: 'مصنع الخليج للصناعات',
      category: 'industrial',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'الدمام',
      date: '2023',
      description: 'مصنع حديث للصناعات الغذائية بمساحة 5000 متر مربع'
    },
    {
      id: 3,
      title: 'برج النخيل التجاري',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'جدة',
      date: '2022',
      description: 'برج تجاري من 15 طابق بتصميم معماري متميز في قلب المدينة'
    },
    {
      id: 4,
      title: 'فيلا الورود',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'الرياض',
      date: '2022',
      description: 'فيلا فاخرة بتصميم كلاسيكي حديث مع حديقة واسعة ومسبح'
    },
    {
      id: 5,
      title: 'مركز الأعمال الذكي',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'الخبر',
      date: '2022',
      description: 'مركز أعمال ذكي مجهز بأحدث التقنيات والأنظمة الذكية'
    },
    {
      id: 6,
      title: 'مستودع اللوجستيات',
      category: 'industrial',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'الرياض',
      date: '2021',
      description: 'مستودع حديث للخدمات اللوجستية بمساحة 10000 متر مربع'
    }
  ];

  const filters = [
    { id: 'all', label: 'جميع المشاريع' },
    { id: 'residential', label: 'سكني' },
    { id: 'commercial', label: 'تجاري' },
    { id: 'industrial', label: 'صناعي' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg mb-2 block">مشاريعنا</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            نفخر بإنجازاتنا المتميزة
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            تصفح مجموعة من أبرز مشاريعنا المنجزة في مختلف القطاعات السكنية والتجارية والصناعية
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category === 'residential' ? 'سكني' : 
                     project.category === 'commercial' ? 'تجاري' : 'صناعي'}
                  </span>
                </div>
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            عرض جميع المشاريع
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;