# Architecture Documentation

## Project Structure & Design Decisions

### Overview
Diamond Pressure Washing RVA is built with a component-based architecture using React, TypeScript, and modern web tools. The design prioritizes:

1. **Maintainability** - Clear component separation
2. **Scalability** - Easy to add new features
3. **Performance** - Optimized animations and rendering
4. **Responsiveness** - Mobile-first design
5. **Developer Experience** - Type safety and clear patterns

---

## Component Hierarchy

```
App
├── Header
│   └── Diamond (logo)
├── Hero
│   ├── Diamond (background decorations)
│   └── PressureWasherAnimation
├── Principles
│   ├── Diamond (decorative elements)
│   └── [3 Principle Cards]
├── CTA
│   └── Diamond (background)
└── Footer
    └── Diamond (background)
```

---

## Component Details

### 1. **Diamond.tsx**
**Purpose**: Reusable animated diamond SVG component

**Key Features**:
- Three size variants (sm, md, lg)
- Optional Framer Motion animation
- Color customizable via className
- Used throughout as branding element

**State**: None (pure presentational)

**Props**:
```ts
interface DiamondProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}
```

---

### 2. **PressureWasherAnimation.tsx**
**Purpose**: Animated demonstration of pressure washer service

**Key Features**:
- SVG-based pressure washer machine
- Animated nozzle movement (sweep pattern)
- Particle spray effects
- Water stream visualization
- Continuous loop animation

**Animations**:
- Nozzle position: 4s sweep (x, y, rotate)
- Spray particles: 0.6s fade/scale (staggered)
- Water stream: 2s opacity pulse

**Future Enhancement**:
- Integrate with diamond cleaning effect
- Add splash/ripple particles
- Connect to 21st.dev animations

---

### 3. **Header.tsx**
**Purpose**: Navigation and brand display

**Components**:
- Logo (Diamond icon)
- Brand name & tagline
- Contact info (responsive)
- Call-to-action buttons

**Responsive Behavior**:
- Desktop: Contact info on right
- Mobile: Contact info below logo
- Hamburger menu ready (not implemented)

**Features**:
- Fade-in animation on mount
- Staggered child animations
- Responsive grid layout

---

### 4. **Hero.tsx**
**Purpose**: Landing section with main value proposition

**Sections**:
- Left: Text content, benefits list, CTA button
- Right: Animated PressureWasherAnimation component
- Background: Floating animated diamonds

**Animations**:
- Container: Stagger children 0.2s apart
- Items: Fade in + slide up (0.8s)
- Background diamonds: Float + rotate continuously

**Responsive**:
- Mobile: Single column stack
- Desktop: Two-column grid with gap

---

### 5. **Principles.tsx**
**Purpose**: Display core business principles (3 values)

**Card Components**:
- Icon (from lucide-react)
- Title
- Description
- Hover effect (diamond animation in corner)

**Animations**:
- Container: Stagger 0.2s
- Items: Fade + slide up
- Hover: Diamond rotates
- View trigger: `whileInView` for scroll animation

**Design**:
- Card layout: 3 columns (responsive to 1 on mobile)
- Background: Animated decorative diamonds
- Accent: Bottom diamond divider

---

### 6. **CTA.tsx**
**Purpose**: Call-to-action section with contact options

**Features**:
- Headline
- Description
- Two action buttons (call & email)
- Trust indicators
- Animated background diamonds

**Button Styles**:
- Primary: White background, blue text
- Secondary: Blue background, white text
- Hover effects: Scale up + color shift

**Animations**:
- Container: Fade + slide
- Buttons: Scale on hover/tap
- Background: Multiple rotating diamonds

---

### 7. **Footer.tsx**
**Purpose**: Contact info, links, branding

**Sections**:
- Brand info (left column)
- Quick service links (center)
- Contact methods (right)
- Copyright & legal (bottom)

**Animations**:
- Staggered column appearance
- Divider line scales in
- Bottom text fades in

**Responsive**:
- Desktop: 3 columns + divider
- Mobile: Single column stack

---

## Styling Architecture

### Tailwind CSS Configuration
Located in `tailwind.config.js`:

**Custom Colors**:
```js
primary: {
  50-900: Range of blue shades
}
accent: {
  light: '#e0f2fe',
  DEFAULT: '#0ea5e9',
  dark: '#075985'
}
neutral: {
  50-900: Grays and blacks
}
```

**Custom Animations**:
```js
diamond-shine: 3s opacity pulse
pressure-wash: 2s x/y translation sweep
float: 6s vertical bounce
```

**Font Stack**:
- Display: Sora (Google Fonts)
- Body: Inter (Google Fonts)
- Fallback: system-ui, sans-serif

### Global Styles (`index.css`)
- Tailwind directives (@base, @components, @utilities)
- Custom component classes (.btn-primary, .glass, etc.)
- Scrollbar styling
- Smooth scroll behavior

---

## Animation Strategy

### Framer Motion Patterns

**1. Viewport Triggers**
```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
```
- Animates when element enters viewport
- Once only (performance)
- 100px margin for early trigger

**2. Staggered Children**
```tsx
containerVariants: {
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}
```
- Parent coordinates child animations
- 0.2s delay between each child
- Clean sequential appearance

**3. Continuous Loops**
```tsx
animate={{ rotation: 360 }}
transition={{ duration: 10, repeat: Infinity }}
```
- Rotating diamonds in background
- Smooth, continuous motion
- Used for ambient atmosphere

**4. Hover Effects**
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```
- Interactive feedback
- Subtle scale changes
- Used on buttons

---

## Data Flow

### No External State Management
- Components are self-contained
- Animations drive visual changes
- Ready for React Context (future)
- Ready for API integration (backend phase)

### Future Data Sources
- Contact form submissions → Backend
- Image gallery → CMS
- Service listings → Database
- Testimonials → Dynamic content

---

## Performance Considerations

### Current Optimizations
- ✅ Component lazy evaluation (Framer Motion)
- ✅ CSS animations where possible
- ✅ Efficient SVG usage
- ✅ Throttled scroll events (viewport)
- ✅ No external image assets initially

### Future Optimizations
- Image optimization (web scraping)
- Code splitting (route-based)
- Lazy loading components
- Service worker caching
- CDN delivery

---

## Responsive Design Breakpoints

Using Tailwind's default breakpoints:
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

**Mobile-first approach**:
1. Default styles for mobile
2. `md:` prefixes for tablet+
3. `lg:` prefixes for desktop+

---

## TypeScript Configuration

### Path Aliases
```
@/       → src/
@components/ → src/components/
@screens/    → src/screens/
@styles/     → src/styles/
@hooks/      → src/hooks/
@utils/      → src/utils/
@assets/     → assets/
```

### Strict Mode Enabled
- `strict: true` in tsconfig.json
- Forces type safety
- Catches potential bugs early

---

## Future Expansion Points

### 1. Pages/Screens Layer
```
src/screens/
├── HomePage.tsx
├── ServicesPage.tsx
├── GalleryPage.tsx
└── ContactPage.tsx
```

### 2. Custom Hooks
```
src/hooks/
├── useScrollAnimation.ts
├── useFormSubmit.ts
├── useMobileDetect.ts
└── useContactForm.ts
```

### 3. Utilities
```
src/utils/
├── apiClient.ts
├── validators.ts
├── formatters.ts
└── constants.ts
```

### 4. Context/State
```
src/context/
├── ContactContext.tsx
├── AuthContext.tsx
└── ThemeContext.tsx
```

### 5. API Integration
- Contact form backend
- Image uploads
- Lead generation tracking
- Email notifications

---

## Build & Deployment

### Development
```bash
npm run dev
```
- Hot module reloading
- Source maps for debugging
- Babel transformation

### Production Build
```bash
npm run build
```
- Minification
- Tree shaking
- Code splitting
- Optimized assets

### Code Formatting
```bash
npm run format
```
- Prettier configuration
- Consistent code style
- Pre-commit ready

---

## Testing Architecture (Ready)

**Frameworks to add**:
- Jest (unit tests)
- React Testing Library (component tests)
- Cypress (E2E tests)

**Example structure**:
```
src/components/__tests__/
├── Diamond.test.tsx
├── Header.test.tsx
└── Hero.test.tsx
```

---

## Security Considerations

### Current
- ✅ No sensitive data in code
- ✅ Contact email in plaintext (ready for backend)
- ✅ No authentication needed (public site)

### Future
- Contact form validation (frontend + backend)
- CSRF protection (backend)
- Rate limiting (backend)
- Input sanitization (backend)

---

## Summary

The architecture is:
- **Modular**: Each component has single responsibility
- **Scalable**: Easy to add new sections/pages
- **Maintainable**: Clear naming, TypeScript safety
- **Performant**: Optimized animations, lazy rendering
- **Extensible**: Ready for backend integration
- **Professional**: Production-ready code quality

---

**Ready for code review and implementation by Cameron Cook**
