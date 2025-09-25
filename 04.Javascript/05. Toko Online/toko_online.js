// Lis Data Produk Awal
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Headphone", harga: 2000000 },
    { id: 5, nama: "Powerbank", harga: 3000000 }
];

const eventHandler = {};

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk "${nama}" berhasil ditambahkan!`);
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...id) {
    produkList = produkList.filter(produk => !id.includes(produk.id));
    console.log(`Produk dengan id ${id} berhasil dihapus!`);
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    console.log("Daftar Produk Toko Online:");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
}

// Menampilkan produk awal
tampilkanProduk();

// Menambahkan produk baru
tambahProduk(6, "Camera", 8000000);
tampilkanProduk();

// Menghapus produk dengan id = 2
hapusProduk(2);
tampilkanProduk();

// Menghapus lebih dari 1 produk id = 1 dan 4
hapusProduk(1, 4);
tampilkanProduk();
