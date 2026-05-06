# Justice Without Borders — Donor Portal (Proof of Concept)

A full React proof-of-concept demonstrating the future-state donor experience across three stages:
Interest, Consideration, and Retention.

---

## Setup

Prerequisites: Node.js 16+ installed.

```bash
cd jwb-portal
npm install
npm start
```

Opens at http://localhost:3000

---

## Pages

| Route        | Stage         | Gap addressed                                      |
|--------------|---------------|----------------------------------------------------|
| /            | Interest      | Impact and stories surfaced immediately above fold |
| /donate      | Consideration | Trust signals, credentials, and impact explainer at point of decision |
| /dashboard   | Retention     | Structured post-donation journey and impact updates |
| /impact      | Supporting    | Full impact page for donors who want depth          |

---

## Adding Your Logo

1. Add your logo file to `src/assets/logo.png` (or .svg)
2. Open `src/components/Navbar.js`
3. Uncomment line 10: `import logo from '../assets/logo.png';`
4. Replace the text `<div style={styles.logoText}>...</div>` block with:
   ```jsx
   <img src={logo} style={styles.logoImg} alt="Justice Without Borders" />
   ```

---

## Adding Images

All image slots are clearly labelled in the UI with a dashed border and hint text.

### Step-by-step

1. Create the folder: `src/assets/images/`
2. Drop your image files in (JPG, PNG, WebP all work)
3. Open the relevant page file and uncomment the import at the top:

```js
// In src/pages/HomePage.js — uncomment and update:
import heroImg   from '../assets/images/hero.jpg';
import story1Img from '../assets/images/story-1.jpg';
import story2Img from '../assets/images/story-2.jpg';
import story3Img from '../assets/images/story-3.jpg';
```

4. Pass the import as the `src` prop to the `<ImageSlot>` component:

```jsx
// Before (placeholder):
<ImageSlot height={520} hint="Hero image..." />

// After (real image):
<ImageSlot src={heroImg} height={520} alt="JWB legal team meeting" />
```

The placeholder disappears automatically when `src` is provided.

### Image slots by page

**HomePage.js**
- Hero image (wide, above fold) — suggest: workers in community or legal meeting
- "Why it matters" section image — documentary/contextual
- Story card 1 — Philippines / Singapore context
- Story card 2 — Indonesia / Hong Kong context
- Story card 3 — Indonesia training workshop

**DonatePage.js**
- Side image near donation form — legal team or worker being helped

**ImpactPage.js**
- Four story images, alternating left/right layout

---

## Design System

| Token | Value |
|-------|-------|
| Primary green | #145c42 (--green-700) |
| Accent green | #1d9e75 (--green-500) |
| Dark bg | #0d2b23 (--green-900) |
| Display font | Fraunces (serif, loaded from Google Fonts) |
| Body font | DM Sans |

Colors and fonts are defined in `src/index.css` as CSS variables. Edit there to update globally.

---

## File Structure

```
src/
  assets/
    images/        <- add your image files here
  components/
    Navbar.js      <- navigation + logo slot
    Footer.js      <- site footer
    ImageSlot.js   <- reusable image placeholder
  pages/
    HomePage.js    <- Stage 1: Interest
    DonatePage.js  <- Stage 2: Consideration
    DashboardPage.js <- Stage 3: Retention
    ImpactPage.js  <- Supporting impact page
  App.js           <- routing
  index.css        <- global design tokens
  index.js         <- entry point
public/
  index.html
```

---

## Notes for the client presentation

- All worker names are fictional for the prototype. Real anonymised case details should replace them.
- The donor dashboard (Stage 3) uses a hardcoded donor profile "Sarah" — this would connect to a real auth system in production.
- Donation form is front-end only — no payment processor is wired up. Stripe or PayPal integration would be the next step.
- The animated stat counters trigger when the stats bar scrolls into view.
