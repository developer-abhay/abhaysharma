import React from "react";
import "./Contact.css";
import { RiWhatsappLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>abhaysharma.developer</h5>
            <h5>@gmail.com</h5>
            <a
              href="mailto:abhaysharma.developer@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Mail
            </a>
          </article>

          <article className="contact-option">
            <RiWhatsappLine className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7042491465</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917042491465"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
