<?php get_header(); ?>

<!-- Hero Section -->
<section class="relative min-h-[60vh] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden pt-32">
    <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
            <div class="mb-6">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center space-x-2 rtl:space-x-reverse text-blue-200 hover:text-white transition-colors mb-4">
                    <i class="fas fa-arrow-right w-5 h-5"></i>
                    <span>العودة للرئيسية</span>
                </a>
                
                <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    الشهادات
                    <span class="text-custom-yellow"> والاعتمادات</span>
                </h1>
                <p class="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                    نحن نحمل جميع الشهادات والاعتمادات اللازمة لضمان تقديم خدمات عالية الجودة وفق أفضل المعايير المحلية والدولية
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Certificates Section -->
<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <!-- Certificates Grid -->
        <div class="mb-20">
            <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">شهاداتنا</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $certificates = array(
                    array(
                        'title' => 'شهادة الجودة ISO 9001:2015',
                        'issuer' => 'المنظمة الدولية للمعايير',
                        'date' => '2023',
                        'type' => 'quality',
                        'description' => 'شهادة نظام إدارة الجودة المعترف بها دولياً',
                        'icon' => 'fas fa-award',
                        'image' => 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
                        'color' => 'from-blue-500 to-blue-600'
                    ),
                    array(
                        'title' => 'شهادة السلامة والصحة المهنية',
                        'issuer' => 'وزارة الموارد البشرية والتنمية الاجتماعية',
                        'date' => '2023',
                        'type' => 'safety',
                        'description' => 'اعتماد معايير السلامة والصحة المهنية في بيئة العمل',
                        'icon' => 'fas fa-shield-alt',
                        'image' => 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400',
                        'color' => 'from-green-500 to-green-600'
                    ),
                    array(
                        'title' => 'ترخيص المقاولات العامة',
                        'issuer' => 'وزارة الشؤون البلدية والقروية والإسكان',
                        'date' => '2023',
                        'type' => 'license',
                        'description' => 'ترخيص رسمي لممارسة أعمال المقاولات العامة',
                        'icon' => 'fas fa-file-alt',
                        'image' => 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400',
                        'color' => 'from-purple-500 to-purple-600'
                    ),
                    array(
                        'title' => 'شهادة الاعتماد الكهربائي',
                        'issuer' => 'الهيئة السعودية للمواصفات والمقاييس والجودة',
                        'date' => '2023',
                        'type' => 'electrical',
                        'description' => 'اعتماد للقيام بالأعمال الكهربائية والكهروميكانيكية',
                        'icon' => 'fas fa-check-circle',
                        'image' => 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
                        'color' => 'from-yellow-500 to-yellow-600'
                    ),
                    array(
                        'title' => 'شهادة التميز في الأداء',
                        'issuer' => 'غرفة التجارة والصناعة',
                        'date' => '2022',
                        'type' => 'excellence',
                        'description' => 'تقدير للأداء المتميز في قطاع المقاولات',
                        'icon' => 'fas fa-star',
                        'image' => 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400',
                        'color' => 'from-red-500 to-red-600'
                    ),
                    array(
                        'title' => 'شهادة البيئة ISO 14001',
                        'issuer' => 'المنظمة الدولية للمعايير',
                        'date' => '2022',
                        'type' => 'environment',
                        'description' => 'شهادة نظام الإدارة البيئية',
                        'icon' => 'fas fa-shield-alt',
                        'image' => 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
                        'color' => 'from-teal-500 to-teal-600'
                    )
                );

                foreach ($certificates as $cert) :
                ?>
                    <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div class="relative">
                            <img src="<?php echo $cert['image']; ?>" alt="<?php echo $cert['title']; ?>" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div class="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br <?php echo $cert['color']; ?> rounded-full flex items-center justify-center">
                                <i class="<?php echo $cert['icon']; ?> w-6 h-6 text-white"></i>
                            </div>
                        </div>

                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2"><?php echo $cert['title']; ?></h3>
                            <p class="text-custom-blue font-semibold mb-2"><?php echo $cert['issuer']; ?></p>
                            <p class="text-gray-600 mb-4 leading-relaxed"><?php echo $cert['description']; ?></p>
                            
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2 rtl:space-x-reverse text-gray-500">
                                    <i class="fas fa-calendar w-4 h-4"></i>
                                    <span class="text-sm"><?php echo $cert['date']; ?></span>
                                </div>
                                <div class="px-3 py-1 bg-gradient-to-r <?php echo $cert['color']; ?> text-white text-xs font-semibold rounded-full">
                                    معتمد
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Accreditations -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 text-center mb-12">الاعتمادات والعضويات</h3>
            <div class="grid md:grid-cols-2 gap-8">
                <?php
                $accreditations = array(
                    array(
                        'title' => 'عضوية غرفة التجارة والصناعة',
                        'description' => 'عضو فعال في غرفة التجارة والصناعة بالرياض',
                        'icon' => 'fas fa-building'
                    ),
                    array(
                        'title' => 'اعتماد وزارة الإسكان',
                        'description' => 'مقاول معتمد لدى وزارة الشؤون البلدية والقروية والإسكان',
                        'icon' => 'fas fa-shield-alt'
                    ),
                    array(
                        'title' => 'تصنيف المقاولين',
                        'description' => 'مصنف في الدرجة الأولى للمقاولات العامة',
                        'icon' => 'fas fa-award'
                    ),
                    array(
                        'title' => 'اعتماد هيئة المواصفات',
                        'description' => 'معتمد من الهيئة السعودية للمواصفات والمقاييس والجودة',
                        'icon' => 'fas fa-check-circle'
                    )
                );

                foreach ($accreditations as $acc) :
                ?>
                    <div class="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                        <div class="w-12 h-12 bg-gradient-to-br from-custom-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="<?php echo $acc['icon']; ?> w-6 h-6 text-white"></i>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-gray-900 mb-2"><?php echo $acc['title']; ?></h4>
                            <p class="text-gray-600 leading-relaxed"><?php echo $acc['description']; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Stats -->
        <div class="mt-16 bg-gradient-to-r from-custom-blue to-blue-700 rounded-2xl p-8 text-white text-center">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <div class="text-3xl font-bold mb-2">6+</div>
                    <div class="text-blue-100">شهادات معتمدة</div>
                </div>
                <div>
                    <div class="text-3xl font-bold mb-2">4+</div>
                    <div class="text-blue-100">اعتمادات رسمية</div>
                </div>
                <div>
                    <div class="text-3xl font-bold mb-2">15+</div>
                    <div class="text-blue-100">سنة من الخبرة</div>
                </div>
                <div>
                    <div class="text-3xl font-bold mb-2">100%</div>
                    <div class="text-blue-100">الالتزام بالمعايير</div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>