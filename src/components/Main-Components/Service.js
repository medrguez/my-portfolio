import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const services = [
    {
        icon: "las la-cogs",
        title: "Industrialisation & mise en service",
        text: "Installation de nouvelles lignes et remplacement de machines : cahier des charges (URS), choix des constructeurs, FAT, SAT, mise en service, levée des réserves et hypercare jusqu'à la stabilisation.",
    },
    {
        icon: "las la-clipboard-check",
        title: "Qualification des équipements",
        text: "Qualification QI / QO / QP, capabilité machine et process (Cmk, Cpk), Gage R&R, validation hardware et software avant production.",
    },
    {
        icon: "las la-exchange-alt",
        title: "Transfert industriel",
        text: "Transfert de produits et de lignes entre sites : programmes machines, gammes, nomenclatures, validation produit et démarrage série.",
    },
    {
        icon: "las la-tachometer-alt",
        title: "Performance industrielle & Lean",
        text: "Suivi du TRS en temps réel, analyse des causes racines, SMED, Poka-Yoke, équilibrage de ligne et takt time.",
    },
    {
        icon: "las la-tasks",
        title: "Gestion de projet",
        text: "Analyse des besoins, estimation des coûts, budget, planification (Gantt, PERT), coordination des équipes et des fournisseurs.",
    },
    {
        icon: "las la-project-diagram",
        title: "MES & ERP",
        text: "Intégration des équipements au MES et à SAP selon le modèle ISA-95, au service de la production, de la traçabilité et de la performance.",
    },
    {
        icon: "las la-industry",
        title: "Manufacturing IT / IT-OT",
        text: "Connexion des machines, réseaux Profinet, web services entre équipements et MES, mode Store & Forward pour garantir la traçabilité en cas de coupure.",
    },
    {
        icon: "las la-barcode",
        title: "Traçabilité & data",
        text: "Traçabilité unitaire, sérialisation, OSIsoft PI, SQL Server, fiabilisation des Master Data et des flux de données.",
    },
]

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

                        {services.map((s) => (
                            <div
                                key={s.title}
                                className="service-item scroll-animation"
                                data-aos="fade-up"
                            >
                                <i className={s.icon}></i>

                                <h2>{s.title}</h2>

                                <p>{s.text}</p>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    )
}
