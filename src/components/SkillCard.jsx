import React from "react";
import "../style/skills.css"

export default function SkillCard({ title, items }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <ul>
        {items.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
