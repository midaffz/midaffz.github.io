document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('luxuryContactForm');
    
    // Clear fields on input
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('input', (e) => {
            if (e.target.value.trim() !== '') {
                e.target.dataset.hasContent = 'true';
            } else {
                delete e.target.dataset.hasContent;
            }
        });
    });

    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Your existing submission logic
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.textContent = 'Email sent successfully!';
        successMsg.className = 'success-message';
        form.appendChild(successMsg);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 3000);
        
        // Clear fields
        form.reset();
    });
});
