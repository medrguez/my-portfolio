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
                            Mettre en production des équipements fiables,
                            <br />
                            <span>et les faire performer dans la durée</span>
                        </h1>

                    </div>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Ingénieur de formation, j'ai près de 19 ans d'expérience
                        en environnement de production, dont 16 ans
                        d'industrialisation sur des lignes d'assemblage
                        électronique CMS chez Lacroix Electronics. Mon parcours
                        couvre aussi l'automobile, la pharmacie et l'agroalimentaire.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Chef de projet et référent technique de site, j'ai piloté
                        l'installation de nouvelles lignes, le remplacement de
                        machines et des transferts industriels entre sites :
                        rédaction des cahiers des charges (URS), consultation
                        et choix des constructeurs, FAT chez le fabricant, SAT et
                        mise en service, qualification QI/QO/QP, levée des réserves
                        et accompagnement jusqu'au démarrage série.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Mes réalisations sont mesurées : installation d'une ligne
                        CMS complète (environ 1 M€), automatisation du marquage par
                        gravure laser connectée au MES, et un TRS passé de 50 % à 85 %
                        grâce au suivi de la performance en temps réel.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Ma double compétence process et IT/OT fait la différence :
                        je sais installer et qualifier un équipement, puis
                        l'intégrer au MES et à l'ERP selon le modèle ISA-95.
                        J'ai également travaillé sur l'assemblage mécanique et
                        électromécanique, notamment chez Iveco Bus.
                    </p>

                    <p
                        className="scroll-animation"
                        data-aos="fade-up"
                    >
                        Je travaille au quotidien avec la production, les méthodes,
                        la maintenance, la qualité, les constructeurs et les équipes
                        informatiques, en France comme à l'international (Tunisie,
                        Pologne, Allemagne).
                    </p>

                </div>
            </div>
        </section>
    )
}
