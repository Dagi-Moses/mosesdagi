import { useState } from "react";
import { cn } from "../lib/utils";

export const skills = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Flutter", level: 90, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 90, category: "backend" },
  { name: "Firebase", level: 90, category: "backend" },
  { name: "Supabase", level: 85, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "NestJS", level: 65, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },

  // DevOps / Tools
  { name: "Git", level: 95, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "CI/CD", level: 70, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-2xl font-bold text-center mb-12">
          My <span className="text-primary "> Skills</span>
        </h2>

        <div className=" flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground "
                  : "bg-secondary/70 text-foreground hover:bg-primary/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skill.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level} %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
