document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('YOUR_EMAILJS_USER_ID');
    
    const form = document.getElementById('luxuryContactForm');
    const message = document.getElementById('formMessage');

    // Clear fields on first keystroke
    document.querySelectorAll('input, textarea').forEach(input => {
        let cleared = false;
        input.addEventListener('keydown', (e) => {
            if (!cleared && e.key.length === 1) {
                input.value = '';
                cleared = true;
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validation
        const name = document.getElementById('luxuryName').value.trim();
        const email = document.getElementById('luxuryEmail').value.trim();
        const msg = document.getElementById('luxuryMessage').value.trim();

        if (!name || !email || !msg) {
            showMessage('Please fill all fields', 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showMessage('Invalid email address', 'error');
            return;
        }

        // Send email
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            name: name,
            email: email,
            message: msg
        })
        .then(() => {
            showMessage('Message sent successfully!', 'success');
            form.reset();
        }, () => {
            showMessage('Failed to send message', 'error');
        });
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.className = `visible ${type}`;
        setTimeout(() => message.className = '', 3000);
    }
});
