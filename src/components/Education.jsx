import React from "react";

function Education(props) {
  return (
    <div className="education-card">
      <div className="education-icon">
        <img src={props.src} alt={props.title} />
      </div>

      <h3>{props.title}</h3>
      <p className="education-name">{props.name}</p>
      <p className="education-grade">{props.grades}</p>
    </div>
  );
}

export default Education;
