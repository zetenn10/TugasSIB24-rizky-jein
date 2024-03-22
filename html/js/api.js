// // Call the function to display products when the page loads
// window.onload = () => {
//     displayProducts();
// };

// // URL endpoint dari API
// const apiUrl = 'https://crudcrud.com/api/YOUR_CRUDCRUD_API_KEY/products';

// // Fungsi untuk mengambil data produk dari API
// async function getProducts() {
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return [];
//     }
// }

// const products = [
//     { name: 'Gekkan Shoujo Nozaki-kun', studio: 10, episode: 12, release: 'Aired' },
//     { name: 'Gekkan Shoujo Nozaki-kun', studio: 10, episode: 12, release: 'Aired' },
//     { name: 'Gekkan Shoujo Nozaki-kun', studio: 10, episode: 12, release: 'Aired' },
//     { name: 'Gekkan Shoujo Nozaki-kun', studio: 10, episode: 12, release: 'Aired' },
//     { name: 'Gekkan Shoujo Nozaki-kun', studio: 10, episode: 12, release: 'Aired' }
// ];

// // Fungsi untuk menampilkan produk di halaman web
// function displayProducts(products) {
//     const productList = document.getElementById('productList');
//     productList.innerHTML = ''; // Kosongkan isi list produk sebelum menambahkan produk baru
//     products.forEach(product => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${product.name} - ${product.price}`; // Sesuaikan dengan struktur data dari API
//         productList.appendChild(listItem);
//     });
// }

// // Panggil fungsi untuk mengambil data produk dan menampilkannya ketika halaman dimuat
// window.onload = async () => {
//     const products = await getProducts();
//     displayProducts(products);
// };

// Endpoint API Jikan untuk mencari anime
// const apiUrl = 'https://api.jikan.moe/v4/anime/{id}/full';

// // Fungsi untuk mengambil data anime dari API Jikan
// async function getAnimeData() {
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data.results; // Mengambil hasil pencarian anime
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return [];
//     }
// }

// // Fungsi untuk menampilkan data anime di halaman web
// async function displayAnimeData() {
//     const animeList = document.getElementById('animeList');
//     const animeData = await getAnimeData();
//     animeData.forEach(anime => {
//         const listItem = document.createElement('li');
//         listItem.textContent = anime.title;
//         animeList.appendChild(listItem);
//     });
// }

// // Panggil fungsi untuk menampilkan data anime ketika halaman dimuat
// window.onload = () => {
//     displayAnimeData();
// };