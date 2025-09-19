import React, { useState } from "react";
import { specificSkills } from "../specificSkills.js";
import SkillCard from "./SkillCard";
import "../style/skills.css"

const categories = ["Todos", ...new Set(specificSkills.map(s => s.category))];

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? specificSkills
      : specificSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Conhecimentos Específicos</h2>

      <div className="skills-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filtered.map((group, idx) => (
          <SkillCard key={idx} title={group.title} items={group.items} />
        ))}
      </div>
    </section>
  );
}
