# Research, information architecture and launch plan

## Existing website audit

Reviewed [adventvista.com](https://adventvista.com/) on 3 October 2026. It is effectively a single-page site with header links to Home, About, Services, Portfolio, Team and Contact. The “Get Started” link opens a Google form, while the on-page contact form asks for only a name, email, subject and message. The core story is useful: established in 2023; hospitality and F&B focus; strategy, social, content, influencer work and branding; and a Latur base. The current contact section provides `anishd@adventvista.com`, `support@adventvista.com`, `+91 9405479396` and KrishnaKunj, Near Old Renapur Naka, Latur, Maharashtra. The footer also lists `Adventvista@gmail.com`, so the primary inquiry address should be confirmed. The current testimonials are attributed to Hotel Anil, Shelke Bhojanalaya, Sanjay Quality Restaurant, Kora, City Center Latur and Carnival Resorts.

Retain and improve the agency story, service range, client list, mission, vision, FAQ themes and direct contact details. Rewrite repetitive restaurant-only copy to include cafés, hotels, resorts and food brands. Remove operational software references (POS, inventory, table management) from the marketing process unless these are actually services. Do not repeat unsupported numeric claims from the current site, including “1K successful campaigns,” “4+ years of expertise” alongside the 2023 founding date, and “+120% online orders.” Avoid claims that reels “go viral.” The revamp now prioritizes portfolio case studies and the free-audit path rather than a pricing or standalone rebranding page.

[AdventVista’s LinkedIn page](https://in.linkedin.com/company/adventvista) reinforces its 2023 founding, Latur location and hospitality marketing focus, and has recent posts about Tulsi Veg, Maharaja Benne Dosa and Carnival Resort. These underpin the homepage’s recent activity section. Any figures from social posts should be checked against approved case study material before publication.

## Reference study

- [Corridor About](https://www.wearecorridor.com/about) uses a personal studio story, a clear process and large typographic moments. Adapted: a story-led About page and editorial project narratives.
- [Secret Sauce Studios](https://secretsaucestudios.in/) leads with visual work, hospitality credibility and testimonials. Adapted: strong photography and a dedicated visual content strip.
- [ADKO](https://www.adko.in/) pairs concise agency messaging with prominent selected work and campaign navigation. Adapted: short positioning, a work-first home journey and clear project routes.
- [Figma’s Sites design discussion](https://www.figma.com/blog/introducing-figma-sites/) describes responsive layouts and restrained scroll, reveal and marquee interactions. Adapted: a single moving social strip, subtle entrance reveals and hover states with reduced-motion support.

The layout, type scale, monochrome UI and page compositions are original to this project. Hospitality imagery brings in color; the interface remains mostly black, white and grey.

The user-supplied Ananta Hotel case-study reference at `http://hubofcreators.com/anantahotel` was unavailable during the latest review. The individual case-study pages therefore use an original editorial structure: opportunity, approach, selected visuals, creative work and verified outcomes when provided. No copy or results were taken from that inaccessible page.

## Information architecture and user journey

1. **Discover:** Home leads with selected portfolio work and a visible free-audit offer.
2. **Evaluate:** Individual case studies, About, Services and How We Help explain fit, creative approach and potential scope.
3. **Decide:** FAQ answers practical questions without displaying prices.
4. **Act:** The free-audit page collects business details and Instagram through a prepared email request. Contact offers a general inquiry and a Calendly placeholder link.
5. **Explore further:** Careers and social links support talent and audience discovery.

The main navigation is Home, Our Work, Services, How We Help and About, with a persistent Free Audit CTA. Careers, FAQ and Contact appear in the mobile menu and footer. Legacy `/pricing` and `/rebranding` routes redirect to current content.

## Design system

- **Palette:** ink `#171717`, dark `#121212`, warm paper `#f5f4f0`, supporting greys for borders and secondary copy.
- **Typography:** Manrope for editorial headings and UI, DM Sans for body text, Instrument Serif italic for expressive emphasis. Large headings use tight tracking and generous section space.
- **Layout:** wide 1440px container, two-column story sections, modular project and campaign grids, spacious cards.
- **Motion:** page fade, element reveal, image zoom on hover and continuous social strip. `prefers-reduced-motion` turns these off.
- **Accessibility:** semantic landmarks, skip link, keyboard-accessible navigation and filters, labelled form fields, native validation, `aria-expanded` FAQ buttons and visible focus on interactive controls.

## Frontend feature inventory

Implemented: responsive navigation, route changes, service anchors, project category filters, project case-study templates, Sanity-managed project images and optional case-study fields, service capability cards, approximately 20 sample social items with pause on hover and horizontal browsing, testimonial section, FAQ accordion, free-audit intake email draft, Contact-only Calendly placeholder link, career application placeholders and responsive layouts.

Future integrations: approved case-study details and results; CMS-backed project creation and other collections; Instagram API or curated embeds; the owner's Calendly URL; server-backed audit/contact endpoint with spam protection and consent; the real Google Form for careers; analytics; image optimization pipeline; approved privacy/terms; metadata and social sharing per route.

## Content decisions still needed

- Confirm the official Instagram URL and any other social accounts.
- Provide approved logos, project imagery, scope, dates and results for each named client.
- Confirm whether any campaigns are currently active and supply period, platform and status data.
- Approve attributed testimonial wording and individual names or roles.
- Confirm career vacancies and provide the actual Google Form URL.
- Provide the owner's Calendly booking URL. Audit and general inquiry forms currently prepare email drafts; the visitor must send the email.
- Approve legal notices before public launch.
