// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Enhanced header with glassmorphism effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = 'none';
        header.style.borderBottom = '1px solid #eee';
    }
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('すべてのフィールドを入力してください。');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('有効なメールアドレスを入力してください。');
                return;
            }
            
            // Show success message (in a real application, you would send this to a server)
            alert('メッセージを送信しました。ありがとうございます！');
            this.reset();
        });
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced scroll animations with intersection observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add staggered animation for skill categories
                if (element.classList.contains('skills-grid')) {
                    const skillCategories = element.querySelectorAll('.skill-category');
                    skillCategories.forEach((category, index) => {
                        setTimeout(() => {
                            category.classList.add('animate');
                        }, index * 200);
                    });
                }
                
                // Add staggered animation for project cards
                if (element.classList.contains('projects-grid')) {
                    const projectCards = element.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 300);
                    });
                }
                
                // Add animation for timeline items
                if (element.classList.contains('timeline')) {
                    const timelineItems = element.querySelectorAll('.timeline-item');
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 400);
                    });
                }
                
                // Add animation for section titles
                if (element.classList.contains('section-title')) {
                    element.classList.add('animate');
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.section-title, .skills-grid, .projects-grid, .timeline').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
});

// Typing effect for hero title
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing effect after a small delay
        setTimeout(typeWriter, 500);
    }
});

// Mobile menu toggle (if needed in the future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Skill tag hover effects
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Project card flip effect on mobile
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = this.style.transform === 'scale(1.02)' ? 'scale(1)' : 'scale(1.02)';
            });
        });
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    // Create a loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.8s ease;
    `;
    
    const loader = document.createElement('div');
    loader.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255,255,255,0.3);
        border-top: 3px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    // Add spinner animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    loadingOverlay.appendChild(loader);
    document.body.appendChild(loadingOverlay);
    
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        document.body.style.opacity = '1';
        setTimeout(() => {
            document.body.removeChild(loadingOverlay);
        }, 800);
    }, 1500);
});

// Contact form enhanced validation
function validateForm(form) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    let isValid = true;
    let errors = [];
    
    if (name.length < 2) {
        errors.push('名前は2文字以上で入力してください。');
        isValid = false;
    }
    
    if (!isValidEmail(email)) {
        errors.push('有効なメールアドレスを入力してください。');
        isValid = false;
    }
    
    if (message.length < 10) {
        errors.push('メッセージは10文字以上で入力してください。');
        isValid = false;
    }
    
    if (!isValid) {
        alert(errors.join('\n'));
    }
    
    return isValid;
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Initialize intersection observer for animations
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        const elements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }
});