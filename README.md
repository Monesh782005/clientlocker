# ClientLocker

A secure client file management platform built for accounting firms.

🔗 **Live Demo:** [clientlocker.vercel.app](https://clientlocker.vercel.app)

## Tech Stack

- **Frontend:** React 19 + Vite, Bootstrap 5
- **Backend:** Node.js + Express.js
- **Database:** Supabase PostgreSQL
- **Auth:** Supabase Authentication
- **Storage:** Supabase Storage

## Project Structure

```
ClientLocker/
├── client/          → React frontend (Vite)
├── server/          → Express.js backend API
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A Supabase project (free tier works)

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
cp .env.example .env       # then fill in your Supabase keys
npm install
npm run dev
```

## Environment Variables

Copy `server/.env.example` to `server/.env` and fill in your Supabase credentials. **Never commit `.env` files.**

## License

Private — Vizdale Internship Project

