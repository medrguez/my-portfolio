import React from 'react'

export default function Scrollnav() {
    return (
        <ul className="menu scroll-nav d-flex">
            <li>
                <a className="scroll-to" href="#home">
                    <span>Accueil</span> <i className="las la-home"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#about">
                    <span>À propos</span> <i className="lar la-user"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#resume">
                    <span>résumé</span> <i className="las la-briefcase"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#services">
                    <span>Services</span> <i className="las la-stream"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#skills">
                    <span>compétences</span> <i className="las la-shapes"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#portfolio">
                    <span>Portefeuilles</span> <i className="las la-grip-vertical"></i>
                </a>
            </li>
            {/* <li>
            <a className="scroll-to" href="#testimonial">
                <span>Testimonial</span> <i className="lar la-comment"></i>
            </a>
        </li> */}
            <li>
                <a className="scroll-to" href="#contact">
                    <span>Contact</span> <i className="las la-envelope"></i>
                </a>
            </li>
        </ul>
    )
}
