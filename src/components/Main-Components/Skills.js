import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const digitalSkills = [
        { name: "MES / Manufacturing Applications", icon: "las la-industry" },
        { name: "ERP / SAP", icon: "las la-cubes" },
        { name: "PIMS / Historian", icon: "las la-chart-line" },
        { name: "OSIsoft PI", icon: "las la-database" },
        { name: "SCADA / Supervision", icon: "las la-desktop" },
        { name: "SQL Server", icon: "las la-database" },
        { name: "Oracle SQL / PL-SQL", icon: "las la-database" },
        { name: "C# / .NET", icon: "las la-code" },
        { name: "API / Web Services", icon: "las la-exchange-alt" },
        { name: "Postman", icon: "las la-paper-plane" },
        { name: "IT / OT Integration", icon: "las la-network-wired" },
        { name: "Profinet", icon: "las la-project-diagram" },
        { name: "Azure DevOps", icon: "lab la-microsoft" },
        { name: "Git", icon: "lab la-git-alt" },
        { name: "Docker", icon: "lab la-docker" },
        { name: "Jira", icon: "las la-tasks" },
        { name: "Squash", icon: "las la-vial" },
        { name: "Mantis", icon: "las la-bug" },
        { name: "GLPI", icon: "las la-headset" },
        { name: "Freshservice", icon: "las la-ticket-alt" },
        { name: "MS Project", icon: "las la-project-diagram" },
        { name: "Power BI", icon: "las la-chart-bar", level: "Intermédiaire" }
    ]

    const industrialSkills = [
        { name: "Industrialisation", icon: "las la-industry" },
        { name: "Installation de lignes", icon: "las la-cogs" },
        { name: "Transfert industriel", icon: "las la-exchange-alt" },
        { name: "URS / Cahier des charges", icon: "las la-file-alt" },
        { name: "QI / QO / QP", icon: "las la-clipboard-check" },
        { name: "Cmk / Cpk / Gage R&R", icon: "las la-ruler" },
        { name: "Lignes CMS", icon: "las la-microchip" },
        { name: "Assemblage mécanique", icon: "las la-wrench" },
        { name: "Équilibrage de ligne", icon: "las la-balance-scale" },
        { name: "Poka-Yoke", icon: "las la-shield-alt" },
        { name: "ISA-95", icon: "las la-sitemap" },
        { name: "Hypercare", icon: "las la-life-ring" },
        { name: "Store & Forward", icon: "las la-sync" },
        { name: "Digital Manufacturing", icon: "las la-digital-tachograph" },
        { name: "Industrie 4.0", icon: "las la-microchip" },
        { name: "Process de fabrication", icon: "las la-cogs" },
        { name: "Automatisation des tâches", icon: "las la-robot" },
        { name: "Optimisation des processus", icon: "las la-chart-line" },
        { name: "Amélioration continue", icon: "las la-sync-alt" },
        { name: "Kaizen", icon: "las la-arrow-up" },
        { name: "SMED", icon: "las la-stopwatch" },
        { name: "TRS / KPI", icon: "las la-tachometer-alt" },
        { name: "Méthodes industrielles", icon: "las la-tools" },
        { name: "FAT / SAT", icon: "las la-clipboard-check" },
        { name: "Tests & Validation", icon: "las la-check-double" },
        { name: "Analyse causes racines", icon: "las la-search" },
        { name: "Traçabilité", icon: "las la-barcode" },
        { name: "Production", icon: "las la-industry" },
        { name: "Maintenance", icon: "las la-tools" },
        { name: "AOI", icon: "las la-eye" },
        { name: "ICT / FCT", icon: "las la-microchip" },
        { name: "Équipements industriels", icon: "las la-cog" }
    ]

    const learningSkills = [
        "MQTT",
        "OPC UA"
    ]

    return (
        <section
            className="skills-area page-section scroll-to-page"
            id="skills"
        >
            <div className="custom-container">

                <div className="skills-content content-width">

                    <div className="section-header">

                        <h4
                            className="subtitle scroll-animation"
                            data-aos="fade-up"
                        >
                            <i className="las la-layer-group"></i>
                            {" "}Expertise technique
                        </h4>

                        <h1
                            className="scroll-animation"
                            data-aos="fade-up"
                        >
                            Une double culture
                            <br />
                            <span>industrielle & numérique</span>
                        </h1>

                        <p
                            className="skills-intro"
                            data-aos="fade-up"
                        >
                            Des systèmes d'information jusqu'au terrain
                            de production : des compétences complémentaires
                            pour accompagner la transformation industrielle.
                        </p>

                    </div>

                    <div className="expertise-grid">

                        {/* INFORMATIQUE */}
                        <div
                            className="expertise-card"
                            data-aos="fade-right"
                        >
                            <div className="expertise-card-header">
                                <div className="expertise-main-icon">
                                    <i className="las la-laptop-code"></i>
                                </div>

                                <div>
                                    <h2>Informatique & Digital</h2>
                                    <p>
                                        Applications, données, intégration
                                        et outils numériques
                                    </p>
                                </div>
                            </div>

                            <div className="expertise-tags">
                                {digitalSkills.map((skill, index) => (
                                    <div
                                        className="expertise-tag"
                                        key={index}
                                    >
                                        <i className={skill.icon}></i>

                                        <span>{skill.name}</span>

                                        {skill.level && (
                                            <small>{skill.level}</small>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* INDUSTRIE */}
                        <div
                            className="expertise-card"
                            data-aos="fade-left"
                        >
                            <div className="expertise-card-header">
                                <div className="expertise-main-icon">
                                    <i className="las la-industry"></i>
                                </div>

                                <div>
                                    <h2>Industrie & Process</h2>
                                    <p>
                                        Production, industrialisation,
                                        performance et amélioration continue
                                    </p>
                                </div>
                            </div>

                            <div className="expertise-tags">
                                {industrialSkills.map((skill, index) => (
                                    <div
                                        className="expertise-tag"
                                        key={index}
                                    >
                                        <i className={skill.icon}></i>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>


                    {/* MONTEE EN COMPETENCE */}
                    <div
                        className="learning-zone"
                        data-aos="fade-up"
                    >
                        <div className="learning-icon">
                            <i className="las la-graduation-cap"></i>
                        </div>

                        <div>
                            <h3>Veille & montée en compétence</h3>

                            <p>
                                Technologies suivies dans le cadre
                                de l'évolution des architectures industrielles IT/OT.
                            </p>

                            <div className="learning-tags">
                                {learningSkills.map((skill, index) => (
                                    <span key={index}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}