import React from "react";

function ShowSkills(props) {
  return (
    <div className="skill-card">
      <span className="skill-percent">{props.proficiency}</span>
      <img src={props.logo} alt={props.area} />
      <p>{props.area}</p>
    </div>
  );
}

export default ShowSkills;
