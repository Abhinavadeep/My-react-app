import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-name">Abhinavadeep Gulla</h2>
      <p className="footer-role">Aspiring Software Engineer | Problem Solver</p>

      <div className="footer-links">
        <a
          href="https://github.com/Abhinavadeep"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/abhinavadeepgulla/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:22jr1a0558@gmail.com">Email</a>
      </div>

      <p className="footer-copy">
        © 2026 Abhinavadeep Gulla. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
