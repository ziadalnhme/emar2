<!-- Contact Section -->
<section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-16">
            <span class="text-custom-blue font-semibold text-lg mb-2 block">تواصل معنا</span>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
                نحن هنا لخدمتك
            </h2>
            <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                تواصل معنا للحصول على استشارة مجانية أو عرض سعر مخصص لمشروعك
            </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
            <!-- Contact Info -->
            <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-8">معلومات التواصل</h3>
                
                <div class="space-y-6">
                    <div class="flex items-start space-x-4 rtl:space-x-reverse">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-phone w-6 h-6 text-custom-blue"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">الهاتف</h4>
                            <p class="text-gray-600"><?php echo get_theme_mod('company_phone', '+966558571233'); ?></p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4 rtl:space-x-reverse">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-envelope w-6 h-6 text-custom-blue"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">البريد الإلكتروني</h4>
                            <p class="text-gray-600"><?php echo get_theme_mod('company_email', 'emaar.bun@gmail.com'); ?></p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4 rtl:space-x-reverse">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-map-marker-alt w-6 h-6 text-custom-blue"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">العنوان</h4>
                            <p class="text-gray-600">
                                <?php echo nl2br(get_theme_mod('company_address', 'جدة – حي الصفاء – أم القرى<br>المملكة العربية السعودية')); ?>
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4 rtl:space-x-reverse">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-clock w-6 h-6 text-custom-blue"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">ساعات العمل</h4>
                            <p class="text-gray-600">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                            <p class="text-gray-600">الجمعة - السبت: مغلق</p>
                        </div>
                    </div>
                </div>

                <!-- Map -->
                <div class="mt-8">
                    <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                        <p class="text-gray-500">خريطة الموقع</p>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div>
                <div class="bg-gray-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h3>
                    
                    <?php echo do_shortcode('[contact-form-7 id="1" title="نموذج الاتصال"]'); ?>
                    
                    <!-- نموذج HTML افتراضي إذا لم يكن Contact Form 7 مثبت -->
                    <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" class="space-y-6">
                        <input type="hidden" name="action" value="emaar_contact_form">
                        <?php wp_nonce_field('emaar_contact_form', 'emaar_contact_nonce'); ?>
                        
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">الاسم الكامل</label>
                                <input type="text" name="contact_name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent" required>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">رقم الهاتف</label>
                                <input type="tel" name="contact_phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent" required>
                            </div>
                        </div>

                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                            <input type="email" name="contact_email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent" required>
                        </div>

                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">نوع الخدمة</label>
                            <select name="contact_service" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent" required>
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
                            <label class="block text-gray-700 font-semibold mb-2">الرسالة</label>
                            <textarea name="contact_message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent resize-none" placeholder="اكتب رسالتك هنا..." required></textarea>
                        </div>

                        <button type="submit" class="w-full bg-custom-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse">
                            <i class="fas fa-paper-plane w-5 h-5"></i>
                            <span>إرسال الرسالة</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>