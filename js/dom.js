const imageSources = ["asset/1.jfif", "asset/2.jfif", "asset/3.jfif", "asset/4.jfif"];
        let currentIndex = 0;
        const carouselContainer = document.getElementById('carousel');

        // Membuat dan menambahkan elemen gambar ke dalam div carousel
        imageSources.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Image ${index + 1}`;
            carouselContainer.appendChild(img);
        });

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