// Main JavaScript file for Reborn Transport website

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if it exists
    if (typeof AOS !== 'undefined') {
        // Add a small delay to ensure header layout is stable before AOS initialization
        setTimeout(function() {
            AOS.init({
                duration: 600,
                once: true,
                easing: 'ease-in-out',
                disable: function() {
                    return window.innerWidth < 768; // Disable on mobile for better performance
                }
            });
        }, 100);
    }
    
    // Mobile menu toggle with animation
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (mobileMenuButton && mobileMenu) {
        // Add transition for smooth animation
        mobileMenu.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        mobileMenu.style.transform = 'translateY(-10px)';
        mobileMenu.style.opacity = '0';
        
        mobileMenuButton.addEventListener("click", function() {
            if (mobileMenu.classList.contains("hidden")) {
                // Show menu with animation
                mobileMenu.classList.remove("hidden");
                setTimeout(() => {
                    mobileMenu.style.transform = 'translateY(0)';
                    mobileMenu.style.opacity = '1';
                }, 10);
            } else {
                // Hide menu with animation
                mobileMenu.style.transform = 'translateY(-10px)';
                mobileMenu.style.opacity = '0';
                setTimeout(() => {
                    mobileMenu.classList.add("hidden");
                }, 300);
            }
        });
    } else {
        console.warn('Mobile menu elements not found');
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        otherAnswer.classList.remove('open');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        if (otherIcon) {
                            otherIcon.classList.remove('fa-chevron-up');
                            otherIcon.classList.add('fa-chevron-down');
                        }
                    }
                });
                
                // Toggle current item
                answer.classList.toggle('open');
                const icon = question.querySelector('i');
                if (icon) {
                    if (answer.classList.contains('open')) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    } else {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                }
            });
        }
    });
    
    // Form submission handling
    const contactForm = document.getElementById('quoteForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Simple validation
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const phone = this.querySelector('#phone').value;
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields.');
                e.preventDefault();
                return;
            }
            
            // Show success message after form submission
            setTimeout(() => {
                alert('Thank you for your request! We will contact you shortly.');
                this.reset();
            }, 1000);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // If it's just "#" (home link), scroll to top
            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            // For other anchor links
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add error handling for navigation links
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Log navigation attempts for debugging
            console.log('Navigating to:', this.href);
        });
    });
    
    // WhatsApp button functionality
    const whatsappButtons = document.querySelectorAll('[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // In a real implementation, you might want to track these clicks
            console.log('WhatsApp button clicked');
        });
    });
    
    // Gallery lightbox initialization
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would initialize a lightbox here
            // For now, we'll just open the image in a new tab
            const href = this.getAttribute('href');
            if (href) {
                window.open(href, '_blank');
            }
        });
    });
    
    // Language switcher functionality - FIXED VERSION
    const languageSwitchers = document.querySelectorAll('.language-switcher a');
    
    languageSwitchers.forEach(switcher => {
        switcher.addEventListener('click', function(e) {
            e.preventDefault();
            
            try {
                // Get the language code from the link
                const targetLang = this.getAttribute('data-lang');
                
                if (targetLang) {
                    // Get current page filename (e.g., index.html, about.html)
                    const currentPath = window.location.pathname;
                    let currentPage = 'index.html'; // default
                    
                    // Extract the current page filename
                    const pathParts = currentPath.split('/').filter(part => part !== '');
                    
                    if (pathParts.length > 0) {
                        // If we're in a language directory
                        if (['en', 'id', 'zh'].includes(pathParts[0])) {
                            if (pathParts.length > 1) {
                                currentPage = pathParts[1];
                            }
                        } else {
                            // We're on the root or another page
                            currentPage = pathParts[pathParts.length - 1];
                        }
                    }
                    
                    // Special case for root index.html
                    if (currentPath === '/' || currentPath === '/index.html') {
                        currentPage = 'index.html';
                    }
                    
                    // Redirect to the same page in the target language
                    if (currentPage === 'index.html') {
                        window.location.href = `/${targetLang}/`;
                    } else {
                        window.location.href = `/${targetLang}/${currentPage}`;
                    }
                }
            } catch (error) {
                console.error('Language switcher error:', error);
                // Fallback to English index page
                window.location.href = '/en/';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu && mobileMenu.contains(event.target);
        const isClickOnMenuButton = mobileMenuButton && mobileMenuButton.contains(event.target);
        
        if (mobileMenu && !isClickInsideMenu && !isClickOnMenuButton && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Car details modal functionality
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('[id$="-modal"]');
    
    // Open modal when details button is clicked
    openModalButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.classList.add('overflow-hidden');
            }
        });
    });
    
    // Close modal when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('[id$="-modal"]');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.classList.remove('overflow-hidden');
            }
        });
    });
    
    // Close modal when clicking outside the modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                this.classList.remove('flex');
                document.body.classList.remove('overflow-hidden');
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (!modal.classList.contains('hidden')) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    document.body.classList.remove('overflow-hidden');
                }
            });
        }
    });
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    // Add scroll-based animations or effects here
    const scrollPosition = window.scrollY;
    
    // Example: Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to validate phone number format
function validatePhone(phone) {
    // Simple Indonesian phone number validation
    const re = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
    return re.test(phone);
}