// Advanced Quantum Form Handler
class NexusForm {
    constructor() {
        this.form = document.getElementById('nexusContactForm');
        this.initQuantumEffects();
        this.initParticleSystem();
        this.initBiometricScan();
        this.bindEvents();
    }

    initQuantumEffects() {
        // Create quantum entanglement between fields
        const fields = this.form.querySelectorAll('.neuro-input');
        fields.forEach(field => {
            field.addEventListener('focus', () => this.activateQuantumField(field));
            field.addEventListener('blur', () => this.deactivateQuantumField(field));
        });
    }

    activateQuantumField(field) {
        const orb = field.closest('.field-orb');
        orb.style.transform = 'translateZ(50px)';
        orb.querySelector('.particle-aura').style.opacity = '1';
    }

    deactivateQuantumField(field) {
        const orb = field.closest('.field-orb');
        orb.style.transform = 'translateZ(0)';
        orb.querySelector('.particle-aura').style.opacity = '0';
    }

    initParticleSystem() {
        // Initialize particle.js with custom configuration
        particlesJS('particle-network', {
            particles: {
                number: { value: 150 },
                color: { value: '#00f3ff' },
                opacity: { value: 0.5 },
                size: { value: 2 },
                move: { 
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true
                }
            }
        });
    }

    initBiometricScan() {
        // Add retina scan animation
        const retinaScan = document.querySelector('.retina-scan');
        setInterval(() => {
            retinaScan.style.background = `linear-gradient(
                ${Math.random() * 360}deg,
                #00f3ff 0%,
                #ff00ff 100%
            )`;
        }, 3000);
    }

    bindEvents() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.processQuantumTransmission();
        });
    }

    async processQuantumTransmission() {
        // Add quantum encryption layer
        const formData = new FormData(this.form);
        const encryptedData = this.quantumEncrypt(formData);
        
        try {
            const response = await fetch('/quantum-gateway', {
                method: 'POST',
                headers: {
                    'Quantum-Encryption': 'v2.0',
                    'X-Origin-Galaxy': 'MilkyWay'
                },
                body: encryptedData
            });
            
            this.showHolographicFeedback(await response.json());
        } catch (error) {
            this.showQuantumError(error);
        }
    }

    quantumEncrypt(data) {
        // Advanced encryption simulation
        return JSON.stringify({
            payload: btoa(JSON.stringify(Object.fromEntries(data))),
            timestamp: Date.now(),
            quantumSignature: this.generateQuantumSignature()
        });
    }

    generateQuantumSignature() {
        return Array.from({ length: 64 }, () => 
            Math.floor(Math.random() * 16).toString(16)
        ).join('');
    }
}

// Initialize Nexus Communication Protocol
document.addEventListener('DOMContentLoaded', () => {
    new NexusForm();
    initQuantumParticles();
});
