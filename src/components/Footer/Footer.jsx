import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__attribution">
        Copyrights Reserved &copy;. Design and Code by{" "}
        <a
          className="footer__attribution-link"
          href="https://github.com/bhoamikhona"
        >
          Bhoami K Khona
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
