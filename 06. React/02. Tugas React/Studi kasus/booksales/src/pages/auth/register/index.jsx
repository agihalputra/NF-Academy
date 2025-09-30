import React from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function Register() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #74ebd5 0%, #9face6 100%)",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      background: "#fff",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      width: "360px",
      animation: "fadeInUp 0.8s ease",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "14px",
      transition: "all 0.3s ease",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginBottom: "15px",
      transition: "all 0.3s ease",
    },
    smallText: {
      fontSize: "12px",
      color: "#555",
      textAlign: "center",
      marginBottom: "20px",
    },
    divider: {
      borderTop: "1px solid #ddd",
      margin: "20px 0",
    },
    socialBtn: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "10px",
      cursor: "pointer",
      background: "#fff",
      fontSize: "14px",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    fbBtn: {
      border: "1px solid #1877f2",
      color: "#1877f2",
    },
  };

  return (
    <>
      {/* Animasi Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          input:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0,123,255,0.4);
          }

          button:hover {
            background-color: #0056b3;
            transform: scale(1.03);
          }

          .social:hover {
            background: #f1f1f1;
            transform: translateY(-2px);
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Register</h2>

          <input type="email" placeholder="Email address" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />

          <button style={styles.button}>Sign up</button>

          <p style={styles.smallText}>
            By clicking Sign up, you agree to the terms of use.
          </p>

          <div style={styles.divider}></div>

          <p style={{ fontWeight: "bold", marginBottom: "15px", textAlign: "center" }}>
            Or use a third-party
          </p>

          <div className="social" style={styles.socialBtn}>
            <FaGoogle /> Sign up with Google
          </div>

          <div className="social" style={{ ...styles.socialBtn, ...styles.fbBtn }}>
            <FaFacebook /> Sign up with Facebook
          </div>

          <div className="social" style={styles.socialBtn}>
            <FaGithub /> Sign up with GitHub
          </div>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </>
  );
}
