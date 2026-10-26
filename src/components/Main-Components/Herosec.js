import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Herosec() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <section
            className="hero-section page-section scroll-to-page"
            id="home"
        >
            <div className="custom-container">

                <div className="hero-content content-width">

                    <div className="section-header">

                        <h4
                            className="subtitle scroll-animation"
                            data-animation="fade_from_bottom"
                            data-aos="fade-up"
                        >
                            <i className="las la-home"></i> Présentation
                        </h4>

                        <h1
                            className="scroll-animation"
                            data-aos="fade-up"
                        >
                            Bonjour, je suis
                            <span> Mohamed Rguez</span>,
                            <br />
                            Chef de Projet Industriel – Industrialisation
                        </h1>

                    </div>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Ingénieur avec près de 19 ans d'expérience en
                        environnement de production, je pilote le cycle
                        de vie complet des équipements : du cahier des
                        charges (URS) aux FAT, SAT, à la qualification
                        et au démarrage série.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Installation et transfert de lignes de production,
                        qualification des équipements, performance
                        industrielle et amélioration continue, avec une
                        double compétence IT/OT : intégration des machines
                        au MES et à l'ERP selon le modèle ISA-95.
                    </p>

                    <a
                        href="#portfolio"
                        className="go-to-project-btn scroll-to scroll-animation"
                        data-aos="fade-up"
                    >
                        <img
                            src="../assets/images/round-text.png"
                            alt="Voir mes réalisations"
                        />

                        <i className="las la-arrow-down"></i>
                    </a>

                    <div className="facts d-flex">

                        <div
                            className="left scroll-animation"
                            data-aos="fade-right"
                        >
                            <h1>19+</h1>

                            <p>
                                Années
                                <br />
                                d'expérience
                            </p>
                        </div>

                        <div
                            className="right scroll-animation"
                            data-aos="fade-left"
                        >
                            <h1>4</h1>

                            <p>
                                Pays de
                                <br />
                                déploiement
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}