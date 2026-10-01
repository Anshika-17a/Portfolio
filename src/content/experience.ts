export interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  period: string;
  scope: string;
  outcome: string;
  tags?: string[];
}

export interface HackathonAchievement {
  title: string;
  event: string;
  organizer: string;
  year: string;
  result: "Winner" | "2nd Place" | "Finalist";
  detail: string;
}

export const dualTrackQuote =
  "I like the part of the work where a model has to become something a team can actually ship.";

export const leadershipRoles: LeadershipRole[] = [
  {
    id: "rfid-lead",
    title: "Team Lead",
    organization: "RFID-Based Surgical Sponge Tracking System",
    period: "2025 – Present",
    scope: "6-member multidisciplinary engineering team · ₹5,00,000 grant under Karnataka NAIN 2.0",
    outcome:
      "Secured ₹5,00,000 in non-dilutive government grant funding. Authored engineering PRD, managed sprint planning and subsystem interfaces, onboarded 5 engineering peers across embedded hardware and firmware, and steered the project toward clinical bench testing.",
    tags: ["Grant Funding", "PRD Ownership", "Sprint Planning", "Team Leadership"],
  },
  {
    id: "acm-vp",
    title: "Vice President",
    organization: "ACM Student Chapter, SMVITM",
    period: "2024 – 2025",
    scope: "Technical chapter leadership · Student engineering development",
    outcome:
      "Directed chapter curriculum and technical strategy, structured peer-led machine learning workshops, organized practical coding bootcamps, and mentored junior students on systems engineering practices.",
    tags: ["Technical Mentorship", "Chapter Operations", "Workshop Leadership"],
  },
  {
    id: "hackotsava-core",
    title: "Core Organizing Team",
    organization: "HACKOTSAVA — State-Level 24-Hour Hackathon",
    period: "2025",
    scope: "200+ participants · 25+ collegiate engineering institutes",
    outcome:
      "Co-managed end-to-end logistics, problem statement formulation, sponsorship relations, and 24-hour live track execution for 200+ student developers across 25+ universities.",
    tags: ["Event Delivery", "Stakeholder Coordination", "Operations"],
  },
];

export const hackathonAchievements: HackathonAchievement[] = [
  {
    title: "Winner",
    event: "Google Build with Gemma Hackathon",
    organizer: "Organised by Kaggle at MS Ramaiah College, Bengaluru",
    year: "2026",
    result: "Winner",
    detail: "Built and deployed an applied generative AI solution using Google Gemma, judged on technical architecture, inference efficiency, and real-world utility under a 24-hour sprint.",
  },
  {
    title: "Winner",
    event: "Reality Rewritten National-Level Hackathon",
    organizer: "Nitte (Deemed to be University)",
    year: "2025",
    result: "Winner",
    detail: "Developed an applied AI product addressing frontline verification challenges, delivering working full-stack implementation and a production prototype to the jury.",
  },
  {
    title: "2nd Place",
    event: "Hack.Algo National Blockchain Hackathon",
    organizer: "Reva Rift × GDG on Campus",
    year: "2026",
    result: "2nd Place",
    detail: "Architected decentralized smart contracts and validation pipelines under competitive deadline pressure.",
  },
  {
    title: "Finalist",
    event: "IEEE EU-Reka 2024 National-Level Tech Summit",
    organizer: "IEEE",
    year: "2024",
    result: "Finalist",
    detail: "Selected as national finalist for technical innovation and rigorous system specification among entries nationwide.",
  },
];
