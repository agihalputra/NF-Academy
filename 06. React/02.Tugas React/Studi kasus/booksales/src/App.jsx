// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/shared";
import { HomePage, BooksPage, TeamPage, ContactPage } from "./pages";


function App() {
  return (
    <Router>
      {/* Header Global */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Footer Global */}
      <Footer />
    </Router>
  );
}

export default App;
