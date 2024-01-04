// ContactUsPage.jsx

import React from 'react';
import '../Assets/Contac.css';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {

  const navigate = useNavigate();

  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions or suggestions! Reach out to us!</p>
      </div>

      <div className="contact-form">
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
          ></textarea>

          <button type="submit" onClick={()=>navigate("/home")}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
