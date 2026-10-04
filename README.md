# AdventVista website revamp

A React and Vite frontend for AdventVista, a creative marketing agency serving restaurants, cafés, hotels, resorts and food brands. The hotel/project and service photo galleries can be managed in a separate Sanity Studio. Live social posts, scheduling and server-backed forms can be connected later.

## Run locally

```bash
npm install
npm run dev
```

Build with `npm run build` and review the output with `npm run preview`.

For Vercel and the hosted Sanity Studio, follow [the deployment guide](docs/DEPLOYMENT.md). The website needs two Vercel build variables and its deployed origin added to Sanity CORS before published galleries can load in the browser.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Portfolio-led introduction, selected case studies, free-audit offer, services and clients |
| `/about` | Story, mission, vision, creative philosophy and client reviews |
| `/services` | Nine service descriptions with deliverables, ideal customer and impact |
| `/work`, `/work/:id` | Filterable portfolio and individual case-study pages with continuously scrolling project galleries |
| `/capabilities` | Service cards for digital marketing, rebranding and other capabilities, without prices |
| `/audit` | Free-audit explanation and business/Instagram intake that prepares an email request |
| `/careers` | Culture and role links that open a placeholder Google URL until the application form is supplied |
| `/faq` | Accessible accordion for common questions |
| `/contact` | General project inquiry, direct contact details, free-audit link and Calendly placeholder link |
| `/privacy`, `/terms` | Interim notices pending approved legal copy |

## Structure

- `src/data/site.js` supplies copy and temporary images. Published Sanity galleries replace images for the matching project or service; unpublished entries continue to use the local content.
- `src/data/sanity.js` fetches public Sanity galleries and maps them to the existing project and service IDs.
- `src/content.jsx` makes the merged content available to every page.
- `studio/` is a separate Sanity Studio with one gallery editor for each current project and service.
- `src/components.jsx` contains reusable navigation, looping photo carousels, cards, gallery, accordion, CTA and form components.
- `src/pages.jsx` composes the routes.
- `src/main.jsx` handles lightweight client-side routing, page titles and reveal effects.
- `src/styles.css` defines the monochrome design system and responsive layouts.
- The header theme icon follows the system preference initially and remembers a visitor's light or dark choice.

## Content and integration status

The current site supplies agency background, client names, quotes and contact details. Its selected website photos can be published into Sanity as the current gallery selection, then changed by the owner later. Studio also supports optional case-study headlines, briefs, approach, creative work and verified results for each project. The 20-tile social strip and campaign concepts are illustrative. Project and campaign card photos loop automatically, can be swiped or advanced with controls, and pause on hover or focus. Clicking a project photo opens its case-study page, where a second gallery scrolls continuously and loops. Published service photos appear as a gallery within that service's section. Instagram buttons currently open `https://www.instagram.com/` as requested; replace them with approved profile or post URLs when available. The general inquiry and free-audit forms open populated email drafts; requests reach AdventVista only after visitors send those emails. The audit promises a PDF by email within one week of receipt, but producing and emailing that PDF is currently a manual workflow. The booking button on Contact opens `https://calendly.com/` until the owner's personal link is supplied. Careers role links open `https://www.google.com/` until a real Google Form URL is supplied. No prices are shown, careers does not claim open vacancies, and no campaign is marked active without confirmation.

## Connect Sanity for owner-managed images

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage) with a **public** dataset named `production`. Copy its project ID.
2. Install Studio dependencies from the repository root: `npm --prefix studio install`. Sanity Studio needs Node.js 22.12 or newer.
3. Copy `.env.example` to `.env.local`, and `studio/.env.example` to `studio/.env.local`. Replace `your-project-id` in both files with the real project ID. Keep the dataset names the same.
4. In Sanity project settings, add the deployed website origin under **API → CORS Origins** with credentials disabled. Local development uses a Vite proxy for public reads, so `localhost:5173` does not need a separate CORS entry. Add the local Studio origin (`http://localhost:3333`) if needed for Studio sign-in, with credentials allowed for that Studio origin. Public gallery reads need no API token. Never put a write token in a `VITE_` variable.
5. Run `npm run studio:dev` for the editing dashboard and `npm run dev` for the website. In Studio, open **Hotels & food brands** or **Services**, choose an item, upload images, provide an image description, drag to reorder, and click **Publish**. The first image is the cover; all images appear in the carousel. Refresh the website to see the published gallery. After changing `vite.config.js`, restart `npm run dev` once.
6. For owner access from another device, sign in to Sanity CLI and run `npm run studio:deploy` to host the Studio. Set `SANITY_STUDIO_HOSTNAME` in `studio/.env.local` if you want a chosen Studio subdomain. When deploying the website, set `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` in its build environment too.

To load the images already selected on the website into every current gallery, run `npm run studio:seed` in a normal terminal after signing in with `cd studio; npx sanity login; cd ..` if the CLI requests it. This prepares and imports 45 images across six project galleries and nine service galleries. The import uses `--missing`, so it creates only galleries that are not already in Sanity and keeps any images the owner has already published. The image selection is marked as current content in Studio; it can be reordered or replaced at any time. These are the website's existing stock image choices, not documented client shoot assets.

If you imported galleries with the earlier dotted document IDs, run `npm run studio:migrate` once from the repository root while signed in to Sanity. The migration copies each existing gallery, including owner-added images, to a public-readable ID without replacing existing galleries or deleting the originals. Restart the Studio after migrating, then refresh the website. The script verifies that an unauthenticated website query can read all 15 galleries.

The Studio currently contains the six projects and nine services already on the website. If a new project or service is added later, add its ID to `src/data/site.js` and `studio/content-targets.js`. Sanity manages images and optional project case-study fields in this phase; other page copy stays in `src/data/site.js`. If Sanity is unavailable, the site keeps its local project photos and omits service galleries that have not been published.

Before public launch, confirm image permissions and exact client/project descriptions, confirm testimonial permissions, add the official Instagram account, approve legal copy, and connect the discovery form and scheduler. See [docs/RESEARCH_AND_PLAN.md](docs/RESEARCH_AND_PLAN.md) for the audit and next steps, and [docs/DESIGN_REVIEW.md](docs/DESIGN_REVIEW.md) for the reference and Figma design check.
