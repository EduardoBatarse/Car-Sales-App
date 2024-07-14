import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below to get in touch with us.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="contact-info">
        <h2>Our Office</h2>
        <p>San Pedro Garza Garcia, Nuevo Leon, #64103</p>
        <p>Email: eduardobatarse1@gmail.com</p>
        <p>Phone: (834) 181-1674</p>
      </div>
    </div>
  );
};

export default Contact;
