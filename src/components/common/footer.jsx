import React from "react";
import "./styles/footer.css"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Sakib Prodhan</h3>
        <p>© {new Date().getFullYear()} Sakib Prodhan. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
