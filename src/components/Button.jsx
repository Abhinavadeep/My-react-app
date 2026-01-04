import React from "react";

function Button({ src, content, onClick }) {
  function renderDetails() {
    if (content == "Portfolio") {
      document
        .getElementById("education-id")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <button className="info-btn" onClick={renderDetails}>
      <img src={src} alt={content} className="info-icon" />
      <span className="info-text">{content}</span>
    </button>
  );
}

export default Button;
