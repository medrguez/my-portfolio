import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <section
            className="services-area page-section scroll-to-page"
            id="services"
        >
            <div className="custom-container">

                <div className="services-content content-width">

                    <div className="section-header">

                        <h4
                            className="subtitle scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-layer-group"></i> Compétences
                        </h4>

                        <h1
                            className="scroll-animation"
                            data-aos="fade-up"
                        >
                            Compétences & <span>Expertises</span>
                        </h1>

                    </div>

                    <div className="services-items">

                        <div
                            className="service-item scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-industry"></i>

                            <h2>
                                Manufacturing IT / IT-OT
                            </h2>

                            <p>
                                Intégration des systèmes industriels,
                                interopérabilité IT/OT, communication entre
                                applications, équipements de production
                                et systèmes d'information.
                            </p>
                        </div>


                        <div
                            className="service-item scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-desktop"></i>

                            <h2>
                                Applications industrielles
                            </h2>

                            <p>
                                Support applicatif, analyse fonctionnelle
                                et technique, résolution d'incidents,
                                maintenance corrective et évolutive,
                                accompagnement des utilisateurs.
                            </p>
                        </div>


                        <div
                            className="service-item scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-project-diagram"></i>

                            <h2>
                                MES & ERP
                            </h2>

                            <p>
                                Analyse des besoins, intégration,
                                optimisation et support des systèmes MES
                                et ERP au service de la production,
                                de la traçabilité et de la performance.
                            </p>
                        </div>


                        <div
                            className="service-item scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-database"></i>

                            <h2>
                                PIMS / Historian & Data
                            </h2>

                            <p>
                                Exploitation des données industrielles,
                                OSIsoft PI, SQL Server, suivi des Master Data,
                                analyse et fiabilisation des flux de données.
                            </p>
                        </div>


                        <div
                            className="service-item scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-network-wired"></i>

                            <h2>
                                SCADA & Connectivité industrielle
                            </h2>

                            <p>
                                Connexion des équipements industriels,
                                réseaux Profinet, interfaces techniques,
                                acquisition des données et supervision
                                des systèmes de production.
                            </p>
                        </div>


                        <div
                            className="service-item scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-digital-tachograph"></i>

                            <h2>
                                Digital Manufacturing
                            </h2>

                            <p>
                                Digitalisation des processus industriels,
                                automatisation des tâches, traçabilité,
                                KPI, reporting et accompagnement
                                des démarches Industrie 4.0.
                            </p>
                        </div>


                        <div
                            className="service-item scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-tasks"></i>

                            <h2>
                                Gestion de projet
                            </h2>

                            <p>
                                Analyse des besoins, cahiers des charges,
                                estimation, planification, coordination
                                des équipes, suivi des tests,
                                FAT/SAT et déploiement.
                            </p>
                        </div>


                        <div
                            className="service-item scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-cogs"></i>

                            <h2>
                                Industrialisation & amélioration continue
                            </h2>

                            <p>
                                Optimisation des processus de fabrication,
                                réduction des temps de cycle, SMED,
                                analyse des causes racines et amélioration
                                de la performance opérationnelle.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}