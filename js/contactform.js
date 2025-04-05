// Add these to your existing script
const luxuryForm = {
    init() {
        this.addParallaxListeners();
        this.addCustomCursor();
        this.addScrollEffects();
    },

    addParallaxListeners() {
        document.addEventListener('mousemove', (e) => {
            const container = document.querySelector('.luxury-container');
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    },

    addCustomCursor() {
        document.body.addEventListener('mousemove', (e) => {
            const cursorFX = document.createElement('div');
            cursorFX.className = 'cursor-fx';
            cursorFX.style.left = `${e.clientX}px`;
            cursorFX.style.top = `${e.clientY}px`;
            document.body.appendChild(cursorFX);
            setTimeout(() => cursorFX.remove(), 1000);
        });
    },

    addScrollEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.documentElement.style.setProperty('--scroll', `${scrolled}px`);
        });
    }
};

// Initialize when DOM loaded
document.addEventListener('DOMContentLoaded', () => luxuryForm.init());
