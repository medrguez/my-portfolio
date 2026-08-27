import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="resume-area page-section scroll-to-page"
      id="resume"
    >
      <div className="custom-container">
        <div className="resume-content content-width">

          <div className="section-header">

            <h4
              className="subtitle scroll-animation"
              data-aos="fade-up"
            >
              <i className="las la-briefcase"></i> Parcours
            </h4>

            <h1
              className="scroll-animation"
              data-aos="fade-up"
            >
              Expérience <span>professionnelle</span>
            </h1>

          </div>

          <div className="resume-timeline">

            {/* ACTEMIUM */}
            <div
              className="item scroll-animation"
              data-aos="fade-right"
            >
              <span className="date">07/2025 - 12/2025</span>

                <h2>Chef de Projet Digital Manufacturing</h2>

                <h3>Actemium Software — Groupe VINCI | Saint-Étienne</h3>

              <ul>
                <li>
                  Pilotage de projets de digitalisation industrielle :
                  MES, traçabilité, gestion de batchs,
                  interopérabilité IT/OT, datawarehouse et
                  Smart Manufacturing.
                </li>

                <li>
                  Analyse des besoins clients et rédaction
                  des cahiers des charges.
                </li>

                <li>
                  Estimation des charges et des coûts,
                  planification des ressources humaines
                  et techniques.
                </li>

                <li>
                  Coordination des équipes de développement
                  de la conception jusqu'au déploiement.
                </li>

                <li>
                  Supervision des tests FAT/SAT,
                  mise en service et support client.
                </li>

                <li>
                  Développement d'endpoints API pour
                  l'interfaçage entre le MES et SAP.
                </li>

                <li>
                  Environnement : Blazor (.NET),
                  C# et SQL Server.
                </li>
              </ul>
            </div>


            {/* IVECO */}
            <div
              className="item scroll-animation"
              data-aos="fade-left"
            >
              <span className="date">06/2024 - 07/2025</span>

                    <h2>Chef de Projet Technique Industriel</h2>

                    <h3>Iveco Bus | Annonay</h3>

              <ul>
                <li>
                  Maintenance et support applicatif
                  des applications industrielles en production.
                </li>

                <li>
                  Analyse et résolution des incidents
                  et accompagnement des utilisateurs.
                </li>

                <li>
                  Analyse des besoins métiers et proposition
                  de solutions techniques adaptées.
                </li>

                <li>
                  Développement et paramétrage de solutions
                  spécifiques sur des systèmes MES et ERP.
                </li>

                <li>
                  Analyse et optimisation des performances
                  des applications.
                </li>

                <li>
                  Rédaction de documentation technique
                  et de guides utilisateurs.
                </li>

                <li>
                  Optimisation des processus industriels
                  et amélioration continue.
                </li>
              </ul>
            </div>


            {/* FAREVA */}
            <div
              className="item scroll-animation"
              data-aos="fade-right"
            >
              <span className="date">01/2024 - 05/2024</span>

              <h2>Ingénieur Informatique Industriel</h2>

              <h3>Fareva Excel Vision | Annonay</h3>

              <ul>
                <li>
                  Administration et maintenance
                  du système MES Guardian.
                </li>

                <li>
                  Support des processus de sérialisation
                  pharmaceutique.
                </li>

                <li>
                  Création et gestion des Master Data
                  produits et ordres de travail.
                </li>

                <li>
                  Pilotage des tests End-to-End (E2E)
                  et Site-to-Site (S2S).
                </li>

                <li>
                  Contrôles techniques sur les équipements
                  de production et les IHM.
                </li>

                <li>
                  Extraction et analyse des données
                  depuis les bases SQL.
                </li>

                <li>
                  Diagnostic et résolution des défaillances
                  sur Advisor et Sentri.
                </li>

                <li>
                  Gestion des flux d'information
                  entre Systech et Sentri.
                </li>
              </ul>
            </div>


            {/* CAPGEMINI / LILLY */}
            <div
              className="item scroll-animation"
              data-aos="fade-left"
            >
              <span className="date">03/2023 - 12/2023</span>

              <h2>Senior TMA — PIMS</h2>

              <h3>Capgemini — Lilly Strasbourg</h3>

              <ul>
                <li>
                  Maintenance évolutive et corrective
                  des systèmes d'information industriels.
                </li>

                <li>
                  Gestion des incidents et monitoring
                  des applications.
                </li>

                <li>
                  Gestion et correction des données
                  avec OSIsoft PI et SQL Server.
                </li>

                <li>
                  Suivi de l'intégrité des Master Data
                  et des transferts de données.
                </li>

                <li>
                  Contribution à la configuration
                  des lignes de production intégrant
                  automates et équipements spécifiques.
                </li>

                <li>
                  Support utilisateurs, documentation
                  et coordination technique.
                </li>

                <li>
                  Participation aux astreintes afin
                  d'assurer la continuité de production
                  et la traçabilité.
                </li>
              </ul>
            </div>


            {/* LACROIX MES */}
            <div
              className="item scroll-animation"
              data-aos="fade-right"
            >
              <span className="date">01/2014 - 12/2022</span>

              <h2>Chef de Projet MES & Smart Industrie</h2>

              <h3>Lacroix Electronics | Tunisie</h3>

              <ul>
                <li>
                  Pilotage de la transformation digitale
                  de l'usine selon les principes
                  de l'Industrie 4.0.
                </li>

                <li>
                  Pilotage de projets MES et
                  Smart Industry.
                </li>

                <li>
                  Analyse des besoins, conception
                  et mise en œuvre de solutions MES.
                </li>

                <li>
                  Gestion des budgets, délais,
                  risques et conduite du changement.
                </li>

                <li>
                  Conception d'interfaces permettant
                  l'intégration du MES avec
                  les systèmes existants.
                </li>

                <li>
                  Automatisation des processus
                  et digitalisation des KPI
                  et du reporting.
                </li>

                <li>
                  Tests fonctionnels, support technique
                  et résolution des anomalies
                  MES, ERP et équipements.
                </li>
              </ul>
            </div>


            {/* LACROIX INDUSTRIALISATION */}
            <div
              className="item scroll-animation"
              data-aos="fade-left"
            >
              <span className="date">03/2007 - 06/2014</span>

              <h2>
                Ingénieur support applicatif/Technique
              </h2>

              <h3>Lacroix Electronics | Tunisie</h3>

              <ul>
                <li>
                  Programmation et validation
                  des machines de production.
                </li>

                <li>
                  Développement et optimisation
                  des programmes de pose.
                </li>

                <li>
                  Vérification des fichiers Gerber/CAO
                  et des données clients.
                </li>

                <li>
                  Optimisation des temps de cycle
                  et réduction des temps SMED.
                </li>

                <li>
                  Analyse des causes racines
                  et mise en place d'actions
                  correctives et préventives.
                </li>

                <li>
                  Création de programmes
                  de contrôle AOI.
                </li>

                <li>
                  Collaboration avec les équipes
                  de test ICT/FCT.
                </li>

                <li>
                  Support technique des équipements
                  et machines de production.
                </li>

                <li>
                  Collaboration avec la maintenance,
                  Supply Chain, R&D, qualité
                  et production.
                </li>
              </ul>
            </div>


            {/* FORMATION */}
            <div
              className="item scroll-animation"
              data-aos="fade-right"
            >
              <span className="date">2001 - 2006</span>

              <h2>Diplôme d'Ingénieur Informatique</h2>

              <h3>Faculté des Sciences de Tunis</h3>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}