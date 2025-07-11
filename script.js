function showEmail() {
    const email = document.getElementById('email');
    email.style.display = 'block';
}
AOS.init({
    duration: 2000, // durasi animasi (ms)
    // once: true      // animasi hanya muncul sekali
});
// Event listener untuk semua gambar di dalam .card
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('modalImage').src = this.src;
        document.getElementById('imgModal').style.display = 'flex';
    });
});

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('imgModal').style.display = 'none';
}

function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('show');
}


