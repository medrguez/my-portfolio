import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> résumé
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Education & <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">

            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2014 - 2022</span>
              <h2>Chef de projet IT industriel spécialisé en MES, digitalisation et smart industrie</h2>
              <h3>Lacroix Electronics</h3>
              <p>
                <li> Gestion et supervision de projets</li>
                <li>Analyse des spécifications fonctionnelles</li>
                <li> Élaboration des documents de spécifications techniques</li>
                <li>
                  Innovation des solutions techniques pour permettre la
                  communication entre les équipements et le MES
                </li>
                <li>
                  Rédaction des cahiers des charges pour les méthodes
                  nécessaires aux services web (API) afin de faciliter la
                  communication entre les équipements et le MES, ainsi qu'entre
                  le MES et l'ERP
                </li>
                <li>
                  Étude des entrées/sorties de la machine pour trouver des
                  moyens de la connecter au MES
                </li>
                <li>
                  Communication avec les fabricants de machines pour les mises à
                  jour ou les modifications du logiciel de la machine
                </li>
                <li>
                  Automatisation et optimisation des tâches et des processus de
                  travail
                </li>
                <li>
                  Digitalisation des indicateurs de performance (KPI) pour
                  obtenir un reporting automatique
                </li>
                <li>
                  Contribution au développement de nouvelles transactions et
                  interfaces
                </li>
                <li>
                  Tests de confirmation, de régression et d'API lors de la
                  création de méthodes de services web
                </li>
                <li>
                  Tests automatisés, intégration et déploiement dans
                  l'environnement de production
                </li>
                <li>
                  Support technique et de production pour corriger les anomalies
                  de connexion et de traitement entre le MES, l'ERP et les
                  équipements.
                </li>
              </p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2007 - 2014</span>
              <h2>Responsable programation machine sur site</h2>
              <h3>Lacroix Electronics</h3>
              <p>
                <b>Création des programmes de poses</b>
                <li> Conception et vérification des fichiers Gerber/CAO</li>
                <li> Vérification des données d’entrées clients</li>
                <li> Rédaction des dossier Machines</li>
                <li>
                  Amélioration et optimisation des programmes de poses pour maximiser les chargements communs
                </li>
                <li>
                  Chronométrage temps de cycle de produit par gamme d’opération
                </li>
                <li> Minimisation du temps SMED (Single-Minute Exchange of Die)</li>
                <li> Amélioration du TRS (Taux de Rendement Synthétique)</li>
                <br />
                <b>Création de programmes de contrôle AOI (Automatic Optical Inspection)</b>
                <br />
                <li>
                Développement d'algorithmes pour différents boîtiers de composants
                </li>
                <li>
                  Assurer le maximum possible de couverture Test des composants
                </li>
                <li>
                Collaboration avec l'équipe de test ICT/FCT pour remplir la partie de couverture de test
                </li>
                <br />
                <b>Développement </b>
                <br />
                <li>
                Développement d'interfaces homme-machine (IHM) affichant la liste des composants et leur emplacement dans le magasin
                </li>
                <li>Alerte sur les quantités de composants disponibles</li>
                <li>
                Exportation d'un fichier contenant un chargement commun entre les produits saisis, avec un ordre de planification
                </li>
              </p>
              <h2>Ingénieur Méthode</h2>
              <h3>Lacroix Electronics</h3>
              <p>
                <b>Injection des données client sur SAP</b>
                <br />
                <li> Vérification données client</li>
                <li> Injection de la nomenclature dans SAP</li>
                <li> Création de produits ou de composants dans SAP</li>
                <li>Mise en place de gammes de produits</li>
                <li> Affectation des postes de travail</li>
                <li>
                Sécurisation de la confirmation des travaux sur le poste de travail via un service web
                </li>
              </p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2001 - 2006</span>
              <h2>Diplome Ingenieur Informatique</h2>
              <p>Faculté des sciences de Tunis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
