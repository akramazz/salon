"use client";

import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* INFO CONTACT */}
        <div className="footer-info">
          <h3>Reflet D’Homme 💈</h3>
          <p>71 Avenue Victor Hugo, Boulogne Billancourt 92100</p>
          <p>📞 +09 80 27 41 11</p>
          <p>🕒 Lun-Sam 9h30-19h30, Dim 10h30-17h30</p>

          {/* ICONES SOCIALES */}
          <div className="social-icons">
            <a href="https://www.facebook.com/reflet_dhomme" target="_blank" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/reflet_dhomme" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@reflet_dhomme" target="_blank" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="https://wa.me/33698027411" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* CARTE GOOGLE */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999877!2d2.2472!3d48.8401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b0c1f0f0f1d%3A0xabc123def!2sReflet%20D'Homme!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Reflet D’Homme. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
