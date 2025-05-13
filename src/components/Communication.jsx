import React from 'react';
import '../assets/communication.css';

const Communication = () => {
  return (
    <section className="communication" id="communication">
      <div className="container">
        <h2>İletişim</h2>
        <div className="contact-info">
          <p><strong>Telefon:</strong> <a href="tel:+905551112233">+90 555 111 22 33</a></p>
          <p><strong>E-posta:</strong> <a href="mailto:info@ornekmail.com">info@ornekmail.com</a></p>
          <p><strong>Adres:</strong> Sümer Mahallesi, İstanbul, Türkiye</p>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Communication;
