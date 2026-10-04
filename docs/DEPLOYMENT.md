# Deploy AdventVista

The public website is a Vite app hosted on Vercel. The editing dashboard is a separate Sanity Studio hosted by Sanity. Both use the existing Sanity project `xxvew3x3` and its `production` dataset. Images and gallery edits live in Sanity, not in this Git repository or Vercel's build output.

## 1. Deploy the website on Vercel

1. Commit and push this repository to GitHub, GitLab, or Bitbucket. Import that repository as a new Vercel project.
2. Set **Root Directory** to the repository root (`./`), **Framework Preset** to **Vite**, **Build Command** to `npm run build`, and **Output Directory** to `dist`. The included `vercel.json` also sets the framework and output directory, and routes direct page visits to the React app.
3. In Vercel **Project Settings → Environment Variables**, add these for **Production** (and **Preview** if you want Sanity images on preview deployments):

   | Name | Value |
   | --- | --- |
   | `VITE_SANITY_PROJECT_ID` | `xxvew3x3` |
   | `VITE_SANITY_DATASET` | `production` |

   These are public identifiers embedded in the browser bundle. Do not put a Sanity API/write token in a `VITE_` variable. Redeploy after adding or changing the variables; Vite reads them during the build.
4. Deploy. Once it has a URL, do the Sanity CORS step below. Add your custom domain in Vercel when ready.

## 2. Let the deployed website read Sanity

In [Sanity Manage](https://www.sanity.io/manage), open project `xxvew3x3` → **Settings → API settings → CORS Origins**. Add the exact origin of the deployed website, such as `https://your-project.vercel.app`, with **Allow credentials off**. Add each custom-domain origin you actually use, for example `https://adventvista.com` and `https://www.adventvista.com`. An origin includes the protocol and hostname, with no trailing slash or page path.

The website reads only published documents from the public `production` dataset and does not send Sanity credentials. For Vercel preview URLs, add the exact preview origin you are testing, or a wildcard scoped to your own Vercel account/team suffix; keep credentials off. Do not use a platform-wide `https://*.vercel.app` wildcard.

After CORS is saved, open a project page such as `/work/tuljai-idli`, confirm the Sanity photos appear, then refresh that exact URL. The refresh checks Vercel's page rewrite. To verify a new upload, publish it in Studio and refresh the website; no Vercel redeploy is needed for gallery content edits.

## 3. Deploy the owner editing dashboard

On your own computer, keep `studio/.env.local` with:

```env
SANITY_STUDIO_PROJECT_ID=xxvew3x3
SANITY_STUDIO_DATASET=production
```

From the repository root, using Node.js 22.12 or newer:

```powershell
npm --prefix studio install
cd studio
npx sanity login
cd ..
npm run studio:deploy
```

Choose an available Studio hostname when prompted. It will be hosted at `https://<hostname>.sanity.studio`, and the owner signs in there to upload, reorder, and publish hotel/service images. This Studio is independent of the Vercel website deployment; Git pushes do not automatically deploy Studio changes. Rerun `npm run studio:deploy` after changing its schema or editor UI. The existing 15 published galleries do not need to be seeded or migrated again for website deployment.

## Launch checks and current limits

- Open the home page, `/work`, `/work/tuljai-idli`, `/services`, `/audit`, and `/contact` directly in a fresh tab. Check mobile layout and a published Sanity gallery.
- The contact and free-audit forms currently prepare an email draft; a visitor must send it from their email app. There is no server-side lead capture, automated PDF, or email delivery yet.
- The Instagram, careers form, and Calendly links are placeholders. Replace them with approved URLs before promoting the site publicly. Legal copy and client image/testimonial permissions also need final review.
