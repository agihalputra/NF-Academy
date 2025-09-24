// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa; 
    }

    // Method untuk menampilkan detail pelanggan
    tampilkanInfo() {
        return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Kendaraan Disewa: ${this.kendaraanDisewa}`;
    }
}

// Class Sistem Manajemen Transportasi untuk mengelola data penyewaan
class SistemManajemenTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    // Method untuk mencatat transaksi penyewaan kendaraan
    sewaKendaraan(pelanggan) {
        this.daftarPelanggan.push(pelanggan); // menambahkan pelanggan baru ke daftar
        console.log(`Transaksi: ${pelanggan.nama} menyewa ${pelanggan.kendaraanDisewa}`);
    }

    // Method untuk menampilkan semua pelanggan yang sedang menyewa kendaraan
    tampilkanDaftarPelanggan() {
        console.log("\nDaftar Pelanggan yang Sedang Menyewa Kendaraan:");
        this.daftarPelanggan.forEach((pelanggan, index) => {
            console.log(`${index + 1}. ${pelanggan.tampilkanInfo()}`);
        });
    }
}


// Membuat objek sistem manajemen transportasi
const sistem = new SistemManajemenTransportasi();

// Membuat beberapa pelanggan
const pelanggan1 = new Pelanggan("Daffa", "081234567890", "Mobil");
const pelanggan2 = new Pelanggan("Ucup", "089876543210", "Motor");
const pelanggan3 = new Pelanggan("Dani", "0898232434544", "Motor");
const pelanggan4 = new Pelanggan("Shinta", "082143663827", "Mobil");

// Mencatat transaksi penyewaan
sistem.sewaKendaraan(pelanggan1);
sistem.sewaKendaraan(pelanggan2);
sistem.sewaKendaraan(pelanggan3);
sistem.sewaKendaraan(pelanggan4);

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
sistem.tampilkanDaftarPelanggan();
