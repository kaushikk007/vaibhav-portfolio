# CLAUDE.md — Project Instructions for Claude Code

This file is read by Claude Code at the start of every session. Follow everything here without being asked.

---

## Who I am

Vaibhav Kaushik — Cloud Architect at Wipro AWS Partner Lab, London. 5 years experience, 13 AWS certifications, AWS Community Builder (Dev Tools). This is my personal portfolio site and a learning project for React, CI/CD, Docker, and ECS.

**My role in this project:** I am NOT a developer. I review code, make decisions, and own all infrastructure. I do not hand-write frontend code. Claude Code writes the code. I own the AWS architecture, Terraform, CI/CD, and deployment.

---

## Project

Personal portfolio site + content hub. React + Vite + Tailwind, hosted on AWS.

**Repo:** GitHub (to be connected)
**Live URL:** TBD (Phase 2)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite + Tailwind CSS v3 |
| Icons | lucide-react |
| Backend / AI | Python, AWS Lambda, Bedrock |
| Infrastructure | AWS (S3, CloudFront, ECS Fargate, ECR, ALB, Route 53) |
| IaC | Terraform |
| CI/CD | GitHub Actions |
| Containers | Docker |
| Version Control | GitHub |

---

## Project Structure

```
vaibhav-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   └── sections/     # Page sections (Hero, About, Experience, etc.)
│   ├── data/
│   │   └── profile.js    # Single source of truth for all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── CLAUDE.md             # This file
├── tailwind.config.js
└── vite.config.js
```

---

## Coding Standards — Follow These Always

- **Component-based React.** No monolithic files. One component per file.
- **Tailwind for all styling.** No inline styles. No CSS modules. No styled-components.
- **Clean, production-grade code.** Not tutorial throwaway code.
- **No silent tech debt.** If you take a shortcut, say so explicitly.
- **All content lives in `src/data/profile.js`.** Never hardcode personal data inside components.
- **Python functions** (Phase 6+) must be clean, typed, and Lambda-ready from day one.
- **Environment variables** via `.env.local` (never committed). Template in `.env.example`.
- **Imports:** use absolute-style paths from `src/`. Configure `vite.config.js` alias if needed.

---

## Design System

Dark theme. Technical aesthetic. Not a designer portfolio.

| Token | Value |
|---|---|
| Background | `#0a0a0f` (`bg-bg`) |
| Surface | `#111118` (`bg-surface`) |
| Border | `#1e1e2e` (`border-border`) |
| Accent | `#f97316` (`text-accent`) |
| Muted text | `#6b7280` (`text-muted`) |
| Display font | Space Grotesk |
| Body font | DM Sans |
| Mono font | JetBrains Mono |

All tokens are defined in `tailwind.config.js`. Use them. Don't invent new colours.

---

## Phase Plan

| Phase | Scope | Status |
|---|---|---|
| 1 | React site — local development | ✅ Scaffold done |
| 2 | S3 + CloudFront deployment (Terraform) | 🔜 Next |
| 3 | GitHub Actions CI/CD | ⬜ |
| 4 | Dockerise | ⬜ |
| 5 | ECS Fargate | ⬜ |
| 6 | AI features — Bedrock integration via Python Lambda | ⬜ |

---

## Sections Built

| Section | File | Status |
|---|---|---|
| Hero | `sections/Hero.jsx` | ✅ |
| About | `sections/About.jsx` | ✅ |
| Experience | `sections/Experience.jsx` | ✅ |
| Stack | `sections/Stack.jsx` | ✅ |
| Certifications | `sections/Certifications.jsx` | ✅ |
| Content Hub | `sections/Content.jsx` | ✅ |

---

## Infrastructure Rules (Call These Out Aggressively)

- **Never hardcode AWS credentials** anywhere in the codebase.
- **S3 buckets must block all public access** — CloudFront serves via OAC, not public bucket policy.
- **CloudFront must enforce HTTPS.** HTTP → HTTPS redirect always on.
- **IAM roles follow least privilege.** No `*` actions unless explicitly justified.
- **Terraform state must be remote** (S3 backend + DynamoDB lock) — never local state in production.
- **ECR images must be scanned on push** when we reach Phase 4/5.
- If I'm about to do something that violates these — wrong service choice, insecure config, bad Git practice — stop me and explain why before proceeding.

---

## Git Practices

- Branch per feature: `feature/section-name`, `infra/phase-2-s3`, etc.
- Commit messages: imperative, specific. `Add certifications section` not `updates`.
- Never commit: `.env.local`, `node_modules/`, `dist/`, AWS credentials, `terraform.tfstate`.
- PRs before merging to `main` — even solo, keep the discipline.

---

## What I Don't Want

- No `console.log` left in production code.
- No commented-out dead code committed.
- No `any` types if we add TypeScript later.
- No unsolicited refactors of working code mid-task.
- No "great question" or validation padding. Be direct.
