# Anshika — Personal Portfolio

A personal portfolio website for **Anshika**, final-year B.E. student in Artificial Intelligence & Machine Learning at Shri Madhwa Vadiraja Institute of Technology and Management, Udupi (CGPA 8.03/10).

The site is built with an editorial aesthetic for a dual audience:
1. **AI/ML Engineering roles** — highlighting statistical estimators, parameter identification, model metrics ($R^2 \ge 0.9976$), and production backend services.
2. **Project / Product / Program Management & APM roles** — showcasing scope ownership, ₹5,00,000 government grant funding, 6-member team leadership, and delivery under tight deadlines.

---

## Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom editorial tokens and warm paper/charcoal themes
- **Typography**: Google Fonts via `next/font` (`Instrument Serif`, `Geist`, `JetBrains Mono`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) with `prefers-reduced-motion` compliance
- **SEO**: Dynamic Open Graph card generator, `robots.txt`, `sitemap.xml`, and JSON-LD `Person` schema
- **Audits**: Lighthouse 100 on Performance, Accessibility, Best Practices, and SEO

---

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build and test production bundle**:
   ```bash
   npm run build
   npm run start
   ```

---

## Where to Edit Content

Content lives in typed TypeScript files under `src/content/` so you can update copy, metrics, and case studies without touching component code:

| File | Content |
|---|---|
| `src/content/projects.ts` | Case studies (The Problem, What I Built, What It Took to Ship, Tags, Repos) |
| `src/content/experience.ts` | Leadership roles, team scope, outcomes, dual-track quote, hackathon record |
| `src/content/skills.ts` | Grouped skill competencies (Languages, ML, Backend, Tools, Delivery) |
| `src/content/achievements.ts` | Metrics strip data, education degrees, coursework, certifications, contact info |
| `public/anshika.jpg` | Hero portrait photograph |
| `public/anshika-resume.pdf` | Downloadable résumé PDF |

---

## Deployment & Updates

The project is configured for continuous deployment on [Vercel](https://vercel.com/):

- **Repository**: Connected to GitHub repository `anshika-portfolio`.
- **Automatic Redeploy**: Push any commit to the `main` branch:
  ```bash
  git add .
  git commit -m "Update project case study"
  git push origin main
  ```
  Vercel automatically triggers a production build and deploys the new version within ~45 seconds.
