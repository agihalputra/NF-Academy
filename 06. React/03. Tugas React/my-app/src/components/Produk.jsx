import React, { useState, useRef } from "react";
import produkData from "../utils/ProdukData";
import styles from "../styles/Produk.module.css";

function Produk() {
  const [produkList, setProdukList] = useState([...produkData]);
  const handleClick = () => {
    const newProduk = {
      id: produkList.length + 1,
      nama: "Printer Epson",
      tahun: 2023,
      harga: "Rp 3.000.000",
      gambar: "https://via.placeholder.com/150",
    };

    //Menambahkan produk baru ke state produkList
    setProdukList((prevlist)=>[...prevlist, newProduk]);
    alert("Produk berhasil ditambahkan")
  };

  return (
    <div className={styles.produkContainer}>
      <h1 className={styles.title}>Daftar Produk</h1>
      <div className={styles.cardContainer}>
        {produkList.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.gambar} alt={item.nama} />
            <h3>{item.nama}</h3>
            <p>Tahun: {item.tahun}</p>
            <p>Harga: {item.harga}</p>
          </div>
        ))}
      </div>

      <button onClick={handleClick} className={styles.addButton}>
        Tambah Produk Baru
      </button>
    </div>
  );
}

export default Produk;
