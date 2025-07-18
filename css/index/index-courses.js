// Modal functionality
const modal = document.getElementById('popupModal');
const modalTitle = document.getElementById('modalTitle');
const popupText = document.getElementById('popupText');
const buttons = document.querySelectorAll('.card__button');
const closeBtn = document.querySelector('.close-button');

// Only initialize modal functionality if elements exist
if (modal && modalTitle && popupText && closeBtn) {
    // Open Modal
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const title = btn.getAttribute('data-title');
            const content = btn.getAttribute('data-content');
            modalTitle.textContent = title;
            popupText.innerHTML = content;

            modal.style.display = 'flex'; // Show modal centered
            document.body.classList.add('modal-open'); // Disable scroll
        });
    });

    // Close Modal via X button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    // Close Modal by clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
}

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function () {
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        var typed = new Typed('.typed-text', {
            strings: ['Expert Care', 'Professional Service', 'Luxury Treatment', 'Perfect Style'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Initialize counter animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / speed;

        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    // Intersection Observer for counter animation
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(animateCounter);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(heroStats);
    }
});

// Smooth scroll function
function smoothScroll() {
    const nextSection = document.querySelector('.about-preview');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Booking form functions
function openBookingForm() {
    const overlay = document.querySelector('.booking-form-overlay');
    if (overlay) {
        overlay.classList.add('modal-visible');
        document.body.classList.add('modal-open');
    }
}

function closeBookingForm() {
    const overlay = document.querySelector('.booking-form-overlay');
    if (overlay) {
        overlay.classList.remove('modal-visible');
        document.body.classList.remove('modal-open');
    }
}

function submitBookingForm(event) {
    event.preventDefault();

    // Show success message using SweetAlert
    Swal.fire({
        icon: 'success',
        title: 'Booking Confirmed!',
        text: 'We will contact you shortly to confirm your appointment.',
        confirmButtonColor: '#ff4b1f'
    }).then(() => {
        closeBookingForm();
        event.target.reset();
    });
}

// Close booking form when clicking outside
const bookingOverlay = document.querySelector('.booking-form-overlay');
if (bookingOverlay) {
    bookingOverlay.addEventListener('click', function (e) {
        if (e.target === this) {
            closeBookingForm();
        }
    });
}

// Initialize all Swiper sliders
document.addEventListener('DOMContentLoaded', function() {
    // Services slider
    const servicesSwiper = document.querySelector('.services-swiper');
    if (servicesSwiper) {
        new Swiper('.services-swiper', {
            slidesPerView: 1,
            spaceBetween: 14,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 14,
                }
            }
        });
    }

    // Testimonials slider
    const testimonialSwiper = document.querySelector('.testimonial-swiper');
    if (testimonialSwiper) {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 14,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 14,
                }
            }
        });
    }

    // Blog slider
    const blogSwiper = document.querySelector('.blog-swiper');
    if (blogSwiper) {
        new Swiper('.blog-swiper', {
            slidesPerView: 1,
            spaceBetween: 14,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 14,
                }
            }
        });
    }
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for subscribing! You will receive our updates soon.');
        this.reset();
    });
}

// Countdown Timer Function
function updateCountdown() {
    document.querySelectorAll('[data-countdown]').forEach(timer => {
        const targetDate = new Date(timer.dataset.countdown).getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.querySelector('.days').textContent = days.toString().padStart(2, '0');
        timer.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
        timer.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        timer.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
    });
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true
    });
});
