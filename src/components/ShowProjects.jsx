import React from "react";

function ShowProjects(props) {
  return (
    <div className="project-card">
      <img src={props.logo} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.content}</p>
    </div>
  );
}

export default ShowProjects;
