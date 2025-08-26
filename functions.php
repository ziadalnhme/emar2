<?php
/**
 * Emaar Al Bunyan Theme Functions
 */

// منع الوصول المباشر
if (!defined('ABSPATH')) {
    exit;
}

/**
 * إعداد القالب
 */
function emaar_bunyan_setup() {
    // دعم العنوان التلقائي
    add_theme_support('title-tag');
    
    // دعم الصور المميزة
    add_theme_support('post-thumbnails');
    
    // دعم HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // دعم الشعار المخصص
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // تسجيل القوائم
    register_nav_menus(array(
        'primary' => __('القائمة الرئيسية', 'emaar-bunyan'),
        'footer'  => __('قائمة التذييل', 'emaar-bunyan'),
    ));
}
add_action('after_setup_theme', 'emaar_bunyan_setup');

/**
 * تحميل الملفات والسكريبتات
 */
function emaar_bunyan_scripts() {
    // تحميل ملف CSS الرئيسي
    wp_enqueue_style('emaar-bunyan-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // تحميل Tailwind CSS
    wp_enqueue_style('tailwind-css', 'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css', array(), '3.4.1');
    
    // تحميل JavaScript المخصص
    wp_enqueue_script('emaar-bunyan-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
    
    // تحميل Font Awesome للأيقونات
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', array(), '6.0.0');
}
add_action('wp_enqueue_scripts', 'emaar_bunyan_scripts');

/**
 * تسجيل مناطق الودجات
 */
function emaar_bunyan_widgets_init() {
    register_sidebar(array(
        'name'          => __('الشريط الجانبي', 'emaar-bunyan'),
        'id'            => 'sidebar-1',
        'description'   => __('إضافة ودجات للشريط الجانبي', 'emaar-bunyan'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => __('تذييل الموقع', 'emaar-bunyan'),
        'id'            => 'footer-1',
        'description'   => __('إضافة ودجات لتذييل الموقع', 'emaar-bunyan'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'emaar_bunyan_widgets_init');

/**
 * تخصيص طول المقتطف
 */
function emaar_bunyan_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'emaar_bunyan_excerpt_length', 999);

/**
 * تخصيص نهاية المقتطف
 */
function emaar_bunyan_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'emaar_bunyan_excerpt_more');

/**
 * إضافة دعم للغة العربية
 */
function emaar_bunyan_language_setup() {
    load_theme_textdomain('emaar-bunyan', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'emaar_bunyan_language_setup');

/**
 * تخصيص إعدادات القالب
 */
function emaar_bunyan_customize_register($wp_customize) {
    // قسم معلومات الشركة
    $wp_customize->add_section('company_info', array(
        'title'    => __('معلومات الشركة', 'emaar-bunyan'),
        'priority' => 30,
    ));
    
    // رقم الهاتف
    $wp_customize->add_setting('company_phone', array(
        'default'           => '+966558571233',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('company_phone', array(
        'label'   => __('رقم الهاتف', 'emaar-bunyan'),
        'section' => 'company_info',
        'type'    => 'text',
    ));
    
    // البريد الإلكتروني
    $wp_customize->add_setting('company_email', array(
        'default'           => 'emaar.bun@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('company_email', array(
        'label'   => __('البريد الإلكتروني', 'emaar-bunyan'),
        'section' => 'company_info',
        'type'    => 'email',
    ));
    
    // العنوان
    $wp_customize->add_setting('company_address', array(
        'default'           => 'جدة – حي الصفاء – أم القرى، المملكة العربية السعودية',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('company_address', array(
        'label'   => __('العنوان', 'emaar-bunyan'),
        'section' => 'company_info',
        'type'    => 'textarea',
    ));
}
add_action('customize_register', 'emaar_bunyan_customize_register');

/**
 * إضافة أنواع المحتوى المخصصة
 */
function emaar_bunyan_custom_post_types() {
    // نوع محتوى المشاريع
    register_post_type('projects', array(
        'labels' => array(
            'name'               => __('المشاريع', 'emaar-bunyan'),
            'singular_name'      => __('مشروع', 'emaar-bunyan'),
            'add_new'            => __('إضافة مشروع جديد', 'emaar-bunyan'),
            'add_new_item'       => __('إضافة مشروع جديد', 'emaar-bunyan'),
            'edit_item'          => __('تحرير المشروع', 'emaar-bunyan'),
            'new_item'           => __('مشروع جديد', 'emaar-bunyan'),
            'view_item'          => __('عرض المشروع', 'emaar-bunyan'),
            'search_items'       => __('البحث في المشاريع', 'emaar-bunyan'),
            'not_found'          => __('لم يتم العثور على مشاريع', 'emaar-bunyan'),
            'not_found_in_trash' => __('لا توجد مشاريع في المهملات', 'emaar-bunyan'),
        ),
        'public'       => true,
        'has_archive'  => true,
        'supports'     => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'    => 'dashicons-building',
        'rewrite'      => array('slug' => 'projects'),
    ));
    
    // نوع محتوى الخدمات
    register_post_type('services', array(
        'labels' => array(
            'name'               => __('الخدمات', 'emaar-bunyan'),
            'singular_name'      => __('خدمة', 'emaar-bunyan'),
            'add_new'            => __('إضافة خدمة جديدة', 'emaar-bunyan'),
            'add_new_item'       => __('إضافة خدمة جديدة', 'emaar-bunyan'),
            'edit_item'          => __('تحرير الخدمة', 'emaar-bunyan'),
            'new_item'           => __('خدمة جديدة', 'emaar-bunyan'),
            'view_item'          => __('عرض الخدمة', 'emaar-bunyan'),
            'search_items'       => __('البحث في الخدمات', 'emaar-bunyan'),
            'not_found'          => __('لم يتم العثور على خدمات', 'emaar-bunyan'),
            'not_found_in_trash' => __('لا توجد خدمات في المهملات', 'emaar-bunyan'),
        ),
        'public'       => true,
        'has_archive'  => true,
        'supports'     => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'    => 'dashicons-admin-tools',
        'rewrite'      => array('slug' => 'services'),
    ));
}
add_action('init', 'emaar_bunyan_custom_post_types');

/**
 * إضافة الحقول المخصصة للمشاريع
 */
function emaar_bunyan_add_project_meta_boxes() {
    add_meta_box(
        'project_details',
        __('تفاصيل المشروع', 'emaar-bunyan'),
        'emaar_bunyan_project_meta_box_callback',
        'projects',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'emaar_bunyan_add_project_meta_boxes');

function emaar_bunyan_project_meta_box_callback($post) {
    wp_nonce_field('emaar_bunyan_save_project_meta', 'emaar_bunyan_project_meta_nonce');
    
    $location = get_post_meta($post->ID, '_project_location', true);
    $date = get_post_meta($post->ID, '_project_date', true);
    $category = get_post_meta($post->ID, '_project_category', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="project_location">' . __('الموقع', 'emaar-bunyan') . '</label></th>';
    echo '<td><input type="text" id="project_location" name="project_location" value="' . esc_attr($location) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="project_date">' . __('تاريخ التنفيذ', 'emaar-bunyan') . '</label></th>';
    echo '<td><input type="text" id="project_date" name="project_date" value="' . esc_attr($date) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="project_category">' . __('نوع المشروع', 'emaar-bunyan') . '</label></th>';
    echo '<td>';
    echo '<select id="project_category" name="project_category">';
    echo '<option value="residential"' . selected($category, 'residential', false) . '>' . __('سكني', 'emaar-bunyan') . '</option>';
    echo '<option value="commercial"' . selected($category, 'commercial', false) . '>' . __('تجاري', 'emaar-bunyan') . '</option>';
    echo '<option value="industrial"' . selected($category, 'industrial', false) . '>' . __('صناعي', 'emaar-bunyan') . '</option>';
    echo '</select>';
    echo '</td>';
    echo '</tr>';
    echo '</table>';
}

function emaar_bunyan_save_project_meta($post_id) {
    if (!isset($_POST['emaar_bunyan_project_meta_nonce']) || !wp_verify_nonce($_POST['emaar_bunyan_project_meta_nonce'], 'emaar_bunyan_save_project_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['project_location'])) {
        update_post_meta($post_id, '_project_location', sanitize_text_field($_POST['project_location']));
    }
    
    if (isset($_POST['project_date'])) {
        update_post_meta($post_id, '_project_date', sanitize_text_field($_POST['project_date']));
    }
    
    if (isset($_POST['project_category'])) {
        update_post_meta($post_id, '_project_category', sanitize_text_field($_POST['project_category']));
    }
}
add_action('save_post', 'emaar_bunyan_save_project_meta');