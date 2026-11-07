# ClientLocker — Project Plan

## Project Overview

**ClientLocker** is a secure client file management platform designed for accounting firms. It enables accountants to securely upload, organize, and share sensitive client documents — including tax returns, financial statements, and compliance records — through an intuitive web portal with enterprise-grade security.

**Live URL:** https://clientlocker.vercel.app
**Repository:** https://github.com/Monesh782005/clientlocker

---

## Technology Stack

| Layer        | Technology                  | Purpose                                  |
|--------------|-----------------------------|------------------------------------------|
| Frontend     | React 19 + Vite             | Fast, component-based UI                 |
| Styling      | Bootstrap 5                 | Responsive, professional design          |
| Backend      | Node.js + Express.js        | REST API server                          |
| Database     | Supabase PostgreSQL         | Client and file metadata storage         |
| Auth         | Supabase Authentication     | Secure login, role-based access          |
| Storage      | Supabase Storage            | Encrypted client file storage            |
| CI/CD        | GitHub Actions              | Automated build and secret scanning      |
| Hosting      | Vercel                      | Frontend deployment with auto-redeploy   |

---

## Core Features (Planned)

1. **Secure Authentication** — Email/password login with Supabase Auth and role-based access (Admin, Accountant, Client).
2. **Client Management** — Add, view, edit, and organize client profiles with contact info and notes.
3. **File Upload & Storage** — Drag-and-drop file upload with Supabase Storage; organized by client and category.
4. **File Sharing** — Generate secure, time-limited download links for clients.
5. **Dashboard** — Overview of recent uploads, client activity, and storage usage.
6. **Audit Trail** — Log who uploaded, downloaded, or deleted files and when.

---

## Project Milestones

| Milestone | Target Date | Deliverables                                             | Status      |
|-----------|-------------|----------------------------------------------------------|-------------|
| M1        | Nov 7       | Project setup, GitHub repo, CI/CD, Vercel deploy, plan   | ✅ Complete |
| M2        | Nov 21      | Landing page, login/signup UI, Supabase Auth integration | 🔲 Planned  |
| M3        | Dec 5       | Client CRUD, dashboard, database schema                  | 🔲 Planned  |
| M4        | Dec 19      | File upload/download, storage integration                | 🔲 Planned  |
| M5        | Jan 2       | Sharing, audit trail, polish, final presentation         | 🔲 Planned  |

---

## Architecture

```
┌──────────────┐         ┌──────────────┐         ┌──────────────────┐
│   React +    │  HTTP   │  Express.js  │  SDK    │    Supabase      │
│   Vite       │◄──────► │  REST API    │◄──────► │  (Auth, DB,      │
│  (Vercel)    │         │  (Node.js)   │         │   Storage)       │
└──────────────┘         └──────────────┘         └──────────────────┘
     Client                  Server                   Cloud Services
```

---

## Security Measures

- Environment variables stored in `.env` files (never committed to Git)
- Gitleaks GitHub Action scans every push for accidentally leaked secrets
- Supabase Row Level Security (RLS) for database access control
- HTTPS enforced via Vercel
- CORS configured on the Express server

---

## Team

| Role                  | Name    |
|-----------------------|---------|
| Full-Stack Developer  | Monesh  |

---

*Vizdale Full-Stack Developer Internship — November 2026*

