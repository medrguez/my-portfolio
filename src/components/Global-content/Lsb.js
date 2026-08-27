import React from "react";
import photoMohamed from "../../assets/images/mohamed-rguez-pro.png";

export default function Lsb() {
  return (
    <div className="left-sidebar">

      <div className="sidebar-header">
        <h3 className="designation">
          Consultant Applicatif
          <br />
          Manufacturing IT-OT
        </h3>
      </div>

      <img
        className="me"
        src={photoMohamed}
        alt="Mohamed Rguez"
      />

      <h1 className="name">Mohamed Rguez</h1>

      <div className="sidebar-contact">

        <a
          href="mailto:lessirguez@gmail.com"
          className="sidebar-contact-item"
        >
          <i className="las la-envelope"></i>
          <span>lessirguez@gmail.com</span>
        </a>

        <a
          href="tel:+33635586697"
          className="sidebar-contact-item"
        >
          <i className="las la-phone"></i>
          <span>+33 6 35 58 66 97</span>
        </a>

      </div>

      <div className="sidebar-positioning">
        <p>
          <i className="las la-industry"></i>
          Industrie • Digital Manufacturing • IT/OT
        </p>

        <p>
          <i className="las la-award"></i>
          19+ ans d'expérience
        </p>
      </div>

      <div className="sidebar-actions">

        <a
          href="https://www.linkedin.com/in/mohamed-rguez-6b55b57b/"
          target="_blank"
          rel="noreferrer"
          className="linkedin-btn"
        >
          <i className="lab la-linkedin"></i>
          LinkedIn
        </a>

        <a
          href="https://drive.google.com/file/d/1-ZN72pNdgCLWh3C2rqdlqDKnHKP62R3K/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="theme-btn"
        >
          <i className="las la-file-download"></i>
          Télécharger mon CV
        </a>

      </div>

      <p className="copyright">
        &copy; 2026 Mohamed Rguez. Tous droits réservés.
      </p>

    </div>
  );
}