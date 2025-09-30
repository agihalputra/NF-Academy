// src/pages/team/index.jsx
import React from "react";

export default function Team() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tim Kami</h2>
      <p className="text-center mb-5">
        Kenalan dengan tim NF Academy yang luar biasa 🚀
      </p>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Agihal Putra"
            className="rounded-circle mb-3"
          />
          <h5>Agihal Putra</h5>
          <p>Frontend Developer</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Member 2"
            className="rounded-circle mb-3"
          />
          <h5>Member 2</h5>
          <p>Backend Developer</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Member 3"
            className="rounded-circle mb-3"
          />
          <h5>Member 3</h5>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
}
