// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/shared";
import { HomePage, BooksPage, TeamPage, ContactPage } from "./pages";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";


function Layout() {
  const location = useLocation();

  // daftar path yang tidak perlu header & footer
  const hideLayout = ["/login", "/register"];
  

  return (
    <>
      {!hideLayout.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

      {!hideLayout.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
