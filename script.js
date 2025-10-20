document.addEventListener('DOMContentLoaded', function() {
    const flowerContainer = document.getElementById('flower-container');
    const numberOfPetals = 12; // Jumlah kelopak
    
    // Hitung sudut rotasi untuk setiap kelopak
    const angleStep = 360 / numberOfPetals;

    for (let i = 0; i < numberOfPetals; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Atur posisi awal kelopak di tengah container
        petal.style.top = '50%';
        petal.style.left = '50%';

        const rotationAngle = i * angleStep;
        
        // Tambahkan properti CSS untuk animasi mekar (scale)
        // Kita atur scale awal 0, dan akan diubah oleh CSS/transisi
        petal.style.transform = `translate(-15px, -50%) rotate(${rotationAngle}deg) scale(0)`;
        
        // Tambahkan delay agar kelopak mekar secara berurutan
        petal.style.animationDelay = `${i * 0.1}s`; 

        flowerContainer.appendChild(petal);
    }

    // Tambahkan class untuk memulai animasi setelah semua kelopak dibuat
    setTimeout(() => {
        flowerContainer.classList.add('animate-bloom');
    }, 10); 
});
