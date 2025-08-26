<!-- Projects Section -->
<section id="projects" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-16">
            <span class="text-custom-blue font-semibold text-lg mb-2 block">مشاريعنا</span>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
                نفخر بإنجازاتنا المتميزة
            </h2>
            <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                تصفح مجموعة من أبرز مشاريعنا المنجزة في مختلف القطاعات السكنية والتجارية والصناعية
            </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            // مشاريع افتراضية إذا لم يتم إنشاء محتوى مخصص
            $default_projects = array(
                array(
                    'title' => 'مجمع الأمير السكني',
                    'category' => 'سكني',
                    'image' => 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
                    'location' => 'الرياض',
                    'date' => '2023',
                    'description' => 'مجمع سكني فاخر يضم 50 وحدة سكنية بتصميم عصري ومرافق متكاملة'
                ),
                array(
                    'title' => 'مصنع الخليج للصناعات',
                    'category' => 'صناعي',
                    'image' => 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
                    'location' => 'الدمام',
                    'date' => '2023',
                    'description' => 'مصنع حديث للصناعات الغذائية بمساحة 5000 متر مربع'
                ),
                array(
                    'title' => 'برج النخيل التجاري',
                    'category' => 'تجاري',
                    'image' => 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
                    'location' => 'جدة',
                    'date' => '2022',
                    'description' => 'برج تجاري من 15 طابق بتصميم معماري متميز في قلب المدينة'
                ),
                array(
                    'title' => 'فيلا الورود',
                    'category' => 'سكني',
                    'image' => 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
                    'location' => 'الرياض',
                    'date' => '2022',
                    'description' => 'فيلا فاخرة بتصميم كلاسيكي حديث مع حديقة واسعة ومسبح'
                ),
                array(
                    'title' => 'مركز الأعمال الذكي',
                    'category' => 'تجاري',
                    'image' => 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
                    'location' => 'الخبر',
                    'date' => '2022',
                    'description' => 'مركز أعمال ذكي مجهز بأحدث التقنيات والأنظمة الذكية'
                ),
                array(
                    'title' => 'مستودع اللوجستيات',
                    'category' => 'صناعي',
                    'image' => 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
                    'location' => 'الرياض',
                    'date' => '2021',
                    'description' => 'مستودع حديث للخدمات اللوجستية بمساحة 10000 متر مربع'
                )
            );

            // عرض المشاريع من قاعدة البيانات أو المشاريع الافتراضية
            $custom_projects = new WP_Query(array(
                'post_type' => 'projects',
                'posts_per_page' => 6,
                'post_status' => 'publish'
            ));

            if ($custom_projects->have_posts()) :
                while ($custom_projects->have_posts()) : $custom_projects->the_post();
                    $location = get_post_meta(get_the_ID(), '_project_location', true);
                    $date = get_post_meta(get_the_ID(), '_project_date', true);
                    $category = get_post_meta(get_the_ID(), '_project_category', true);
                    $category_name = '';
                    switch($category) {
                        case 'residential': $category_name = 'سكني'; break;
                        case 'commercial': $category_name = 'تجاري'; break;
                        case 'industrial': $category_name = 'صناعي'; break;
                        default: $category_name = 'عام'; break;
                    }
            ?>
                <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div class="relative overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500')); ?>
                        <?php else : ?>
                            <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" alt="<?php the_title(); ?>" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                        <?php endif; ?>
                        
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute top-4 right-4">
                            <span class="bg-custom-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                                <?php echo $category_name; ?>
                            </span>
                        </div>
                        <button class="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-custom-blue hover:text-white">
                            <i class="fas fa-external-link-alt w-5 h-5"></i>
                        </button>
                    </div>

                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-custom-blue transition-colors">
                            <?php the_title(); ?>
                        </h3>
                        <p class="text-gray-600 mb-4 leading-relaxed">
                            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                        </p>

                        <div class="flex items-center justify-between text-sm text-gray-500">
                            <?php if ($location) : ?>
                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <i class="fas fa-map-marker-alt w-4 h-4"></i>
                                    <span><?php echo $location; ?></span>
                                </div>
                            <?php endif; ?>
                            <?php if ($date) : ?>
                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <i class="fas fa-calendar w-4 h-4"></i>
                                    <span><?php echo $date; ?></span>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php
                endwhile;
                wp_reset_postdata();
            else :
                // عرض المشاريع الافتراضية
                foreach ($default_projects as $project) :
            ?>
                <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div class="relative overflow-hidden">
                        <img src="<?php echo $project['image']; ?>" alt="<?php echo $project['title']; ?>" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute top-4 right-4">
                            <span class="bg-custom-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                                <?php echo $project['category']; ?>
                            </span>
                        </div>
                        <button class="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-custom-blue hover:text-white">
                            <i class="fas fa-external-link-alt w-5 h-5"></i>
                        </button>
                    </div>

                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-custom-blue transition-colors">
                            <?php echo $project['title']; ?>
                        </h3>
                        <p class="text-gray-600 mb-4 leading-relaxed">
                            <?php echo $project['description']; ?>
                        </p>

                        <div class="flex items-center justify-between text-sm text-gray-500">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <i class="fas fa-map-marker-alt w-4 h-4"></i>
                                <span><?php echo $project['location']; ?></span>
                            </div>
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <i class="fas fa-calendar w-4 h-4"></i>
                                <span><?php echo $project['date']; ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            <?php
                endforeach;
            endif;
            ?>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12">
            <button onclick="scrollToSection('#contact')" class="bg-custom-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                عرض جميع المشاريع
            </button>
        </div>
    </div>
</section>