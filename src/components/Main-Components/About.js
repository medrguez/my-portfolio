import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (  
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> a propos
                                            </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Vers une réalité moderne<br/>
                     <span>L'impératif de la digitalisation et de l'intelligence artificielle</span></h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>
                    Je suis un ingénieur en industrialisation et chef de projet MES spécialisé dans la digitalisation et la smart industrie 4.0, la gestion de projet, les tests et la validation automatisée, ainsi que le support technique. Fort d'une solide expérience dans le domaine de l'industrie, j'ai travaillé sur de nombreux projets visant à optimiser les processus de fabrication et à intégrer les technologies numériques pour améliorer l'efficacité et la productivité.
                    </p> 
                <p className="scroll-animation" data-aos='fade-up'>
Ma passion pour la transformation numérique m'a conduit à me spécialiser dans la mise en œuvre de systèmes MES avancés, permettant une gestion transparente des opérations de fabrication et une prise de décision éclairée en temps réel. J'ai une solide expertise dans l'analyse des besoins des clients, la conception et la mise en place de solutions MES adaptées à leurs exigences spécifiques, ainsi que dans la coordination et la supervision des équipes impliquées.</p>
<p className="scroll-animation" data-aos='fade-up'>
Mon expérience approfondie dans les tests et la validation automatisée m'a permis de développer des stratégies et des processus efficaces pour assurer la qualité et la fiabilité des systèmes et des logiciels industriels. J'ai également acquis une solide expérience en matière de support technique, en aidant les équipes et les clients à résoudre les problèmes techniques et à assurer un fonctionnement optimal des systèmes.</p>
<p className="scroll-animation" data-aos='fade-up'>
Je suis constamment à l'affût des dernières avancées technologiques et des tendances de l'industrie 4.0. Je suis convaincu que la transformation numérique est essentielle pour permettre aux entreprises de rester compétitives dans un environnement en constante évolution.</p>
<p className="scroll-animation" data-aos='fade-up'>
Je suis passionné par mon travail et je m'engage à fournir des solutions innovantes et à atteindre les objectifs fixés. Je suis ouvert à de nouvelles opportunités et à des projets passionnants dans le domaine de l'industrialisation, de la digitalisation et de la smart industrie 4.0.</p>
            </div>
        </div>
    </section>
  )
}
//<h1 className="scroll-animation" data-aos='fade-up'>Every great design begin with<br/>
//an even <span>better story</span></h1>