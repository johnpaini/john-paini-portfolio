import React, { useState, useRef } from "react";
import { specificSkills } from "../data";
import { Menu, X } from "lucide-react"; // ícones leves

export default function Skills() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const toggleSection = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
    // rola suavemente até a categoria clicada
    if (refs.current[idx]) {
      refs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // fecha o menu depois do clique
    setMenuOpen(false);
  };

  return (
    <section id="skills" className="relative bg-gray-100 py-10">
      {/* ---------- Barra Fixa com Hambúrguer ---------- */}
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
          <h2 className="text-2xl font-bold text-blue-700">Conhecimentos</h2>
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {/* Menu horizontal em telas grandes */}
          <ul className="hidden md:flex gap-6">
            {specificSkills.map((g, idx) => (
              <li key={idx}>
                <button
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => toggleSection(idx)}
                >
                  {g.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu lateral móvel */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <ul className="flex flex-col">
              {specificSkills.map((g, idx) => (
                <li key={idx} className="border-b">
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-gray-50"
                    onClick={() => toggleSection(idx)}
                  >
                    {g.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ---------- Conteúdo das Categorias ---------- */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        {specificSkills.map((group, idx) => (
          <div
            key={idx}
            ref={(el) => (refs.current[idx] = el)}
            className="mb-5 border rounded-lg bg-white shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center px-4 py-3 bg-blue-600 text-white rounded-t-lg"
            >
              <span className="font-semibold">{group.title}</span>
              <span>{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <ul className="px-6 py-4 text-gray-800 list-disc list-inside">
                {group.items.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
