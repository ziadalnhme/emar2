<footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <!-- Company Info -->
            <div class="lg:col-span-2">
                <div class="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                    <?php if (has_custom_logo()) : ?>
                        <div class="w-12 h-12">
                            <?php the_custom_logo(); ?>
                        </div>
                    <?php else : ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/logo-01.svg" alt="شعار شركة اعمار البنيان" class="w-12 h-12 object-contain filter brightness-0 invert">
                    <?php endif; ?>
                    <div>
                        <h3 class="text-xl font-bold"><?php bloginfo('name'); ?></h3>
                        <p class="text-gray-400"><?php bloginfo('description'); ?></p>
                    </div>
                </div>
                <p class="text-gray-300 leading-relaxed mb-6">
                    شركة رائدة في مجال المقاولات العامة والأعمال الكهربائية، نقدم خدمات متنوعة بأعلى معايير الجودة والسلامة منذ عام 2008.
                </p>
                <div class="flex space-x-4 rtl:space-x-reverse">
                    <a href="#" class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <i class="fab fa-linkedin w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <i class="fab fa-instagram w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <i class="fab fa-twitter w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <i class="fab fa-facebook w-5 h-5"></i>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="text-lg font-semibold mb-6">روابط سريعة</h4>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'menu_class'     => 'space-y-3',
                    'container'      => 'ul',
                    'fallback_cb'    => 'emaar_bunyan_default_footer_menu',
                ));
                ?>
            </div>

            <!-- Contact Info -->
            <div>
                <h4 class="text-lg font-semibold mb-6">معلومات التواصل</h4>
                <div class="space-y-4">
                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                        <i class="fas fa-phone w-5 h-5 text-custom-yellow"></i>
                        <span class="text-gray-300"><?php echo get_theme_mod('company_phone', '+966558571233'); ?></span>
                    </div>
                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                        <i class="fas fa-envelope w-5 h-5 text-custom-yellow"></i>
                        <span class="text-gray-300"><?php echo get_theme_mod('company_email', 'emaar.bun@gmail.com'); ?></span>
                    </div>
                    <div class="flex items-start space-x-3 rtl:space-x-reverse">
                        <i class="fas fa-map-marker-alt w-5 h-5 text-custom-yellow mt-1"></i>
                        <span class="text-gray-300">
                            <?php echo get_theme_mod('company_address', 'جدة – حي الصفاء – أم القرى<br>المملكة العربية السعودية'); ?>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">
                © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. جميع الحقوق محفوظة
            </p>
            <div class="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">سياسة الخصوصية</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">الشروط والأحكام</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-2xl');
            header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            header.classList.remove('bg-white', 'shadow-2xl');
            header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        }
    });
});

function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

</body>
</html>

<?php
// القائمة الافتراضية للتذييل
function emaar_bunyan_default_footer_menu() {
    echo '<ul class="space-y-3">';
    echo '<li><a href="' . esc_url(home_url('/')) . '" class="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>';
    echo '<li><a href="#about" class="text-gray-300 hover:text-white transition-colors">من نحن</a></li>';
    echo '<li><a href="#services" class="text-gray-300 hover:text-white transition-colors">خدماتنا</a></li>';
    echo '<li><a href="' . esc_url(home_url('/certificates')) . '" class="text-gray-300 hover:text-white transition-colors">الشهادات</a></li>';
    echo '<li><a href="#projects" class="text-gray-300 hover:text-white transition-colors">مشاريعنا</a></li>';
    echo '<li><a href="#contact" class="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>';
    echo '</ul>';
}
?>