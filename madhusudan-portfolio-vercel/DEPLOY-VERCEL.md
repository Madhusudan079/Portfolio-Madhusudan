# Deploy on Vercel

This is a TanStack Start (React 19 + Vite) app. The build uses Nitro, which
auto-detects Vercel and emits the Build Output API folder `.vercel/output`.

## Steps

1. Unzip the project and push it to a GitHub/GitLab repo (or use `vercel` CLI in the folder).
2. On vercel.com: **Add New → Project → Import** the repo.
3. Framework Preset: **Other** (already pinned via `vercel.json`).
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave empty (Nitro writes `.vercel/output` itself)
4. Node.js Version: **22.x** (Project Settings → General).
5. Click **Deploy**.

## Environment variables

None are required for this portfolio. If you add any later, browser-side vars
must be prefixed `VITE_` and added in Project Settings → Environment Variables.

## Local check

```bash
npm install
npm run build
npm run preview
```

## Notes

- Do not commit `node_modules`, `dist`, `.output`, or `.vercel`.
- Routes live in `src/routes/`; `src/routeTree.gen.ts` is generated — never edit it.
