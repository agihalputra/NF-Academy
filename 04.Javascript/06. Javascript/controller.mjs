import users from "./data.mjs";

const index = () => {
  console.log(" Daftar Data User:");
  users.map((user, i) => {
    console.log(`${i + 1}. ${user.nama}, ${user.umur} tahun, ${user.alamat}, ${user.email}`);
  });
};

// Fungsi untuk menambah data user
const store = (user) => {
  users.push(user); 
  console.log(" Data berhasil ditambahkan!");
};

// Fungsi untuk menghapus data terakhir
const destroy = () => {
  users.pop();
  console.log(" Data terakhir berhasil dihapus!");
};

// Mengekspor fungsi agar bisa dipakai di file lain
export { index, store, destroy };
