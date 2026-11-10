# Matrix Masters

Coursework from the **Matrix Master MERN Program** — front-end clones, framework builds,
and the Node/Express/MongoDB project.

## Contents

| Folder | What it is |
|---|---|
| `Airbnb/` | HTML/CSS clone |
| `google/` | HTML/CSS clone |
| `linkedIn/` | HTML/CSS clone |
| `Paypal/` | HTML/CSS clone |
| `twitter/` | HTML/CSS clone |
| `bootstrap/` | Bootstrap assignment |
| `meterialize/` | Materialize CSS assignment |
| `frameworkWebsite/` | "Your first website with Framework" — the Demiroz Teknoloji site rebuilt with Bootstrap 5 |
| `allTogether/` | JavaScript assignments: bring everything together, DOM manipulation, calculator |
| `servertest/` | Node + Express + EJS + MongoDB ("The Timeline" project) |

## Running the projects

The front-end folders are static — open `index.html` in a browser, no build step.

`servertest/`:

```bash
cd servertest
npm install
npm run dev
```

Requires a MongoDB connection string in `.env` (see `.env.example`).

## Notes

- `.env` is ignored; never commit database credentials.
- `node_modules/` is ignored — run `npm install` after cloning.
