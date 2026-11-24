# Biomedical Debate Prep

Study app for HOSA Biomedical Debate 2026-27. Resolution: *"Limited healthcare resources should be allocated to patients with the greatest likelihood of long-term survival."*

A toggle in the navbar switches between the two official books, and every page (study guide, flashcards, practice, tests, debate prep, progress) follows the selected book:

- 🌱 **Breaking the Age Code** (Becca Levy)
- ⚖️ **The Ethics of Health Care Rationing** (Bognar & Hirose)

## Stack

React 19, Vite 7, Tailwind v4, React Router v7, and Okta OIDC (`@okta/okta-auth-js` / `@okta/okta-react`) with Authorization Code + PKCE. This is the same auth setup as Scioly27.

## Setup

1. Edit `.env` and set `VITE_OKTA_CLIENT_ID` (and `VITE_OKTA_ISSUER` if it changes).
2. In the Okta admin console, add `http://localhost:5173/login/callback` to the app's **Sign-in redirect URIs**, and `http://localhost:5173` to the **Sign-out redirect URIs**. Add your production origin the same way.
3. Run:

```bash
npm install
npm run dev
```

`OKTA_CLIENT_SECRET` is in `.env` for reference only. A browser SPA using PKCE doesn't send a secret, and the variable has no `VITE_` prefix, so it is never bundled into the client.

## Content

- `src/data/questions.json` holds the 200 questions from the four practice sets in `test1/` (Set 1/1B Levy, Set 2/2B Bognar & Hirose), with answers, chapters and page numbers. It was parsed from the MCQ and answer-key PDFs.
- `src/data/books.js` holds the chapter summaries, key points, terms, and affirmative/negative arguments for each book.

Progress is saved in localStorage for each Okta user (`sub`).

## Deploy

`render.yaml` deploys a static site on Render. Set `VITE_OKTA_ISSUER` and `VITE_OKTA_CLIENT_ID` as environment variables there, because they are baked in at build time.
