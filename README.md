<div align="center">

# Rishi Raj — Portfolio

**Intelligence with intent.**

A fast, responsive personal portfolio built with React and Vite — showcasing projects in AI/ML, systems programming, and full-stack development.

[Live Site](#) · [Report an Issue](../../issues)

</div>

---

## Overview

This is my personal developer portfolio, built to showcase projects, skills, and background as an AI/ML engineer and software development engineer fresher. It's a fully static single-page app — no backend required — deployed on Vercel.

## Features

- 🎨 **Custom design system** — EB Garamond, Inter, and JetBrains Mono typography with a warm, editorial aesthetic
- 📱 **Fully responsive** — from mobile to widescreen
- ⚡ **Fast** — static build, no server round-trips, optimized Vite bundle
- 🎬 **Smooth animations** — Framer Motion transitions and scroll reveals throughout
- 🗂️ **Case-study project pages** — each project has its own detail page (problem → approach → outcome), not just a card
- 🔍 **Filterable project grid** — filter by category (Academic / Personal)
- 📄 **Resume download** — one click, no sign-up walls
- ✉️ **Contact section** — direct email, GitHub, and LinkedIn links
- 🔎 **SEO-ready** — meta tags and Open Graph data included

## Tech Stack

| Layer       | Tech                |
|-------------|---------------------|
| Framework   | React 18 + Vite     |
| Styling     | Tailwind CSS        |
| Animation   | Framer Motion       |
| Routing     | React Router        |
| Icons       | Lucide React        |
| Deployment  | Vercel              |

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

\`\`\`bash
git clone https://github.com/Rishi061205/portfolio.git
cd portfolio
npm install
\`\`\`

### Local Development

\`\`\`bash
npm run dev
\`\`\`

Runs at `http://localhost:5173` with hot module reloading.

### Production Build

\`\`\`bash
npm run build
npm run preview   # preview the production build locally
\`\`\`

## Project Structure

\`\`\`
portfolio/
├── public/
│   ├── images/           # project thumbnails
│   └── resume/           # downloadable resume PDF
├── src/
│   ├── components/
│   │   └── portfolio/    # Navbar, Hero, About, Projects, Skills, Contact, Footer
│   ├── data/
│   │   └── projects.js   # project content — edit here to add/update projects
│   ├── hooks/
│   │   └── useTypewriter.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── PageNotFound.jsx
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
\`\`\`

## Adding a Project

All project content lives in `src/data/projects.js` — no other file needs to change. Add a new object to the `projects` array:

\`\`\`js
{
  id: "your-project-slug",       // becomes /project/your-project-slug
  title: "Project Name",
  tagline: "One-line description.",
  category: "Personal",           // "Academic" or "Personal"
  thumbnail: "/images/your-image.png",
  tech_stack: ["React", "Node.js"],
  github_url: "https://github.com/...",
  live_url: "",
  featured: true,
  order: 4,
  problem: "What problem does this solve?",
  approach: "How did you build it?",
  outcome: "What was the result?",
}
\`\`\`

## Deployment

This project deploys as a static site — works out of the box on [Vercel](https://vercel.com), Netlify, or GitHub Pages.

**Vercel:**
1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Framework preset auto-detects as Vite — no config needed
4. Deploy

## Contact

**Rishi Raj**
📧 [raj724809@gmail.com](mailto:raj724809@gmail.com)
🔗 [GitHub](https://github.com/Rishi061205) · [LinkedIn](https://www.linkedin.com/in/rishiraj--/)

---

<div align="center">
<sub>Built with React, Vite, and a lot of coffee.</sub>
</div>
