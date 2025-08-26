<!-- About Section -->
<section id="about" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Content -->
            <div>
                <div class="mb-8">
                    <span class="text-custom-blue font-semibold text-lg mb-2 block">من نحن</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">
                        <?php bloginfo('name'); ?>
                    </h2>
                    <p class="text-gray-600 text-lg leading-relaxed mb-6">
                        تأسست شركة اعمار البنيان للمقاولات العامة والكهرباء عام 2008، وهي شركة رائدة في مجال المقاولات العامة والأعمال الكهربائية في المملكة العربية السعودية. نحن نفخر بتقديم خدمات متميزة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
                    </p>
                    <p class="text-gray-600 text-lg leading-relaxed mb-8">
                        نمتلك فريقاً من المهندسين والفنيين المؤهلين والمعتمدين، ونستخدم أحدث التقنيات والمعدات لضمان تنفيذ المشاريع بأعلى معايير الجودة والسلامة.
                    </p>
                </div>

                <!-- Mission & Vision -->
                <div class="grid sm:grid-cols-2 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-xl shadow-md">
                        <h3 class="text-xl font-bold text-custom-blue mb-3">رؤيتنا</h3>
                        <p class="text-gray-600">
                            أن نكون الشركة الرائدة في مجال المقاولات العامة والكهرباء في المنطقة
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-md">
                        <h3 class="text-xl font-bold text-custom-blue mb-3">رسالتنا</h3>
                        <p class="text-gray-600">
                            تقديم خدمات متميزة بأعلى معايير الجودة والسلامة لعملائنا الكرام
                        </p>
                    </div>
                </div>

                <!-- CTA -->
                <button onclick="scrollToSection('#services')" class="bg-custom-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    تعرف على خدماتنا
                </button>
            </div>

            <!-- Image & Stats -->
            <div class="relative">
                <div class="relative z-10">
                    <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" alt="فريق العمل" class="rounded-2xl shadow-xl w-full h-96 object-cover" />
                </div>
                
                <!-- Stats Grid -->
                <div class="absolute -bottom-8 left-4 right-4 z-20">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-white rounded-xl p-4 shadow-lg text-center">
                            <i class="fas fa-award w-8 h-8 text-custom-blue mx-auto mb-2"></i>
                            <div class="text-2xl font-bold text-gray-900">200+</div>
                            <div class="text-sm text-gray-600">مشروع مكتمل</div>
                        </div>
                        <div class="bg-white rounded-xl p-4 shadow-lg text-center">
                            <i class="fas fa-users w-8 h-8 text-custom-blue mx-auto mb-2"></i>
                            <div class="text-2xl font-bold text-gray-900">50+</div>
                            <div class="text-sm text-gray-600">عميل راضي</div>
                        </div>
                        <div class="bg-white rounded-xl p-4 shadow-lg text-center">
                            <i class="fas fa-clock w-8 h-8 text-custom-blue mx-auto mb-2"></i>
                            <div class="text-2xl font-bold text-gray-900">15+</div>
                            <div class="text-sm text-gray-600">سنة خبرة</div>
                        </div>
                        <div class="bg-white rounded-xl p-4 shadow-lg text-center">
                            <i class="fas fa-shield-alt w-8 h-8 text-custom-blue mx-auto mb-2"></i>
                            <div class="text-2xl font-bold text-gray-900">100%</div>
                            <div class="text-sm text-gray-600">ضمان الجودة</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>