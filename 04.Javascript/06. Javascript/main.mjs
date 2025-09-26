// Import fungsi dari controller.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // Tambah 2 data baru
  const user1 = { nama: "Data 11", umur: 30, alamat: "Jl.H. Yani", email: "yani@mail.com" };
  const user2 = { nama: "Data 12", umur: 31, alamat: "Jl. Mumin", email: "mumin@mail.com" };

  store(user1);
  store(user2); 

  index();      

  destroy();    
  index();     
};
main();
