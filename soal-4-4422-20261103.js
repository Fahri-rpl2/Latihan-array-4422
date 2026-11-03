const daftarProduk = ["Keyboard", "Mouse", "Monitor", "Flashdisk", "Headset", "Webcam"];

console.log("Jumlah produk:", daftarProduk.length);
console.log("Indeks terakhir:", daftarProduk.length - 1);
console.log("Produk terakhir:", daftarProduk[daftarProduk.length - 1]);

const tengahKiri = Math.floor((daftarProduk.length - 1) / 2);
console.log("Produk tengah kiri:", daftarProduk[tengahKiri]);