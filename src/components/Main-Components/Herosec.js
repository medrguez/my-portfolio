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
                            Consultant Applicatif / Manufacturing IT-OT
                        </h1>

                    </div>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Ingénieur avec près de 19 ans d'expérience dans
                        les environnements industriels, j'accompagne les
                        entreprises dans la digitalisation de leurs
                        processus, le support et l'évolution de leurs
                        applications industrielles ainsi que
                        l'intégration des systèmes IT et OT.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Mon expertise couvre notamment le Digital
                        Manufacturing, les systèmes MES et ERP,
                        le PIMS/Historian, le SCADA, la traçabilité,
                        le support applicatif, l'industrialisation
                        et l'amélioration continue.
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
                            <h1>3</h1>

                            <p>
                                Secteurs industriels
                                <br />
                                majeurs
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}