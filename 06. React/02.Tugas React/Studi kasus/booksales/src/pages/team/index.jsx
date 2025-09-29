// src/components/shared/Team/index.jsx
import React from "react";

export default function Team() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tim Kami</h2>
      <p className="text-center mb-5">Kenali orang-orang hebat di balik Bookstore NF Academy!</p>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Team Member" />
          <h5>Agil Pratama</h5>
          <p>Founder & CEO</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Team Member" />
          <h5>Siti Rahma</h5>
          <p>Marketing Manager</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Team Member" />
          <h5>Budi Santoso</h5>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
}