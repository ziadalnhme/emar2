<?php get_header(); ?>

<!-- Hero Section -->
<section id="home" class="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden pt-24">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div class="text-white">
                <div class="mb-6">
                    <span class="inline-block px-4 py-2 bg-blue-600/20 rounded-full text-blue-200 text-sm font-medium mb-4">
                        شركة رائدة في المقاولات
                    </span>
                    <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        نبني
                        <span class="text-custom-yellow"> المستقبل</span>
                        <br />
                        بأيدي خبيرة
                    </h1>
                    <p class="text-xl text-blue-100 leading-relaxed mb-8">
                        شركة اعمار البنيان للمقاولات العامة والكهرباء - خبرة تمتد لأكثر من 15 عاماً في تنفيذ المشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة والسلامة
                    </p>
                </div>

                <!-- Features -->
                <div class="grid sm:grid-cols-2 gap-4 mb-8">
                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-blue-100">مقاولات عامة</span>
                    </div>
                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-blue-100">أعمال كهربائية</span>
                    </div>
                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-blue-100">تشطيبات فاخرة</span>
                    </div>
                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-blue-100">صيانة شاملة</span>
                    </div>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4">
                    <button onclick="scrollToSection('#projects')" class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <span>تصفح مشاريعنا</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Image/Visual -->
            <div class="relative">
                <div class="relative z-10">
                    <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" alt="مشروع إنشائي" class="rounded-2xl shadow-2xl w-full h-96 object-cover" />
                    
                    <!-- Floating Cards -->
                    <div class="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-blue-900">+200</div>
                            <div class="text-sm text-gray-600">مشروع مكتمل</div>
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-6 -left-6 bg-custom-yellow rounded-xl p-4 shadow-xl">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-custom-blue">15+</div>
                            <div class="text-sm text-custom-blue">سنة خبرة</div>
                        </div>
                    </div>
                </div>
                
                <!-- Background Decoration -->
                <div class="absolute inset-0 bg-gradient-to-br from-custom-yellow/20 to-custom-blue/20 rounded-2xl transform rotate-6 scale-105 -z-10"></div>
            </div>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
    </div>
</section>

<?php
// تضمين الأقسام الأخرى
get_template_part('template-parts/about');
get_template_part('template-parts/services');
get_template_part('template-parts/clients');
get_template_part('template-parts/projects');
get_template_part('template-parts/contact');
?>

<?php get_footer(); ?>