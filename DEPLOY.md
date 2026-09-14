# Deploying this site

The site auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

## How it works

1. Push (or merge) to `main`.
2. `.github/workflows/deploy.yml` runs:
   - checks out the repo
   - `npm ci`
   - `npm run build` (Vite outputs to `dist/`)
   - uploads `dist/` as a Pages artifact
   - deploys that artifact to GitHub Pages
3. The live site updates at **https://www.marcus-lam.com/** a minute or two later.

No manual build/deploy step is needed — just push to `main`.

## One-time repo setup (already done, documented for reference)

- **Settings → Pages → Build and deployment → Source** must be set to **"GitHub Actions"** (not "Deploy from a branch").
- **Settings → Pages → Custom domain** is set to `www.marcus-lam.com`, with "Enforce HTTPS" checked.
- DNS for `marcus-lam.com` / `www.marcus-lam.com` points at GitHub Pages (A/AAAA records on the apex, CNAME on `www`, per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

## The CNAME file

`public/CNAME` contains the custom domain (`www.marcus-lam.com`). Vite copies everything in `public/` into `dist/` verbatim, so this file ends up at the root of the deployed artifact.

**This matters:** GitHub Pages re-derives the custom domain from the `CNAME` file in the deployed artifact on every Actions-based deploy. If that file is missing from `dist/`, GitHub Pages can silently clear the custom domain setting on the next deploy. The CNAME file used to live only at the repo root (outside `public/`), where Vite never picks it up — that's now fixed by keeping it in `public/CNAME`.

If the custom domain ever needs to change, edit `public/CNAME` (and update the Pages setting / DNS to match) — don't just change it in the GitHub Settings UI, or the next deploy will silently revert it.

## Local development / previewing a build

```bash
npm ci
npm run dev       # dev server with HMR
npm run build     # production build into dist/
npm run preview   # serve the dist/ build locally
```

## Troubleshooting

- **Deploy didn't trigger:** check the Actions tab — the workflow only runs on push to `main`.
- **Site shows old content:** GitHub Pages / browser caching; hard-refresh, or check the Actions run actually succeeded.
- **Custom domain reverted to `<user>.github.io`:** almost always means a deploy shipped without `public/CNAME` present. Confirm the file exists and re-deploy.
