document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('luxuryContactForm');
    const inputs = {
        name: document.getElementById('luxuryName'),
        email: document.getElementById('luxuryEmail'),
        message: document.getElementById('luxuryMessage')
    };

    // Clear fields on first keystroke
    Object.values(inputs).forEach(input => {
        let isCleared = false;
        input.addEventListener('keydown', (e) => {
            if (!isCleared && e.key.length === 1) {
                input.value = '';
                isCleared = true;
            }
        });
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Basic validation
        if (!inputs.name.value || !inputs.email.value || !inputs.message.value) {
            showMessage('Please fill all fields', 'error');
            return;
        }

        if (!validateEmail(inputs.email.value)) {
            showMessage('Invalid email format', 'error');
            return;
        }

        // Send email using EmailJS (free service)
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            name: inputs.name.value,
            email: inputs.email.value,
            message: inputs.message.value
        }, 'YOUR_USER_ID')
        .then(() => {
            showMessage('Email sent successfully!', 'success');
            form.reset();
        }, (error) => {
            showMessage('Failed to send email', 'error');
        });
    });

    function showMessage(text, type) {
        const msg = document.createElement('div');
        msg.textContent = text;
        msg.className = `form-message ${type} visible`;
        document.body.appendChild(msg);
        
        setTimeout(() => {
            msg.remove();
        }, 3000);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
