# Visual Structure & Layout

## Page Layout Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      HEADER SECTION                          │
│  [Diamond Logo] Diamond Pressure Washing          [Phone]    │
│                                      Richmond, VA [Email]    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       HERO SECTION                           │
│                                                              │
│  Left: Title + Benefits List        Right: Animation         │
│  "Pressure Washing Done Right"       [Pressure Washer]      │
│  • Professional driveways           [Spray Effects]         │
│  • Patios & decks                   [Diamond Accents]       │
│  • House siding                                             │
│  • Windows                          [Animated Background]    │
│  [Get Free Quote Button]                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    PRINCIPLES SECTION                        │
│                                                              │
│  [Card 1]              [Card 2]              [Card 3]       │
│  ┌──────────┐         ┌──────────┐         ┌──────────┐    │
│  │ ❤️       │         │ ⏰       │         │ 🏆       │    │
│  │Customer- │         │Reliable &│         │ Quality  │    │
│  │First     │         │On-Time   │         │ Results  │    │
│  │Attitude  │         │          │         │          │    │
│  └──────────┘         └──────────┘         └──────────┘    │
│                                                              │
│  Description text below...                                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       CTA SECTION                            │
│                   Blue Background                            │
│                  [Floating Diamonds]                         │
│                                                              │
│      Ready to Get Your Place Looking Sharp?                │
│                                                              │
│      [Call Now: 804-426-5663]  [Email Us → ]              │
│                                                              │
│      ✓ Free Estimates  ✓ Professional Service              │
│      ✓ Fully Insured   ✓ Satisfaction Guaranteed            │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER SECTION                          │
│                  Dark Background                             │
│                                                              │
│  Brand Info       Services             Contact              │
│  [Diamond Logo]   • Driveways          📞 804-426-5663     │
│  Diamond Pressure • Patios & Decks      📧 Email Us        │
│  Washing RVA      • House Siding        📍 Richmond, VA    │
│  RVA Premium      • Window Cleaning                         │
│  Cleaning         • Commercial           Privacy Policy     │
│                                         Terms of Service    │
│  © 2026 Diamond Pressure Washing. All rights reserved.     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy Tree

```
App
│
├── Header
│   ├── Diamond (logo)
│   └── Navigation/Contact Info
│
├── Hero
│   ├── Left Content
│   │   ├── Title
│   │   ├── Benefits List
│   │   └── CTA Button
│   │
│   ├── Right Animation
│   │   ├── PressureWasherAnimation
│   │   ├── Diamond (decorative)
│   │   └── Diamond (decorative)
│   │
│   └── Background
│       └── Multiple animated Diamonds
│
├── Principles
│   ├── Background Diamonds
│   │
│   └── 3 Cards (each)
│       ├── Icon (lucide-react)
│       ├── Title
│       ├── Description
│       └── Diamond (hover effect)
│
├── CTA
│   ├── Background Diamonds
│   ├── Headline
│   ├── Description
│   ├── Action Buttons
│   │   ├── Call Button
│   │   └── Email Button
│   └── Trust Indicators
│
└── Footer
    ├── Background Diamonds
    │
    ├── Brand Column
    │   ├── Diamond Logo
    │   ├── Brand Name
    │   └── Tagline
    │
    ├── Services Column
    │   └── Service Links
    │
    ├── Contact Column
    │   ├── Phone
    │   ├── Email
    │   └── Location
    │
    └── Bottom
        ├── Copyright
        └── Legal Links
```

---

## Color Scheme

```
Primary Blues:
┌─────────────────────────────────────┐
│ Primary 600:   #0EA5E9 (sky-500)   │ Main accent
│ Primary 900:   #075985 (blue-900)  │ Dark elements
└─────────────────────────────────────┘

Accent Colors:
┌─────────────────────────────────────┐
│ Light Blue:    #E0F2FE (sky-100)   │ Backgrounds
│ White:         #FFFFFF             │ Primary background
│ Black:         #0A0A0A             │ Text & dark areas
└─────────────────────────────────────┘

Gradients Used:
┌─────────────────────────────────────┐
│ Header:     Neutral → White         │
│ Hero:       Blue → White → Neutral  │
│ Principles: White                   │
│ CTA:        Blue → Dark Blue        │
│ Footer:     Dark                    │
└─────────────────────────────────────┘
```

---

## Responsive Behavior

### Mobile (< 640px)
```
┌──────────────────┐
│    HEADER        │
│  Logo over text  │
│ Contact below    │
└──────────────────┘
┌──────────────────┐
│  HERO - STACKED  │
│                  │
│   Title &        │
│   Benefits       │
│                  │
│  [Animation]     │
│                  │
│ [CTA Button]     │
└──────────────────┘
┌──────────────────┐
│  PRINCIPLES -    │
│  STACKED (1 col) │
│                  │
│   [Card 1]       │
│   [Card 2]       │
│   [Card 3]       │
└──────────────────┘
┌──────────────────┐
│  CTA - STACKED   │
│                  │
│ [Button Stack]   │
└──────────────────┘
┌──────────────────┐
│  FOOTER - STACK  │
└──────────────────┘
```

### Tablet (640px - 1024px)
```
┌────────────────────────────┐
│      HEADER - Flex         │
│  Logo    Contact Info      │
└────────────────────────────┘
┌────────────────────────────┐
│  HERO - 2 Columns          │
│ ┌──────────┐  ┌──────────┐│
│ │ Content  │  │Animation ││
│ └──────────┘  └──────────┘│
└────────────────────────────┘
┌────────────────────────────┐
│  PRINCIPLES - 2-3 Columns  │
│ [Card] [Card]  [Card]      │
└────────────────────────────┘
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────┐
│      HEADER - Full Flex              │
│  Logo & Name     Contact Info        │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  HERO - 2 Equal Columns              │
│ ┌────────────┐  ┌──────────────────┐│
│ │  Content   │  │   Animation      ││
│ │  + Button  │  │   + Diamonds     ││
│ └────────────┘  └──────────────────┘│
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│  PRINCIPLES - 3 Columns              │
│ [Card 1]    [Card 2]    [Card 3]    │
└──────────────────────────────────────┘
```

---

## Animation Zones

```
Header:
  └─ Diamond: Fade in on mount

Hero:
  ├─ Background Diamonds: Floating + rotating
  ├─ Content: Staggered fade + slide
  ├─ Animation Container: Gradient overlay fade
  └─ Pressure Washer: Continuous sweep + spray

Principles:
  ├─ Background Diamonds: Scale + rotate
  ├─ Cards: Staggered fade + slide
  └─ Hover Effects: Diamond spins, card lifts

CTA:
  ├─ Background Diamonds: Y-axis float + rotate
  ├─ Content: Fade + slide on view
  ├─ Buttons: Scale on hover/tap
  └─ Trust Indicators: Fade in

Footer:
  ├─ Background Diamonds: Continuous rotation
  └─ Columns: Staggered fade + slide
```

---

## Typography Hierarchy

```
Page Level:
├─ Hero Title
│  └─ "Pressure Washing Done Right" (4xl-6xl, bold)
│
├─ Section Headers
│  └─ "Our Principles" (4xl-5xl, bold)
│
├─ Card Titles
│  └─ "Customer-First Attitude" (xl, bold)
│
├─ Body Text
│  └─ Service descriptions (lg, regular)
│
└─ Small Text
   └─ Footer info (sm, regular)

Font Stack:
└─ Display: Sora (headings)
└─ Body: Inter (text)
└─ Fallback: system-ui, sans-serif
```

---

## Interactive Elements

```
Buttons:
┌─────────────────────────────────────┐
│ [Primary: Blue bg, white text]     │ Hover: Scale 105%
│ [Secondary: White bg, blue text]   │ Hover: Scale 105%
└─────────────────────────────────────┘

Links:
├─ Inline: Blue text, hover underline
├─ Nav: Hover color shift
└─ Icon + Text: Hover glow effect

Cards:
├─ Normal: Subtle border
├─ Hover: Shadow appears, elements float
└─ Tap: Scale down 95%

Animations:
├─ Entrance: 0.8s fade + slide
├─ Loop: 3-10s depending on element
├─ Hover: Instant scale effect
└─ Scroll Trigger: Animate on view
```

---

## Spacing Scale

```
Tailwind Default Spacing:
├─ p-4:   1rem (16px)
├─ p-8:   2rem (32px)
├─ py-12: 3rem (48px)
├─ py-24: 6rem (96px)
└─ Used for: Padding, gaps, margins

Responsive Padding:
├─ Mobile:  p-4 sm:p-6 (16-24px)
├─ Tablet:  md:px-8 lg:px-16 (32-64px)
└─ Desktop: Full padding for breathing room

Gap Between Sections:
├─ Mobile:  py-12 (48px)
├─ Desktop: py-24 (96px)
└─ Creates clear visual separation
```

---

## Z-Index Layers

```
Layout Stacking:
├─ background: z-0    (Decorative diamonds, gradients)
├─ content:   z-10   (Text, cards, buttons)
├─ interactive: z-20 (Hover states, modals)
└─ navigation: z-50  (Fixed header, if added)

Within Sections:
└─ Background: opacity 0.1-0.3
└─ Content:   opacity 1.0
└─ Overlays:  opacity 0.3-0.7
```

---

## Accessibility Features

```
Semantic HTML:
├─ <header>   for Header
├─ <nav>      for navigation (ready)
├─ <section>  for each major section
├─ <footer>   for Footer
└─ <article>  for content blocks

Links & Buttons:
├─ Clear labels
├─ Sufficient contrast (WCAG AA)
├─ Touch targets: 44x44px minimum
└─ Keyboard navigable

Images:
├─ Alt text ready (img alt="")
├─ Decorative: role="presentation"
└─ SVG: title + desc tags

Text:
├─ Readable font sizes (16px+)
├─ Line height: 1.5+
├─ Color contrast: 4.5:1 minimum
└─ No pure black on white
```

---

## Performance Optimization

```
Rendering:
├─ Lazy load images (future)
├─ Optimize SVGs (done)
├─ Minify CSS (build process)
└─ Code splitting (ready)

Animations:
├─ GPU-accelerated (transform, opacity)
├─ Debounced scroll events
├─ Conditional animation (reduced motion)
└─ Frame-rate optimized

Assets:
├─ Web fonts: Preload + swap
├─ No large images (initially)
├─ SVG for icons (sharp, small)
└─ CDN ready for production
```

---

**This visual structure ensures a clean, professional appearance across all devices while maintaining performance and accessibility standards.**
