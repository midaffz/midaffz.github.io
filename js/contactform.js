// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('luxuryContactForm');
    const formMessage = document.getElementById('luxuryMessage');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formMessage.style.display = 'none';

        // Get form elements
        const formData = {
            name: document.getElementById('luxuryName').value.trim(),
            email: document.getElementById('luxuryEmail').value.trim(),
            message: document.getElementById('luxuryMessage').value.trim()
        };

        document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('luxuryContactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    // Clear fields on focus
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('focus', () => {
            input.value = '';
            input.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            // Your existing submission logic
            
            // Show confirmation
            confirmationMessage.classList.add('show');
            
            // Clear all fields
            form.reset();
            
            // Reset fields visual state
            document.querySelectorAll('.form-input').forEach(input => {
                input.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            });
            
            // Hide message after 5 seconds
            setTimeout(() => {
                confirmationMessage.classList.remove('show');
            }, 5000);

        } catch (error) {
            // Error handling
        }
    });
});

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            showMessage('Please fill in all required fields', 'error');
            return;
        }

        if (!validateEmail(formData.email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
            const response = await fetch('submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            
            if (result.success) {
                showMessage('Message sent successfully!', 'success');
                contactForm.reset();
            } else {
                showMessage(result.error || 'Error sending message', 'error');
            }
        } catch (error) {
            showMessage('Network error. Please try again.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });

    // Rest of the code remains same...
});
