import React, { useState } from "react";
import { certifications } from "../certifications";
import { Award } from "lucide-react";
// ícone para certificação
import "../style/certifications.css"

export default function Certifications() {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="certifications-section">
      <h2>Certificações</h2>
      <div className="cert-cards-container">
        {certifications.map((group) => {
          const isExpanded = expandedCategories.includes(group.category);
          return (
            <div key={group.category} className="cert-card">
              <div
                className="cert-card-header"
                onClick={() => toggleCategory(group.category)}
              >
                <Award size={24} className="cert-icon" />
                <h3>{group.category}</h3>
                <span className="toggle-arrow">
                  {isExpanded ? "▲" : "▼"}
                </span>
              </div>
              <ul className={`cert-items ${isExpanded ? "expanded" : ""}`}>
                {group.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
