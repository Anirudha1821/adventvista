# Design review: reference sites and Figma guidance

Reviewed on 3 October 2026. This is an inspiration and implementation check for the AdventVista frontend, not a copy of the reference sites.

| Source | Useful design lesson | Applied to AdventVista |
| --- | --- | --- |
| [Corridor About](https://www.wearecorridor.com/about) | A studio story has more impact when typography, image direction and process feel intentional. | Oversized type, an editorial hero, split story sections and project case-study chapters. |
| [Secret Sauce Studios](https://secretsaucestudios.in/) | Hospitality work should let food and place imagery carry much of the emotion and credibility. | Large photographic frames, a visual content strip and work presented around the experience. |
| [ADKO](https://www.adko.in/) | Concise positioning and visible work make a creative agency easy to understand quickly. | Short hero message, prominent project cards, recent activity and a persistent discovery CTA. |
| [Figma: 2026 web design trends](https://www.figma.com/resource-library/web-design-trends/) | Bold type and motion work best when they support the story; accessibility and image efficiency still matter. | Manrope and Instrument Serif pairing, restrained quote/image transitions, image dimensions and reduced-motion support. |
| [Figma: responsive webpage guidance](https://help.figma.com/hc/en-us/articles/33257143505175-Tips-for-creating-a-responsive-webpage-in-Figma-Sites) | Sections need independent responsive rules, flexible widths and clear semantic structure. | Max-width containers, grid-to-stack behavior, semantic landmarks and mobile navigation. |

## What changed in this design pass

- The homepage now opens on a warm paper canvas with a three-line editorial statement, a tall hospitality image, a smaller food image and issue-style labels. The previous full-bleed dark photo treatment felt too familiar for a creative agency.
- Image-led page heroes now use a split composition on desktop and stack text above photography on narrow screens. This keeps headings legible while giving the images more presence.
- Work cards use uneven column widths and a staggered rhythm to create a curated portfolio feel.
- Testimonials now feature one large quote and client selector, giving real words more space than a row of identical cards.
- The typography system now uses a distinct italic serif accent for warmth and hospitality, while retaining the restrained black, white and grey UI.
- The latest pass leads the homepage with portfolio work and a free-audit offer. Rebranding remains a capability card rather than a standalone page, and pricing amounts are absent.

## Responsive and motion check

- **Wide screens:** hero copy and imagery each have clear space; project cards use an asymmetric grid; quotes sit beside the selector.
- **At 980px and below:** the hero and image-led page headers stack; navigation becomes a full-screen mobile menu; testimonials become a vertical flow.
- **At 520px and below:** hero imagery and type reduce again; project cards become one column; CTA and form fields stack.
- **Motion:** image entrance, quote change, hover zoom and the social strip are deliberately limited. `prefers-reduced-motion` disables animation, and the social strip pauses on hover or keyboard focus.

The dependency download restriction in this workspace prevented a browser-rendered screenshot review. A final visual QA pass should inspect the running site at roughly 1440px, 980px, 768px and 390px, verify external images, and check text wrapping before publication.
