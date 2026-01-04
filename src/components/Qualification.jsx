import React from "react";
import Education from "./Education";

function Qualification() {
  return (
    <section id="education-id">
      <h1 className="education-heading">Educational Details</h1>

      <div className="education-section">
        <Education
          src="/images/PEducation.png"
          title="Primary Education"
          name="Swamidoss English Medium School"
          grades="86%"
        />

        <Education
          src="/images/SEducation.png"
          title="Secondary Education"
          name="B. R. Oxford"
          grades="95%"
        />

        <Education
          src="/images/UGraduation.png"
          title="Undergraduation"
          name="KITS Guntur"
          grades="86%"
        />
      </div>
    </section>
  );
}

export default Qualification;
