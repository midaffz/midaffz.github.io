document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('luxuryContactForm');
    const formMessage = document.getElementById('luxuryMessage');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formMessage.style.display = 'none';

        // Form validation
        const name = document.getElementById('luxuryName').value.trim();
        const email = document.getElementById('luxuryEmail').value.trim();
        const message = document.getElementById('luxuryMessage').value.trim();

        if (!name || !email || !message) {
            showMessage('Please fill in all required fields', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        try {
            // Replace with actual fetch request
            const response = await fakeApiCall();
            
            showMessage('Message sent successfully!', 'success');
            contactForm.reset();
            if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
        } catch (error) {
            showMessage('Error sending message. Please try again.', 'error');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message visible ${type}`;
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }

    function fakeApiCall() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.2 ? resolve() : reject();
            }, 1000);
        });
    }
});
