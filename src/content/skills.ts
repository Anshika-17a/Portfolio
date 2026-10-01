export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    category: "ML & Estimation",
    skills: [
      "scikit-learn",
      "TensorFlow",
      "NLP",
      "Kalman filtering",
      "feature engineering",
      "model evaluation",
    ],
  },
  {
    category: "Backend & Product",
    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT auth",
      "SQLAlchemy",
      "React",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Google Gemini API",
      "Hugging Face Datasets",
      "Docker",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "Power BI",
      "Tableau",
    ],
  },
  {
    category: "Delivery",
    skills: [
      "requirements specification",
      "sprint planning",
      "team onboarding",
      "stakeholder reporting",
    ],
  },
];
