document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('#carousel img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }
    

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    showImage(currentIndex);

    setInterval(nextImage, 3000); // Ganti gambar setiap 3 detik
});

