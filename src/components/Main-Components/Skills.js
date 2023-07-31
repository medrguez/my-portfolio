import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> mes compétences
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>Mes <span>Advantages</span></h1>
                    </div>

                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/msProject.png" alt="Figma" id='msProject' />
                                    <h1 className="percent">92%</h1>
                                </div>
                                <p className="name">Microsoft Project </p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/jira.png" alt="jira" id="jira" />
                                    <h1 className="percent">85%</h1>
                                </div>
                                <p className="name">Jira</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/squash_logo_petit.png" alt="Squash" id='Squash' />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">Squash</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/postman.png" alt="postman" id='postman' />
                                    <h1 className="percent">90%</h1>
                                </div>
                                <p className="name">Mantis GLPI  Fresh-service //SOAP Postman Java Selinum cucumber test NG SQL Minitab //Gcpreview Network profinet wsdl</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/Mantis.png" alt="Mantis" id='Mantis' />
                                    <h1 className="percent">92%</h1>
                                </div>
                                <p className="name">Mantis bug tracker </p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/GLPI.png" alt="GLPI" id="GLPI" />
                                    <h1 className="percent">85%</h1>
                                </div>
                                <p className="name">GLPI</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/Fresh-service.png" alt="Fresh-service" id='Fresh-service' />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">Fresh-service</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/cucumber.png" alt="cucumber" id='cucumber' />
                                    <h1 className="percent">90%</h1>
                                </div>
                                <p className="name">cucumber</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/Minitab.png" alt="Minitab" id='Minitab' />
                                    <h1 className="percent">92%</h1>
                                </div>
                                <p className="name">Minitab</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/sql.png" alt="SQL" id="sql" />
                                    <h1 className="percent">85%</h1>
                                </div>
                                <p className="name">SQL</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/java.png" alt="java" id='java' />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">Java</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/cucumber.png" alt="cucumber" id='cucumber' />
                                    <h1 className="percent">90%</h1>
                                </div>
                                <p className="name">cucumber</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/wordpress.png" alt="WordPress" />
                                    <h1 className="percent">86%</h1>
                                </div>
                                <p className="name">WordPress</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/laravel.png" alt="Laravel/PHP" />
                                    <h1 className="percent">70%</h1>
                                </div>
                                <p className="name">Laravel/PHP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
