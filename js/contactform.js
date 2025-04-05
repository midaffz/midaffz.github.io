document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    // 3D Parallax Effect
    form.addEventListener('mousemove', (e) => {
        const rect = form.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        form.style.transform = `
            rotateX(${y * 2}deg)
            rotateY(${x * 2}deg)
            translateZ(20px)
        `;
    });

    form.addEventListener('mouseleave', () => {
        form.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
    });

    // Input Validation
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const button = form.querySelector('button');
        button.disabled = true;
        button.style.opacity = '0.8';
        
        // Simulate API call
        setTimeout(() => {
            button.disabled = false;
            button.style.opacity = '1';
            alert('Message sent successfully!');
        }, 2000);
    });
});
