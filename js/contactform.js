document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('luxuryContactForm');
    const messageContainer = document.createElement('div');
    messageContainer.className = 'form-submitted-message';
    form.parentNode.insertBefore(messageContainer, form.nextSibling);

    // Clear fields on first keystroke
    document.querySelectorAll('.form-input').forEach(input => {
        let cleared = false;
        
        input.addEventListener('keydown', (e) => {
            if (!cleared && e.key.length === 1) { // Only character keys
                input.value = '';
                cleared = true;
            }
        });
    });

    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            // Your existing submission logic here
            
            // Show message
            messageContainer.textContent = 'Email sent successfully!';
            messageContainer.classList.add('visible');
            
            // Clear fields
            form.reset();

            // Hide message after 3 seconds
            setTimeout(() => {
                messageContainer.classList.remove('visible');
            }, 3000);

        } catch (error) {
            messageContainer.textContent = 'Error sending message';
            messageContainer.classList.add('visible');
        }
    });
});
