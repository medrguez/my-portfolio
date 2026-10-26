import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    date: "07/2025 - 12/2025",
    title: "Chef de Projet Digital Manufacturing",
    company: "Actemium Software — Groupe VINCI | Saint-Étienne",
    items: [
      "Chef de projet côté intégrateur : évolution du MES et de ses interfaces avec le nouvel ERP SAP, en garantissant la traçabilité et la continuité de production.",
      "Analyse des besoins, cahier des charges, estimation des charges et des coûts, planification des ressources.",
      "Coordination des équipes de développement jusqu'aux FAT, SAT et à la mise en service.",
      "Conseil au client sur l'intégration des équipements, du MES et de l'ERP selon le modèle ISA-95.",
      "Développement d'endpoints API pour l'interfaçage MES-SAP (Blazor .NET, C#, SQL Server).",
    ],
  },
  {
    date: "06/2024 - 07/2025",
    title: "Ingénieur Projet Performance Industrielle",
    company: "Iveco Bus | Annonay",
    items: [
      "Responsable fonctionnel d'une ligne d'assemblage mécanique d'environ 60 personnes, garant de la cadence et du planning ; animation des réunions quotidiennes de production.",
      "Équilibrage de ligne : analyse des tâches selon leur complexité et leurs dépendances, graphe des antériorités et chemin critique (PERT, Gantt).",
      "Calcul du takt time, dimensionnement des postes et des effectifs, redistribution des tâches.",
      "Recommandation d'outillages pour simplifier les opérations et réduire les temps de cycle (Lean).",
      "Audit du système d'information de production (MES / ERP) et rédaction du cahier des charges des corrections.",
    ],
  },
  {
    date: "01/2024 - 05/2024",
    title: "Ingénieur Informatique Industriel",
    company: "Fareva Excel Vision | Annonay",
    items: [
      "Sérialisation pharmaceutique : traçabilité unitaire de chaque boîte, des données jusqu'aux lignes de conditionnement.",
      "Administration et maintenance du MES Guardian ; Master Data produits et ordres de travail.",
      "Pilotage des tests End-to-End (E2E) et Site-to-Site (S2S), contrôles sur équipements et IHM.",
      "Diagnostic et résolution des défaillances sur Advisor et Sentri, flux Systech / Sentri.",
    ],
  },
  {
    date: "03/2023 - 12/2023",
    title: "Senior TMA — PIMS",
    company: "Capgemini — Lilly Strasbourg",
    items: [
      "Maintenance corrective et évolutive du PIMS (OSIsoft PI), gestion des incidents et monitoring.",
      "Correction de données OSIsoft PI et SQL Server, intégrité des Master Data et des transferts.",
      "Contribution à la configuration des lignes de production (automates, équipements spécifiques).",
      "Support utilisateurs, documentation et astreintes pour la continuité de production.",
    ],
  },
  {
    date: "01/2014 - 12/2022",
    title: "Chef de Projet Industrialisation & Digital Manufacturing",
    company: "Lacroix Electronics | Tunisie",
    items: [
      "Référent technique du site, à l'interface entre process, méthodes, informatique industrielle et amélioration continue.",
      "Installation et transfert de lignes de production, remplacement de machines : URS, consultation des constructeurs, FAT chez le fabricant, SAT, mise en service et levée des réserves.",
      "Installation d'une ligne CMS complète (environ 1 M€) : dépileur, convoyeurs, Siplace, JUKI, four Soltec, inspection Parmi, empileur.",
      "Automatisation du marquage : gravure laser ASYS connectée au MES par web services, en remplacement des étiquettes Data Matrix et des scans manuels. Mode Store & Forward : en cas de perte de connexion au MES, la machine stocke les données en local puis les retransmet dès que la connexion est rétablie, sans perte de traçabilité.",
      "Pilotage de bout en bout : URS, FAT chez le constructeur en Allemagne, SAT, qualification QI / QO / QP et hypercare jusqu'à la stabilisation en production.",
      "Qualification et validation hardware et software des équipements ; Poka-Yoke déployés en France, Pologne et Allemagne.",
      "Architecture d'intégration ISA-95 (machines, automates, MES, ERP) et connexion des machines au serveur MES.",
      "Conception et déploiement du RTM (TRS, TRG, FPY, MTTR, MTBF) en Tunisie, France, Pologne et Allemagne : TRS passé de 50 % à 85 %.",
      "Gestion des budgets, délais, risques et conduite du changement.",
    ],
  },
  {
    date: "03/2007 - 06/2014",
    title: "Ingénieur Industrialisation & Qualification Équipements",
    company: "Lacroix Electronics | Tunisie",
    items: [
      "Réception et qualification des machines des lignes CMS (sérigraphie, placement, refusion, AOI) : QI / QO / QP avant mise en production.",
      "Études de capabilité machine et process (Cmk, Cpk) et de répétabilité / reproductibilité (Gage R&R).",
      "Transferts industriels inter-sites : programmes machines, gammes et nomenclatures, validation produit (premiers articles, capabilité) et démarrage série.",
      "Industrialisation des nouveaux produits (NPI) : programmes machines, configuration SAP (classification, gammes, nomenclatures).",
      "Machines d'insertion de pins avec contrôle d'effort, dispensing et fixation de radiateurs.",
      "Troubleshooting des pannes complexes avec astreinte 24h/24 ; réduction des temps de cycle et SMED.",
    ],
  },
];

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

            {experiences.map((exp, i) => (
              <div
                key={exp.date}
                className="item scroll-animation"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <span className="date">{exp.date}</span>
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <ul>
                  {exp.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* FORMATION */}
            <div
              className="item scroll-animation"
              data-aos="fade-left"
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
