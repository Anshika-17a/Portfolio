export interface MetricItem {
  id: string;
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string;
}

export const metrics: MetricItem[] = [
  {
    id: "team-led",
    value: "6",
    numericTarget: 6,
    label: "TEAM MEMBERS LED",
    description: "Multidisciplinary engineers coordinated across hardware, firmware, and software",
  },
  {
    id: "funding",
    value: "₹5L",
    prefix: "₹",
    suffix: "L",
    numericTarget: 5,
    label: "PROJECT FUNDING SECURED",
    description: "Non-dilutive grant under Karnataka New Age Incubation Network (NAIN 2.0)",
  },
  {
    id: "accuracy",
    value: "R² 0.9976",
    prefix: "R² ",
    numericTarget: 0.9976,
    label: "MODEL ACCURACY ACHIEVED",
    description: "Nonlinear CSTR estimation across 3 independent excitation benchmarks",
  },
  {
    id: "hackathons",
    value: "3",
    numericTarget: 3,
    label: "HACKATHONS WON OR PLACED",
    description: "Including Google Build with Gemma (Kaggle) & Reality Rewritten",
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "B.E. in Artificial Intelligence & Machine Learning",
    institution: "Shri Madhwa Vadiraja Institute of Technology and Management, Udupi",
    period: "2023 – 2027",
    grade: "CGPA 8.03 / 10",
    details:
      "Relevant Coursework: Machine Learning, Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Architecture.",
  },
  {
    degree: "ISC (12th Grade) & ICSE (10th Grade)",
    institution: "City Montessori School, Mahanagar, Lucknow",
    period: "Completed",
    details: "Mathematics, Physics, Chemistry, and Computer Science foundation.",
  },
];

export const certificationsList: CertificationItem[] = [
  {
    name: "Stay Ahead of the AI Curve",
    issuer: "Google & Coursera",
  },
  {
    name: "Smart Tech with IoT",
    issuer: "SMVITM",
  },
];

export const profile = {
  name: "Anshika",
  roleLine: "AI/ML ENGINEER · PROJECT LEAD · UDUPI, INDIA",
  bio: "Final-year AI & ML engineering student who builds machine learning systems end to end — training and evaluating models, then shipping them as production-style FastAPI/Flask services with auth and a working frontend. Currently running a six-person, ₹5,00,000 government-funded hardware project and co-authoring a journal paper on nonlinear state estimation.",
  email: "anshikasuruchi@gmail.com",
  githubUrl: "https://github.com/Anshika-17a",
  linkedinUrl: "https://linkedin.com/in/anshika-suruchi",
  resumePath: "/anshika-resume.pdf",
};
