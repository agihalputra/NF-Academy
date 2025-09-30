// src/pages/contact/index.jsx
import React from "react";

export default function Contact() {
  return (
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
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nama Anda"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Pesan</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Tulis pesan Anda..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
