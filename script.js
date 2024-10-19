// script.js

// Fungsi untuk mendeteksi scroll
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about-section');
    const aboutText = document.querySelector('.about-text');
    const sectionPosition = aboutSection.getBoundingClientRect().top; // Posisi section relatif terhadap viewport
    const screenPosition = window.innerHeight / 1.3; // Posisi tampilan

    if (sectionPosition < screenPosition) {
        aboutText.classList.add('visible'); // Menambahkan kelas 'visible' pada teks
    } else {
        aboutText.classList.remove('visible'); // Menghapus kelas jika tidak dalam tampilan
    }
});
