// Toggle Products Section
const viewProductsBtn = document.getElementById('viewProductsBtn');
const productsSection = document.getElementById('productsSection');

viewProductsBtn.addEventListener('click', () => {
    productsSection.classList.toggle('active');
    
    // Update button text
    if (productsSection.classList.contains('active')) {
        viewProductsBtn.innerHTML = '<span class="btn-icon">✖️</span> Hide Products';
        // Smooth scroll to products
        setTimeout(() => {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        viewProductsBtn.innerHTML = '<span class="btn-icon">🖼️</span> View All Products';
        // Scroll back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Product Image Click - Open in WhatsApp
const productItems = document.querySelectorAll('.product-item');
productItems.forEach(item => {
    item.addEventListener('click', () => {
        const productName = item.querySelector('.product-name').textContent;
        const whatsappMessage = `Hello Complete Aqua Solutions!%0A%0AI'm interested in the ${productName} water purifier. Could you please provide more details and pricing?`;
        const whatsappURL = `https://wa.me/919497010911?text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Set initial opacity for fade-in effect
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s';
    
    // If image is already loaded
    if (img.complete) {
        img.style.opacity = '1';
    }
});

// Handle image errors
images.forEach(img => {
    img.addEventListener('error', function() {
        // Show placeholder if image fails to load
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #999;
        `;
        placeholder.textContent = '💧';
        this.parentElement.appendChild(placeholder);
    });
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Track WhatsApp clicks (for analytics if needed)
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
        // Add analytics tracking here if needed
    });
});

// Prevent zoom on double tap (mobile)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
