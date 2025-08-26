// Main JavaScript file for Emaar Al Bunyan theme

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    initMobileMenu();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Header scroll effects
    initHeaderScrollEffects();
    
    // Animation on scroll
    initScrollAnimations();
    
    // Contact form handling
    initContactForm();
});

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.className = 'fas fa-bars w-6 h-6';
                } else {
                    icon.className = 'fas fa-times w-6 h-6';
                }
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars w-6 h-6';
                }
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = document.querySelector('#mobile-menu-toggle i');
                    if (icon) {
                        icon.className = 'fas fa-bars w-6 h-6';
                    }
                }
            }
        });
    });
}

/**
 * Initialize header scroll effects
 */
function initHeaderScrollEffects() {
    const header = document.getElementById('main-nav');
    if (!header) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background based on scroll position
        if (scrollTop > 50) {
            header.classList.add('bg-white', 'shadow-2xl');
            header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            header.classList.remove('bg-white', 'shadow-2xl');
            header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        }
        
        // Hide/show header on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card-hover, .group').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Initialize contact form handling
 */
function initContactForm() {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin w-5 h-5"></i><span>جاري الإرسال...</span>';
        submitButton.disabled = true;
        
        // Reset after form submission (whether success or error)
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 3000);
    });
}

/**
 * Utility function for smooth scrolling to sections
 */
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Initialize project filters (if on projects page)
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.classList.add('animate-fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Initialize statistics counter animation
 */
function initStatsCounter() {
    const statsElements = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = Math.floor(current);
                }, 16);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsElements.forEach(el => observer.observe(el));
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initProjectFilters();
    initStatsCounter();
});