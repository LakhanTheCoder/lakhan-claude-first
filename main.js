// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Feature card interaction
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
        try {
            const feature = this.dataset.feature;
            // Remove active class from all cards
            document.querySelectorAll('.feature-card').forEach(c => 
                c.style.transform = 'translateY(0)');
            // Add active class to clicked card
            this.style.transform = 'translateY(-5px)';
        } catch (error) {
            console.error('Feature card interaction error:', error);
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.style.display = 'block';
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Thank you for your message! We will get back to you soon.';
            this.reset();
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    });
}