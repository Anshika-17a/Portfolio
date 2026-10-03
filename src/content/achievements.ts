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
    id: "funding",
    value: "₹5L",
    prefix: "₹",
    suffix: "L",
    numericTarget: 5,
    label: "PROJECT FUNDING SECURED",
    description: "Non-dilutive grant under Karnataka New Age Incubation Network (NAIN 2.0)",
  },
  {
    id: "hackathons",
    value: "2",
    numericTarget: 2,
    label: "HACKATHONS WON",
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
  bio: "Final-year AI & ML engineering student. I build models and then ship them as working products.",
  email: "anshikasuruchi@gmail.com",
  githubUrl: "https://github.com/Anshika-17a",
  linkedinUrl: "https://linkedin.com/in/anshika-suruchi",
  resumePath: "/anshika-resume.pdf",
};
