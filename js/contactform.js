document.addEventListener('DOMContentLoaded', () => {
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

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch('send.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.text();
            
            if (result === 'success') {
                showMessage('Message sent successfully!', 'success');
                form.reset();
            } else {
                showMessage(result || 'Error sending message', 'error');
            }
        } catch (error) {
            showMessage('Network error. Please try again.', 'error');
        }
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.className = `visible ${type}`;
        setTimeout(() => message.className = '', 3000);
    }
});
