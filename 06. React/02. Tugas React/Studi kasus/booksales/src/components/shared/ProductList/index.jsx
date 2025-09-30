// src/components/shared/ProductList/index.jsx
import React from "react";

export default function ProductList() {
  return (
    <>
      {/* Section Intro */}
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

      {/* Section Cards */}
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
                    <button className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp120.000</small>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Tambahkan card lainnya sesuai kebutuhan */}

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
                    <button className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp120.000</small>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Tambahkan card lainnya sesuai kebutuhan */}

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
                    <button className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp120.000</small>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Tambahkan card lainnya sesuai kebutuhan */}

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
                    <button className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp120.000</small>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Tambahkan card lainnya sesuai kebutuhan */}

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
                    <button className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp120.000</small>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Tambahkan card lainnya sesuai kebutuhan */}

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
                    <button className="btn btn-sm btn-outline-primary">Lihat</button>
                    <small className="text-body-secondary">Rp120.000</small>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Tambahkan card lainnya sesuai kebutuhan */}
          </div>
        </div>
      </div>
    </>
  );
}
