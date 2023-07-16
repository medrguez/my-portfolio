import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
// import 'lightbox2/dist/js/lightbox.js';
import ReactPlayer from "react-player";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> portefeuille
            </h4>
            <h1 className="scroll-animation">
              {" "}
              <span>Projets</span> en vedette
            </h1>
          </div>

          <div className="row portfolio-items">
            <div
              className="col-md-12 scroll-animation"
              id="projet1"
              data-aos="fade-up"
            >
              <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio1.jpg"
                    data-lightbox="example-1"
                  >
                    <ReactPlayer url="https://youtu.be/0Tg2H5Ea5Hs" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://www.squashtest.com/">Squash</a>
                    </li>
                    <li>
                      <a href="https://www.atlassian.com/software/jira">Jira</a>
                    </li>
                    <li>
                      <a href="https://www.microsoft.com/en/microsoft-365/project/project-management-software">
                        Ms Project
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ibm.com/docs/en/radfws/9.6?topic=SSRTLW_9.6.0/org.eclipse.jst.ws.doc.user/concepts/cwsdl.htm">
                        WSDL
                      </a>
                    </li>
                    <li>
                      <a href="https://www.sap.com/">
                        MES (Manufacturing Execution System)
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="#projet1">
                    CHef de projet - Projet d'Optimisation des Processus,
                    Automatisation des Tâches et Traçabilité pour une
                    Performance Améliorée
                  </a>
                </h2>
              </div>
            </div>

            {/* <div className="col-md-6 scroll-animation" data-aos="fade-right">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio2.jpg"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/portfolio2.jpg"
                      alt="Portfolio"
                    />
                  </a>

                  <img src="../assets/images/portfolio2.jpg" alt="Portfolio" />

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://www.wordpress.com">WordPress</a>
                    </li>
                    <li>
                      <a href="https://www.larevel.com">Larevel/PHP</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.moonex.com">Moonex WordPress Theme</a>
                </h2>
              </div>
            </div>

            <div className="col-md-6 scroll-animation" data-aos="fade-left">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio3.jpg"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/portfolio3.jpg"
                      alt="Portfolio"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://www.figma.com">Figma</a>
                    </li>
                    <li>
                      <a href="https://www.webflow.com">Webflow</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.taskly-dashboard.com">
                    Taskly Dashboard
                  </a>
                </h2>
              </div>
            </div> */}

            <div
              className="col-md-12 scroll-animation"
              id="projet2"
              data-aos="fade-up"
            >
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio4.jpg"
                    data-lightbox="example-1"
                  >
                    <ReactPlayer url="https://youtu.be/hJhilsoKwfw" />

                    {/* <img
                      src="../assets/images/portfolio4.jpg"
                      alt="portfolio"
                    /> */}
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://www.microsoft.com/en-us/sql-server">
                        SQL Server
                      </a>
                    </li>
                    <li>
                      <a href="https://powerbi.microsoft.com/en-us/">
                        Power BI
                      </a>
                    </li>
                    <li>
                      <a href="https://www.sap.com/">SAP</a>
                    </li>
                    <li>
                      <a href="https://www.sap.com/">
                        MES (Manufacturing Execution System)
                      </a>
                    </li>
                    <li>
                      <a href="#projet2">Gestion de projet</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="#projet2">
                    Chef de projet | RTM (Real-time monitoring){" "}
                  </a>
                </h2>
              </div>
            </div>
            <div
              className="col-md-12 scroll-animation"
              id="projet3"
              data-aos="fade-up"
            >
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio4.jpg"
                    data-lightbox="example-1"
                  >
                    <ReactPlayer url="https://youtu.be/_aUBIMlDorE" />

                    {/* <img
                      src="../assets/images/portfolio4.jpg"
                      alt="portfolio"
                    /> */}
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://mall.industry.siemens.com/mall/en/WW/Catalog/Products/10205211">
                        Simatic Server
                      </a>
                    </li>
                    <li>
                      <a href="https://www.automation.tn/categorie-produit/vente-materiel-automatisme-siemens/simatic-industrial-automation-systems/distributed-controllers-et200/et200s/">
                        automate ET200S
                      </a>
                    </li>
                    <li>
                      <a href="https://www.burkert.fr/fr/services-et-assistance/telechargement-et-information/glossaire/PROFINET-la-norme-de-communication-securisee-dans-les-reseaux-industriels#:~:text=PROFINET%20(Process%20Field%20Network)%20est,syst%C3%A8mes%20de%20bus%20de%20terrain.">Réseau profinet</a>
                    </li>
                    <li>
                      <a href="https://www.sap.com/">
                        MES (Manufacturing Execution System)
                      </a>
                    </li>
                    <li>
                      <a href="#projet3">Gestion de projet</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="#projet3">
                    Ingenieur Conception & Instatlation | poka-yoke Juki
                  </a>
                </h2>
              </div>
            </div>

            {/* <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio5.jpg"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/portfolio5.jpg"
                      alt="portfolio"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://www.framer.com">Framer</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.lewis.com">
                    Lewis Portfolio Framer Template
                  </a>
                </h2>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
