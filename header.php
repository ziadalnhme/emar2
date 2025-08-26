<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> dir="rtl">
<?php wp_body_open(); ?>

<header class="fixed top-0 left-0 right-0 z-50 p-4">
    <nav class="py-4 px-6 mx-auto max-w-6xl rounded-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg" id="main-nav">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <?php if (has_custom_logo()) : ?>
                            <?php the_custom_logo(); ?>
                        <?php else : ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/logo-01.svg" alt="شعار شركة اعمار البنيان" class="w-12 h-12 object-contain">
                        <?php endif; ?>
                        <div>
                            <h1 class="text-xl font-bold text-gray-900"><?php bloginfo('name'); ?></h1>
                            <p class="text-sm text-gray-600"><?php bloginfo('description'); ?></p>
                        </div>
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_class'     => 'flex items-center space-x-8 rtl:space-x-reverse',
                        'container'      => false,
                        'fallback_cb'    => 'emaar_bunyan_default_menu',
                    ));
                    ?>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-toggle" class="lg:hidden p-2 text-gray-700 hover:text-custom-blue">
                    <i class="fas fa-bars w-6 h-6"></i>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="lg:hidden mt-4 py-4 border-t border-gray-200 hidden">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'flex flex-col space-y-4',
                    'container'      => false,
                    'fallback_cb'    => 'emaar_bunyan_default_mobile_menu',
                ));
                ?>
            </div>
        </div>
    </nav>
</header>

<?php
// القائمة الافتراضية إذا لم يتم إنشاء قائمة
function emaar_bunyan_default_menu() {
    echo '<a href="' . esc_url(home_url('/')) . '" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">الرئيسية</a>';
    echo '<a href="#about" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">من نحن</a>';
    echo '<a href="#services" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">خدماتنا</a>';
    echo '<a href="' . esc_url(home_url('/certificates')) . '" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">الشهادات</a>';
    echo '<a href="#projects" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">مشاريعنا</a>';
    echo '<a href="#contact" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">اتصل بنا</a>';
}

function emaar_bunyan_default_mobile_menu() {
    echo '<a href="' . esc_url(home_url('/')) . '" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">الرئيسية</a>';
    echo '<a href="#about" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">من نحن</a>';
    echo '<a href="#services" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">خدماتنا</a>';
    echo '<a href="' . esc_url(home_url('/certificates')) . '" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">الشهادات</a>';
    echo '<a href="#projects" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">مشاريعنا</a>';
    echo '<a href="#contact" class="text-gray-700 hover:text-custom-blue font-medium transition-colors">اتصل بنا</a>';
}
?>