// Daftar produk toko
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Menambahkan produk baru ke dalam array produkToko
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// Menghapus produk berdasarkan id
function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        let produkHapus = produkToko.splice(index, 1);
        console.log(`Produk "${produkHapus[0].nama}" berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// Menampilkan semua produk
function tampilkanProduk() {
    console.log("=== Daftar Produk Toko ===");
    if (produkToko.length === 0) {
        console.log("Tidak ada produk tersedia.");
        return;
    }
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`);
    });
}


// Menampilkan daftar produk awal
tampilkanProduk();

// Menambahkan produk baru
tambahProduk("Headset", 500000, 8);

// Menampilkan lagi setelah ditambah
tampilkanProduk();

// Menghapus produk dengan ID 2 (Mouse)
hapusProduk(2);

// Menampilkan lagi setelah dihapus
tampilkanProduk();
