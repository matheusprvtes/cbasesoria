document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Check if this question is already active
            const isActive = question.classList.contains('active');

            // Close all open questions
            faqQuestions.forEach(q => {
                q.classList.remove('active');
            });

            // If it wasn't active, open it
            if (!isActive) {
                question.classList.add('active');
            }
        });
    });
});

// Carousel Logic
function scrollCarousel(direction) {
    const carousel = document.getElementById('testimonial-carousel');
    const scrollAmount = 370; // card width (350px) + gap (20px)
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
