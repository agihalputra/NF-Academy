// src/App.jsx
import React, { useState } from "react";

function App() {
  // State untuk menyimpan halaman aktif
  const [currentPage, setCurrentPage] = useState("home");

  // Komponen konten Home
  const HomePage = () => (
    <>
      {/* Hero Section */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-5 fw-bold lh-1 text-body-emphasis">
              Temukan Buku Favoritmu di Bookstore NF Academy 📚
            </h1>
            <p className="lead">
              Dari fiksi hingga pengembangan diri, kami menyediakan koleksi terbaik
              untuk menemani perjalanan belajarmu setiap hari.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Jelajahi Sekarang
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Tentang Kami
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=720&q=80"
              alt="Books"
              width="720"
            />
          </div>
        </div>
      </div>

      {/* Product list */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Rekomendasi buku terlaris pilihan pembaca NF Academy.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Lihat Semua</a>
              <a href="#" className="btn btn-secondary my-2">Koleksi Baru</a>
            </p>
          </div>
        </div>
      </section>

      {/* Card Layout Section */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* Card 1 */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80"
                  className="card-img-top"
                  alt="Atomic Habits"
                />
                <div className="card-body">
                  <h5 className="card-title">Atomic Habits</h5>
                  <p className="card-text">
                    Panduan membentuk kebiasaan kecil yang menghasilkan perubahan besar.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp120.000</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80"
                  className="card-img-top"
                  alt="Rich Dad Poor Dad"
                />
                <div className="card-body">
                  <h5 className="card-title">Rich Dad Poor Dad</h5>
                  <p className="card-text">
                    Pelajaran finansial dari dua sosok ayah yang berbeda pandangan hidup.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp95.000</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80"
                  className="card-img-top"
                  alt="The Power of Habit"
                />
                <div className="card-body">
                  <h5 className="card-title">The Power of Habit</h5>
                  <p className="card-text">
                    Mengungkap rahasia di balik kebiasaan yang membentuk kehidupan kita.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp110.000</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Komponen Team
  const TeamPage = () => (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tim Kami</h2>
      <p className="text-center mb-5">
        Kenali orang-orang hebat di balik Bookstore NF Academy!
      </p>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle mb-3"
            alt="Team Member"
          />
          <h5>Agil Pratama</h5>
          <p>Founder & CEO</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle mb-3"
            alt="Team Member"
          />
          <h5>Siti Rahma</h5>
          <p>Marketing Manager</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle mb-3"
            alt="Team Member"
          />
          <h5>Budi Santoso</h5>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );

  // Komponen Contact
  const ContactPage = () => (
    <div className="container my-5">
      <h2 className="text-center mb-4">Hubungi Kami</h2>
      <p className="text-center mb-5">
        Punya pertanyaan atau saran? Kirimkan pesanmu melalui form di bawah ini 😊
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nama</label>
              <input type="text" className="form-control" id="name" placeholder="Nama Anda" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="email@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Pesan</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="#"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
              onClick={() => setCurrentPage("home")}
            >
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2" onClick={() => setCurrentPage("home")}>Home</a></li>
            <li><a href="#" className="nav-link px-2" onClick={() => setCurrentPage("team")}>Team</a></li>
            <li><a href="#" className="nav-link px-2" onClick={() => setCurrentPage("contact")}>Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
      </div>

      {/* Render Halaman Berdasarkan State */}
      {currentPage === "home" && <HomePage />}
      {currentPage === "team" && <TeamPage />}
      {currentPage === "contact" && <ContactPage />}

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" onClick={() => setCurrentPage("home")}>Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" onClick={() => setCurrentPage("team")}>Team</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" onClick={() => setCurrentPage("contact")}>Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 NF Academy</p>
        </footer>
      </div>
    </>
  );
}

export default App;
