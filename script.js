document.addEventListener('DOMContentLoaded', function() {
    const flowerContainer = document.getElementById('flower-container');
    const numberOfPetals = 15; // Jumlah kelopak
    
    // Hitung sudut rotasi untuk setiap kelopak
    const angleStep = 360 / numberOfPetals;

    for (let i = 0; i < numberOfPetals; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Atur posisi awal kelopak di tengah container
        petal.style.top = '50%';
        petal.style.left = '50%';

        // Geser sedikit kelopak ke samping dan putar
        const rotationAngle = i * angleStep;
        
        // Transform: geser -15px dari titik putar, lalu putar sesuai sudut.
        // Transform-origin di CSS sudah disetel ke 0% 50%
        petal.style.transform = `translate(-15px, -50%) rotate(${rotationAngle}deg)`;

        flowerContainer.appendChild(petal);
    }
});
