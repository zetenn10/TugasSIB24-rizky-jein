document.addEventListener('DOMContentLoaded', function() {
    let endpoint = 'https://api.jikan.moe/v4/top/anime';

    let konten = document.getElementById('konten');

    // Munculkan pesan loading
    konten.innerHTML = 'Loading...';

    fetch(endpoint)
        .then((res) => res.json())
        .then((response) => {
            // Hapus pesan loading
            konten.innerHTML = '';

            response.data.forEach(anime => {
                let elemen = document.createElement('div');
                elemen.className = 'col-lg-10 card shadow-sm'; // Menggabungkan kelas card dan shadow-sm, dan menambahkan kelas col-lg-10 untuk bootstrap grid system
                elemen.innerHTML = `
                    <div class="container">
                        <div class="row">
                            <div class="class="overflow-hidden" style="height: 200 px;"">
                                <div class="card">
                                    <img src="${anime.images.webp.image_url}" alt="${anime.title}" class="card-img-top">
                                    <div class="card-body">
                                        <h2 class="card-title">${anime.title}</h2>
                                        <p class="card-text">Score: ${anime.score}</p>
                                        <p class="card-text">Status: ${anime.status}</p>
                                        <p class="card-text">Episodes: ${anime.episodes}</p>
                                        <p class="card-text">Duration: ${anime.duration}</p>
                                        <p class="card-text">Studio: ${anime.studios[0].name}</p>
                                        <p class="card-text">Genres: ${anime.genres.map(genre => genre.name).join(', ')}</p> <!-- Join array of genres into a string -->
                                        <p class="text-muted">${anime.synopsis}</p>
                                        <p></p>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                konten.appendChild(elemen);
            });
        })
        .catch((error) => {
            // Tampilkan pesan jika terjadi kesalahan
            konten.innerHTML = 'Error fetching data: ' + error.message;
        });
});

