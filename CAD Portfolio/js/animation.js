// ============================================================
// ANIMATION.JS — Background particle animation logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    // Load animation settings from data.js, fallback to defaults if missing
    const animSettings = portfolioData.animation || {
        particleColor: 'rgba(56, 189, 248, 0.6)',
        lineColor: 'rgba(56, 189, 248, 0.15)',
        particleDensity: 20000,
        particleMaxRadius: 2.0,
        connectionDistance: 120,
        canvasOpacity: 0.4
    };

    // Apply opacity to canvas
    canvas.style.opacity = animSettings.canvasOpacity;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const numParticles = Math.min(100, Math.floor((width * height) / animSettings.particleDensity));
    
    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.7, // slightly faster movement
            vy: (Math.random() - 0.5) * 0.7,
            radius: Math.random() * (animSettings.particleMaxRadius - 0.5) + 0.5
        });
    }
    
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);
        
        ctx.fillStyle = animSettings.particleColor;
        ctx.strokeStyle = animSettings.lineColor;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < numParticles; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            
            // Bounce off edges
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw connecting lines
            for (let j = i + 1; j < numParticles; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < animSettings.connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
});
