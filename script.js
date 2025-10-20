// File: script.js (Versi Statis)
document.addEventListener('DOMContentLoaded', function() {
    const flowerContainer = document.getElementById('flower-container');
    const numberOfPetals = 15;
    const angleStep = 360 / numberOfPetals;

    for (let i = 0; i < numberOfPetals; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.top = '50%';
        petal.style.left = '50%';

        const rotationAngle = i * angleStep;
        
        // HILANGKAN scale(0) dan animationDelay
        // Kelopak akan muncul langsung pada ukuran penuh
        petal.style.transform = `translate(-15px, -50%) rotate(${rotationAngle}deg)`;

        flowerContainer.appendChild(petal);
    }
    // HILANGKAN kode untuk class 'animate-bloom'
});
