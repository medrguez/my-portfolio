import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Herosec() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
        <div className="custom-container">
            <div className="hero-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom" data-aos='fade-up'>
                        <i className="las la-home"></i> Introduce
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Bonjour, Je suis <span>Mohamed Rguez</span>, Ingénieur Industrialisation et chef de projet MES digitalisation et smart industrie 4.0</h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Je développe des solutions techniques innovantes visant à améliorer l'efficacité des processus de travail et à automatiser les tâches manuelles.</p>
                <a href="#portfolio" 
                    className="go-to-project-btn scroll-to scroll-animation" 
                     data-aos='fade-up'>
                    <img src="../assets/images/round-text.png" alt="Rounded Text"/>
                    <i className="las la-arrow-down"></i>
                </a>    
                <div className="facts d-flex">
                    <div className="left scroll-animation" data-aos='fade-right'>
                        <h1>16+</h1>
                        <p>Années <br/>d'Experience</p>
                    </div>
                    <div className="right scroll-animation" data-aos='fade-left'>
                        <h1>182+</h1>
                        <p>projets réalisés</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
