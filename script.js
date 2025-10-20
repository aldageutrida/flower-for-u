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

        const rotationAngle = i * angleStep;
        
        // --- MODIFIKASI DIMULAI DI SINI ---
        
        // 1. Mengatur Posisi Awal dan Rotasi
        // PENTING: Menambahkan scale(0) agar kelopak mulai dari ukuran nol (untuk efek mekar)
        petal.style.transform = `translate(-15px, -50%) rotate(${rotationAngle}deg) scale(0)`;
        
        // 2. Menambahkan Jeda Animasi
        // Ini membuat setiap kelopak mekar secara berurutan, bukan serentak
        petal.style.animationDelay = `${i * 0.05}s`; 

        flowerContainer.appendChild(petal);
    }
    
    // 3. Memulai Animasi Putaran Bunga
    // Setelah semua kelopak ditambahkan, kita tambahkan class 'animate-bloom'
    // yang akan memicu animasi putaran (rotation) yang sudah didefinisikan di CSS.
    setTimeout(() => {
        flowerContainer.classList.add('animate-bloom');
    }, 10); 
});
