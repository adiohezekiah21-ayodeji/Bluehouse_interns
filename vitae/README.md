# Vitae — Website

All four pages of the Vitae design, sharing one header, footer, and stylesheet
so the whole site stays visually consistent.

## Structure
```
vitae/
├── index.html              Home
├── nutrition.html           Nutrition
├── fitness.html              Fitness
├── mental-wellness.html      Mental Wellness
├── css/style.css             All styles (colors, type, layout — see :root tokens at the top)
├── js/script.js              Carousel + mobile nav behavior
├── images/                   Placeholder images (see below)
└── README.md
```

## Fonts
Loaded from Google Fonts in the `<head>`:
- **Playfair Display** — headings, logo, stat numbers, "feel alive" italic
- **Inter** — body text, nav, buttons

## Colors
All defined once at the top of `css/style.css` under `:root`, so you can tweak
the whole palette from one place:
- `--bg` — page background (near-black green)
- `--green` — the bright mint accent
- `--green-mid` — solid button fill
- `--orange` — the "Fitness" tag color

## Images — action needed
Every photo across all four pages is a **placeholder** — a plain gradient box
labeled with what should go there. Export the real images from Figma and drop
them into `images/`, keeping the exact file names below, and everything will
slot in automatically:

**Home:** `featured-fitness.jpg`, `featured-nutrition.jpg`,
`explore-nutrition.jpg`, `explore-fitness.jpg`, `explore-mental-wellness.jpg`

**Nutrition:** `nutrition-hero.jpg`, `recipe-mediterranean-bowl.jpg`,
`recipe-green-smoothie.jpg`, `recipe-salmon-asparagus.jpg`,
`recipe-overnight-oats.jpg`, `recipe-lentil-dahl.jpg`, `recipe-avocado-toast.jpg`

**Fitness:** `fitness-hero.jpg`, `workout-full-body-hiit.jpg`,
`workout-yoga-flow.jpg`, `workout-strength-training.jpg`,
`workout-morning-run.jpg`, `workout-core-mobility.jpg`, `workout-swim-recover.jpg`

**Mental Wellness:** `mental-wellness-hero.jpg`, `practice-morning-meditation.jpg`,
`practice-box-breathing.jpg`, `practice-sleep-ritual.jpg`,
`practice-journaling-prompt.jpg`, `practice-nature-walk.jpg`,
`practice-digital-detox.jpg`

## Notes
- Fully responsive (nav collapses to a hamburger under 760px — the toggle
  button just needs a mobile menu panel wired up once you decide how you want
  it to open, I left the JS hook ready in `initMobileNav()`).
- The Home page featured section is a working carousel (dots + arrows +
  autoplay, pauses on hover).
- One small heads-up on the Mental Wellness hero: in your screenshot there's a
  button-shaped shape with no visible text (likely the label color matched
  the background in Figma). I added a "Begin Practice" button there using the
  same style as the site's other primary buttons — swap the label if that
  wasn't the intent.
- All accent colors (purple, blue, yellow, pink, teal, in addition to the
  green/orange from before) are defined once at the top of `style.css` under
  `:root`, so the whole palette is easy to retune from one place.
