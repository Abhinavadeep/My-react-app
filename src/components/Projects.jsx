import React from "react";
import ShowProjects from "./Showprojects";

function Projects() {
  return (
    <section id="projects-section">
      <h1 id="projects-header">Projects I’ve Built</h1>

      <div className="projects-grid">
        <ShowProjects
          logo="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSD5AoNTBT0eHUGzts-13yGaSiZHLtl6R4OYbwPn6fhi9-KEhc7"
          name="DineIn"
          content="A mobile application that allows users to book restaurant tables seamlessly."
        />

        <ShowProjects
          logo="images/AgriWaste.png"
          name="Agri-Waste"
          content="A web-based platform connecting farmers with industries for waste management."
        />

        <ShowProjects
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF93ss4kotsbmoRa7rZX5VH0XuuIZs2-DufQ&s"
          name="Travel Tracker"
          content="A dynamic web platform to track and visualize the places you have visited."
        />
      </div>
    </section>
  );
}

export default Projects;
