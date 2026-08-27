import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <section
            className="about-area page-section scroll-to-page"
            id="about"
        >
            <div className="custom-container">
                <div className="about-content content-width">

                    <div className="section-header">

                        <h4
                            className="subtitle scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="lar la-user"></i> À propos
                        </h4>

                        <h1
                            className="scroll-animation"
                            data-aos="fade-up"
                        >
                            Une expérience industrielle enrichie par
                            <br />
                            <span>le digital et les nouvelles technologies</span>
                        </h1>

                    </div>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Je suis ingénieur de formation avec près de 19 ans
                        d'expérience dans des environnements industriels,
                        principalement dans les secteurs de l'électronique,
                        de l'automobile et de la pharmacie.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Mon parcours se situe à l'interface entre les métiers
                        industriels et les systèmes d'information. J'interviens
                        sur des sujets de support applicatif, Digital Manufacturing,
                        MES, ERP, PIMS/Historian, SCADA, intégration IT/OT,
                        industrialisation et optimisation des processus.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        J'ai occupé des fonctions de chef de projet, consultant
                        applicatif, ingénieur informatique industriel et responsable
                        de support technique. Ces expériences m'ont permis de
                        développer une vision globale des enjeux de production,
                        de traçabilité, de performance, de qualité et de continuité
                        de service.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        J'accompagne les équipes de production, méthodes,
                        maintenance, qualité et informatique dans l'analyse
                        des besoins, la résolution d'incidents, la mise en place
                        de solutions techniques, les tests, la validation,
                        le déploiement et l'accompagnement des utilisateurs.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Ma polyvalence me permet de m'adapter à différents
                        environnements industriels et à de nouveaux processus.
                        L'informatique constitue pour moi un levier au service
                        de l'industrie, permettant de moderniser les outils,
                        automatiser les tâches, améliorer la traçabilité et
                        renforcer la performance opérationnelle.
                    </p>

                </div>
            </div>
        </section>
    )
}