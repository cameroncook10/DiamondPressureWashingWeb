# Diamond Pressure Washing RVA

Professional pressure washing services website built with modern web technologies.

**Status:** MVP Architecture - Ready for styling & customization

## 🎯 Project Overview

Diamond Pressure Washing RVA is a modern, responsive website showcasing professional pressure washing services in Richmond, Virginia. The site features:

- **Dynamic Animations**: Framer Motion-powered interactive elements
- **Responsive Design**: Mobile-first, works on all devices
- **Clean Architecture**: Component-based, maintainable codebase
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion

## 🏗️ Architecture

```
diamond-pressure-washing-rva/
├── src/
│   ├── components/
│   │   ├── Diamond.tsx           # Animated diamond icon
│   │   ├── PressureWasherAnimation.tsx  # Animated pressure washer
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── Principles.tsx        # Core values section
│   │   ├── CTA.tsx               # Call-to-action section
│   │   └── Footer.tsx            # Footer with contact
│   ├── App.tsx                   # Main app component
│   ├── index.tsx                 # React entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML entry point
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind customization
└── .babelrc                      # Babel config

```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd diamond-pressure-washing-rva
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:3000`

### Build

```bash
npm run build
```

Outputs optimized build to `dist/`

### Format Code

```bash
npm run format
```

Runs Prettier to format all code

## 📦 Components

### Diamond Component
Animated diamond SVG used throughout the site as a branding element.

```tsx
<Diamond size="md" animated={true} />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' - Diamond size
- `animated`: boolean - Enable animation
- `className`: string - Additional CSS classes

### PressureWasherAnimation Component
Interactive pressure washer animation that demonstrates the service.

### Header Component
- Logo and branding
- Contact information (responsive)
- Navigation ready for expansion

### Hero Section
- Main value proposition
- Animated background
- Call-to-action button
- Pressure washer animation

### Principles Section
- Core business values (3 cards)
- Customer-first focus
- Quality & reliability messaging

### CTA Section
- Primary call-to-action
- Contact buttons (phone & email)
- Trust indicators

### Footer
- Brand info
- Quick service links
- Contact information
- Legal links

## 🎨 Design System

### Colors
```
Primary Blue: #0ea5e9 (sky-500)
Dark Blue: #075985 (blue-900)
Light Blue: #e0f2fe (sky-100)
White: #ffffff
Black: #0a0a0a
Neutral: Various shades for text/bg
```

### Typography
- **Display Font**: Sora (headings)
- **Body Font**: Inter (body text)
- **Sizes**: Responsive (sm to 2xl+)

### Animations
- **Diamond Shine**: 3s infinite loop
- **Pressure Wash**: 2s sweep animation
- **Float**: 6s vertical float
- **Stagger**: 0.2s between elements

## 🔧 Configuration Files

### tailwind.config.js
- Custom color palette
- Animation definitions
- Font family overrides
- Responsive breakpoints

### tsconfig.json
- Path aliases (@/, @components/, etc.)
- Strict mode enabled
- ESNext target

### .babelrc
- React JSX transform
- ES2020 target
- React Native Web plugin

### package.json
- Script definitions
- Prettier config
- Babel preset config

## 📱 Responsive Design

All components are mobile-first and responsive:
- **Mobile**: Single column, optimized touch targets
- **Tablet**: Grid layout optimizations
- **Desktop**: Full multi-column layouts

## 🎬 Next Steps: Styling & Customization

### 1. **21st.dev Integration**
- Paste 21st.dev template when ready
- Integrate advanced animations
- Apply gradient effects

### 2. **Web Images**
- Scrape professional pressure washing images
- Add service portfolio section
- Before/after comparisons

### 3. **Advanced Animations**
- Enhanced pressure washer animation
- Diamond cleaning effect
- Water splash particles
- Window reflection effects

### 4. **Backend Integration** (Later)
- Contact form submission
- Lead capture
- Quote request system
- Email notifications

## 🔑 Key Features Ready for Enhancement

- ✅ Component structure
- ✅ Animation framework (Framer Motion)
- ✅ Responsive design
- ✅ Color system (blue/white/light-blue-black)
- ✅ Typography system
- ✅ Diamond branding element
- ✅ Pressure washer animation skeleton
- 🔄 Advanced 21st.dev animations (pending template)
- 🔄 Hero images (pending web scraping)
- 🔄 Backend forms (pending implementation)

## 🎨 Customization Guide

### Changing Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: { /* modify blue shades */ },
  accent: { /* modify accent colors */ },
}
```

### Adjusting Animations
Modify `tailwind.config.js` keyframes:
```js
keyframes: {
  diamondShine: { /* timing */ },
  pressureWash: { /* timing */ },
  float: { /* timing */ },
}
```

### Adding New Components
1. Create file: `src/components/YourComponent.tsx`
2. Export from component
3. Import in `App.tsx`
4. Add to layout

## 📄 License

Built for Diamond Pressure Washing RVA

## 🤝 Contributing

Ready for code review and customization by the team.

---

**Built with React 18, TypeScript, Tailwind CSS, and Framer Motion**
