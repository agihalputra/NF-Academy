// src/components/shared/Hero/index.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="text-center bg-light py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to Bookstore 📚</h1>
        <p className="lead text-muted">
          Temukan koleksi buku terbaik untuk meningkatkan wawasan dan pengetahuanmu.
        </p>
        <a href="/books" className="btn btn-primary btn-lg mt-3">Jelajahi Buku</a>
      </div>
    </section>
  );
}
