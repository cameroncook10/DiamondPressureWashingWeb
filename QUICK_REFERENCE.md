# Quick Reference Guide

## 🚀 Start Here

```bash
cd ~/diamond-pressure-washing-rva
npm install
npm run dev
```

Visit: http://localhost:3000

---

## 📂 File Locations

| File | Purpose |
|------|---------|
| `src/components/Diamond.tsx` | Animated diamond icon |
| `src/components/PressureWasherAnimation.tsx` | Pressure washer animation |
| `src/components/Header.tsx` | Top navigation & branding |
| `src/components/Hero.tsx` | Landing section |
| `src/components/Principles.tsx` | Core values section |
| `src/components/CTA.tsx` | Call-to-action |
| `src/components/Footer.tsx` | Footer & links |
| `src/App.tsx` | Main app component |
| `src/index.css` | Global styles |
| `tailwind.config.js` | Tailwind customization |
| `index.html` | HTML template |
| `package.json` | Dependencies & scripts |

---

## 🎯 Common Tasks

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Format Code
```bash
npm run format
```

### Check for Errors
```bash
npm run lint
```

---

## 🎨 Customize Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    600: '#0ea5e9',    // Main blue
    900: '#075985',    // Dark blue
  },
  accent: {
    light: '#e0f2fe',  // Light blue
  },
}
```

Then use in components:
```tsx
<div className='bg-primary-600 text-accent-light'>
  Content
</div>
```

---

## ✨ Add New Components

1. Create `src/components/MyComponent.tsx`:
```tsx
import React from 'react';
import { motion } from 'framer-motion';

export const MyComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Content
    </motion.div>
  );
};

export default MyComponent;
```

2. Import in `src/App.tsx`:
```tsx
import { MyComponent } from './components/MyComponent';

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

---

## 🎬 Adjust Animations

### Change Animation Duration
```tsx
animate={{ opacity: 1 }}
transition={{ duration: 2 }} // Change this
```

### Add Stagger Between Children
```tsx
variants={containerVariants}
transition={{ staggerChildren: 0.3 }} // Increase gap
```

### Modify Keyframe Animation
Edit `tailwind.config.js`:
```js
keyframes: {
  diamondShine: {
    '0%, 100%': { opacity: '0.5' },
    '50%': { opacity: '1' },
  },
}
```

---

## 📱 Responsive Classes

```tsx
// Text sizes
<div className='text-sm md:text-lg lg:text-2xl'>

// Grid layouts
<div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

// Display
<div className='hidden md:block'> {/* Hidden on mobile */}

// Padding
<div className='p-4 md:p-8 lg:p-16'>
```

---

## 🔗 Component Props

### Diamond Component
```tsx
<Diamond 
  size="md"              // 'sm' | 'md' | 'lg'
  animated={true}       // Enable animation
  className="text-blue-400" // Custom color
/>
```

### Motion Component
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Content
</motion.div>
```

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `PORT=3001 npm run dev` |
| Styles not updating | `npm run dev` (restart) |
| Module not found | `npm install` |
| TypeScript errors | Check `tsconfig.json` aliases |
| Animations not smooth | Check `transition` timing |

---

## 📚 Learn More

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/

---

## 📖 Documentation Files

- **README.md** - Project overview
- **ARCHITECTURE.md** - Technical design
- **SETUP_GUIDE.md** - Development guide
- **PROJECT_SUMMARY.md** - Complete breakdown
- **QUICK_REFERENCE.md** - This file

---

## 💾 Git Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Description of changes"

# View history
git log --oneline
```

---

## 🎯 Next Steps

1. **Review** - Check components in `src/components/`
2. **Customize** - Modify colors, text, animations
3. **Add Content** - Integrate 21st.dev template
4. **Add Images** - Web scrape pressure washing photos
5. **Build** - Run `npm run build` for production

---

**Ready to code? Start with:** `npm run dev`

Questions? Check ARCHITECTURE.md or SETUP_GUIDE.md
