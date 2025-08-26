<!-- Services Section -->
<section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-16">
            <span class="text-custom-blue font-semibold text-lg mb-2 block">خدماتنا</span>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
                نقدم مجموعة شاملة من الخدمات
            </h2>
            <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                نحن نقدم خدمات متنوعة في مجال المقاولات العامة والأعمال الكهربائية لتلبية جميع احتياجات عملائنا
            </p>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            // خدمات افتراضية إذا لم يتم إنشاء محتوى مخصص
            $services = array(
                array(
                    'icon' => 'fas fa-building',
                    'title' => 'الأعمال الإنشائية',
                    'description' => 'تنفيذ جميع أنواع الأعمال الإنشائية بأعلى معايير الجودة والسلامة',
                    'features' => array('الأعمال الخرسانية', 'الهياكل الإنشائية', 'الأساسات', 'الأعمال المدنية')
                ),
                array(
                    'icon' => 'fas fa-industry',
                    'title' => 'الهياكل المعدنية',
                    'description' => 'تصميم وتنفيذ الهياكل المعدنية للمشاريع الصناعية والتجارية',
                    'features' => array('المصانع والمعامل', 'المخازن والمستودعات', 'المباني المعدنية', 'الصالات الرياضية')
                ),
                array(
                    'icon' => 'fas fa-home',
                    'title' => 'تنفيذ المباني',
                    'description' => 'تنفيذ جميع أنواع المباني بمختلف الاستخدامات والأغراض',
                    'features' => array('المباني الإدارية والتجارية', 'المباني التعليمية والصحية', 'المباني السكنية والخدمية', 'التشطيبات المتكاملة')
                ),
                array(
                    'icon' => 'fas fa-wrench',
                    'title' => 'شبكات المياه والصرف',
                    'description' => 'تنفيذ وصيانة شبكات المياه ومشاريع الصرف الصحي',
                    'features' => array('شبكات المياه', 'مشاريع الصرف الصحي', 'محطات المعالجة', 'أنظمة الري')
                ),
                array(
                    'icon' => 'fas fa-cog',
                    'title' => 'الطرق والجسور',
                    'description' => 'تنفيذ مشاريع الطرق والجسور والعلامات المرورية',
                    'features' => array('إنشاء الطرق', 'بناء الجسور', 'العلامات المرورية', 'أعمال الأسفلت')
                ),
                array(
                    'icon' => 'fas fa-bolt',
                    'title' => 'أعمال الكهروميكانيك',
                    'description' => 'تنفيذ الأنظمة الكهربائية والميكانيكية المتكاملة',
                    'features' => array('الأنظمة الكهربائية', 'أنظمة التكييف', 'أنظمة السلامة', 'أنظمة التحكم الآلي')
                )
            );

            // عرض الخدمات من قاعدة البيانات أو الخدمات الافتراضية
            $custom_services = new WP_Query(array(
                'post_type' => 'services',
                'posts_per_page' => 6,
                'post_status' => 'publish'
            ));

            if ($custom_services->have_posts()) :
                while ($custom_services->have_posts()) : $custom_services->the_post();
            ?>
                <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    <div class="mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-custom-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-tools w-8 h-8 text-white"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-3"><?php the_title(); ?></h3>
                        <p class="text-gray-600 leading-relaxed"><?php the_excerpt(); ?></p>
                    </div>

                    <div class="mt-6 pt-6 border-t border-gray-100">
                        <a href="<?php the_permalink(); ?>" class="text-custom-blue hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300">
                            اعرف المزيد
                            <i class="fas fa-chevron-right w-4 h-4 mr-2"></i>
                        </a>
                    </div>
                </div>
            <?php
                endwhile;
                wp_reset_postdata();
            else :
                // عرض الخدمات الافتراضية
                foreach ($services as $service) :
            ?>
                <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    <div class="mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-custom-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="<?php echo $service['icon']; ?> w-8 h-8 text-white"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-3"><?php echo $service['title']; ?></h3>
                        <p class="text-gray-600 leading-relaxed"><?php echo $service['description']; ?></p>
                    </div>

                    <ul class="space-y-2">
                        <?php foreach ($service['features'] as $feature) : ?>
                            <li class="flex items-center text-gray-600">
                                <div class="w-2 h-2 bg-custom-blue rounded-full mr-3 flex-shrink-0"></div>
                                <?php echo $feature; ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>

                    <div class="mt-6 pt-6 border-t border-gray-100">
                        <button class="text-custom-blue hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300">
                            اعرف المزيد
                            <i class="fas fa-chevron-right w-4 h-4 mr-2"></i>
                        </button>
                    </div>
                </div>
            <?php
                endforeach;
            endif;
            ?>
        </div>
    </div>
</section>