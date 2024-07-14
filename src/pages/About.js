import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to Batarse Motors, your number one source for all things cars. We're dedicated to providing you the very best of cars and accessories, with an emphasis on quality, customer service, and uniqueness.</p>
      <p>Founded in 2024 by Eduardo Antonio Batarse Garcia, Batarse Motors has come a long way from its beginnings. When Eduardo Batarse first started out, her passion for the Car Indusrty drove them to start their own business.</p>
      <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
      <p>Sincerely,</p>
      <p>Eduardo Batarse</p>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="./images/Team.png" alt="Team Member 1" />
          <h3>Eduardo Batarse</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src="/images/Team.png" alt="Team Member 1" />
          <h3>Eduardo Batarse</h3>
          <p>Software FrontEnd Developer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
