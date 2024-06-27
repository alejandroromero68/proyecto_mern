import React from 'react';
import './Footer.css'; // Importa el archivo CSS para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Síguenos en nuestras redes sociales</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
