import React from "react";
import ReactPlayer from 'react-player'

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        {/* <img src="./assets/images/logo.png" alt="Logo"/> */}
        {/* <span className="designation">Rguez Mohamed</span>
<div>
                <span className="designation">Ingenieur informatique & informatique industriel</span> */}
        <h3 className="designation">
          Ingenieur informatique & informatique industriel
        </h3>
      </div>
      <img className="me" src="./assets/images/Photo-med.png" alt="Me" />
      <h1 className="name">Rguez Mohamed</h1>
      <h2 className="email">lessirguez@gmail.com</h2>
      <h2 className="address">+33 6 35 58 66 97</h2>
      <p className="copyright">&copy; 2023 Med Rguez. Tous droits réservés.</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="https://www.linkedin.com/in/mohamed-rguez-6b55b57b/">
            <i className="lab la-linkedin"></i>
          </a>
        </li>
        {/* <li>
                    <a href="https://dribble.com/"><i className="lab la-dribbble"></i></a>
                </li>
                <li>
                    <a href="https://instagram.com/"><i className="lab la-instagram"></i></a>
                </li> */}
        <li>
          <a href="https://github.com/medrguez">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a href="#contact" className="theme-btn">
        <i className="las la-envelope"></i> Engagez-moi !
      </a>
    </div>
  );
}
