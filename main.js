// Main JavaScript file
import { initParticles } from './background.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio site loaded!');

    // Inject Custom Cursor
    const cursorRing = document.createElement('div');
    cursorRing.classList.add('cursor-ring');
    document.body.appendChild(cursorRing);

    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);

    // Move Cursor
    document.addEventListener('mousemove', (e) => {
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';

        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Hover Effects
    const hoverables = document.querySelectorAll('a, button, .btn');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // Initialize background if canvas exists
    if (document.getElementById('bg-canvas')) {
        initParticles('bg-canvas');
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add sticky navbar effect if needed (already handled by CSS sticky, but can enhance)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
});
