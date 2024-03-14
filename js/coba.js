document.addEventListener('DOMContentLoaded', function() {
    // Buat elemen paragraf baru
    var paragraph = document.createElement('p');
    
    // Atur teks dalam paragraf
    paragraph.textContent = 'Ini adalah paragraf yang ditambahkan menggunakan JavaScript DOM.';
    
    // Tambahkan elemen paragraf ke dalam div dengan id="container"
    var container = document.getElementById('container');
    container.appendChild(paragraph);
});
