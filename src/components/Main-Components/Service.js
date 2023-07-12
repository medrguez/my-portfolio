import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> Services
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Mes <span>spécialisations</span></h1>
                </div>

                <div className="services-items">
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-bezier-curve"></i>
                        <h2>Optimisation et amélioration des processus de travail</h2>
                        <p>Expert en optimisation, amélioration et automatisation des processus de travail</p>
                        <span className="Projets">30 Projets</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-code"></i>
                        <h2>Développement</h2>
                        <p>Développement d'outils d'automatisation et d'interfaces IHM pour une gestion efficace des composants dans la production, améliorant la visibilité et l'efficacité de la chaîne d'approvisionnement</p>
                        <span className="Projets">5 Projets</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-bezier-curve"></i>
                        <h2>Digitalisation</h2>
                        <p>Transformation numérique de l'usine en utilisant les données machine pour une collecte automatisée et précise des informations opérationnelles.</p>
                        <span className="Projets">8 Projets</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-bezier-curve"></i>
                        <h2>Expert MES</h2>
                        <p>je me spécialise dans l'optimisation des opérations de production pour améliorer l'efficacité et la performance globale de l'entreprise</p>
                        <span className="Projets">40 Projets</span>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}
