// src/components/Footer.js
import React from 'react';
import './Footer.css'; // You'll create this later

function Footer() {
  return (
    <footer className="footer-section">
      <p>&copy; {new Date().getFullYear()} Yen Lai. All rights reserved.</p>
      {/* Add social media links, contact info here */}
    </footer>
  );
}

export default Footer;