import React, { useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5oaxai",
        "template_j7h15mb",
        form.current,
        "hQRQ0jzv-hnqQtQQj"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact-area page-section scroll-content" id="contact">
      <div className="custom-container">
        <div className="contact-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-dollar-sign"></i> contact
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Travaillons <span>ensemble !</span>
            </h1>
          </div>
          <h3 className="scroll-animation" data-aos="fade-up">
            lessirguez@gmail.com
          </h3>
          <p id="required-msg">
            * Les champs marqués sont requis pour être remplis.
          </p>

          <form
            className="contact-form scroll-animation"
            data-aos="fade-up"
            // method="POST"
            // action="mailer.php"
            ref={form} onSubmit={sendEmail}
          >
            <div
              className="alert alert-success messenger-box-contact__msg"
              style={{ display: "none" }}
              role="alert"
            >
              Votre message a été envoyé avec succès.
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <label for="full-name">
                    Nom complet <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Votre Nom Complet"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label for="email">
                    Email <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Votre Adresse Email"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label for="phone-number">
                    TÉLÉPHONE <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label for="subject">
                    Objet <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="L'objet de message"
                  />
                  {/* <select name="subject" id="subject">
                    <option value="">Select a subject</option>
                    <option value="subject1">Subject 1</option>
                    <option value="subject2">Subject 2</option>
                    <option value="subject3">Subject 3</option>
                  </select> */}
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="input-group">
                  <label for="budget">
                    Votre budget <span>(optional)</span>
                  </label>
                  <input
                    type="number"
                    name="budget"
                    id="budget"
                    placeholder="A range budget for Votre project"
                  />
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="input-group">
                  <label for="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Veuillez rédiger votre message ici..."
                  ></textarea>
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="input-group upload-attachment">
                  <div>
                    <label for="upload-attachment">
                      <i className="las la-cloud-upload-alt"></i> Veuillez
                      joindre un fichier en pièce jointe.
                      <input type="file" name="file" id="upload-attachment" />
                    </label>
                  </div>
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="input-group submit-btn-wrap">
                  <button
                    className="theme-btn"
                    name="submit"
                    type="submit"
                    id="submit-form"
                  >
                    Envoyer un message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
