# Setup & Development Guide

## 🚀 Getting Started

### Step 1: Clone & Install
```bash
cd diamond-pressure-washing-rva
npm install
```

This installs all dependencies:
- React 18 & React DOM
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Prettier (formatting)
- Babel (transpilation)

### Step 2: Start Development Server
```bash
npm run dev
```

Server starts at `http://localhost:3000`

**Features**:
- Hot reloading (changes instant)
- Source maps (debugging)
- Babel transpilation
- Tailwind CSS auto-generation

### Step 3: View in Browser
Open `http://localhost:3000` and you should see:
- Header with logo & contact info
- Hero section with pressure washer animation
- Principles section (3 value cards)
- Call-to-action section
- Footer with contact details

---

## 📝 Next Steps: Your Code Review

When you're ready to review and build upon:

1. **Read the files**:
   ```bash
   # Component structure
   src/components/
   
   # Main app
   src/App.tsx
   
   # Styling
   tailwind.config.js
   src/index.css
   ```

2. **Understand the patterns**:
   - All animations use Framer Motion
   - Components are functional (React hooks)
   - TypeScript for type safety
   - Tailwind for styling

3. **Make improvements**:
   - Refactor as needed
   - Add your styling tweaks
   - Enhance animations
   - Add 21st.dev templates

---

## 🎨 Styling & Customization

### Adding Custom Styles

**Option 1: Tailwind Classes** (Preferred)
```tsx
<div className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
  Content
</div>
```

**Option 2: CSS Modules** (Not yet set up, can add)
```css
/* Component.module.css */
.container {
  background: linear-gradient(...);
}
```

**Option 3: Inline Styles**
```tsx
<div style={{ background: 'linear-gradient(...)' }}>
  Content
</div>
```

### Modifying Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    50: '#f0f9ff',  // lighter
    500: '#0ea5e9', // main
    900: '#0c3d66', // darker
  }
}
```

Then use in components:
```tsx
<button className='bg-primary-500 hover:bg-primary-700'>
  Click me
</button>
```

### Adjusting Animations

Edit `tailwind.config.js` keyframes:
```js
keyframes: {
  diamondShine: {
    '0%, 100%': { opacity: '0.5' },
    '50%': { opacity: '1' },
  },
}
```

Or in components directly with Framer Motion:
```tsx
animate={{ 
  opacity: [0.5, 1, 0.5],
  scale: [1, 1.1, 1]
}}
transition={{ duration: 3, repeat: Infinity }}
```

---

## 📁 Project Structure Deep Dive

```
diamond-pressure-washing-rva/
│
├── src/
│   ├── components/
│   │   ├── Diamond.tsx              # Animated diamond icon
│   │   ├── PressureWasherAnimation.tsx # Service animation
│   │   ├── Header.tsx               # Top navigation
│   │   ├── Hero.tsx                 # Landing section
│   │   ├── Principles.tsx           # Values section
│   │   ├── CTA.tsx                  # Call-to-action
│   │   └── Footer.tsx               # Bottom info
│   │
│   ├── App.tsx                      # Main app component
│   ├── index.tsx                    # React entry point
│   └── index.css                    # Global styles
│
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript config
├── tailwind.config.js               # Tailwind customization
├── .babelrc                         # Babel config
├── .prettierrc                      # Code formatting rules
├── .gitignore                       # Git ignore patterns
│
├── README.md                        # Project overview
├── ARCHITECTURE.md                  # Technical design
└── SETUP_GUIDE.md                   # This file

```

---

## 🔧 Available Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run lint             # Check for errors
npm run format           # Format code with Prettier
npm test                 # Run tests (when added)
```

---

## 📚 Key Files to Review

### 1. **package.json**
- Dependency list
- Script definitions
- Prettier config
- Babel presets

### 2. **tsconfig.json**
- TypeScript settings
- Path aliases (@components/, @utils/, etc.)
- Module resolution
- Compiler options

### 3. **tailwind.config.js**
- Color palette
- Custom animations
- Font definitions
- Spacing scale

### 4. **src/index.css**
- Tailwind imports
- Global styles
- Custom component classes
- Scrollbar styling

### 5. **src/App.tsx**
- Main component layout
- Component assembly
- Page structure

---

## 🎬 Adding 21st.dev Animations

When you have the 21st.dev template:

1. **Copy the component**:
   ```bash
   # Get the .tsx file from 21st.dev
   cp path/to/21st-component.tsx src/components/
   ```

2. **Import it**:
   ```tsx
   import { ScrollExpandMedia } from './components/21st-component';
   ```

3. **Use it in a section**:
   ```tsx
   <ScrollExpandMedia
     mediaSrc="your-image-url"
     bgImageSrc="background-url"
     title="Your Title"
   >
     <YourContent />
   </ScrollExpandMedia>
   ```

4. **Install required dependencies**:
   ```bash
   npm install framer-motion next/image
   ```

---

## 🖼️ Web Scraping Images

When you scrape pressure washing images:

1. **Create an images folder**:
   ```bash
   mkdir -p public/images
   ```

2. **Save images**:
   ```bash
   # Place your scraped images here
   public/images/
   ├── driveway-before.jpg
   ├── driveway-after.jpg
   ├── patio-cleaning.jpg
   └── windows-clean.jpg
   ```

3. **Use in components**:
   ```tsx
   import Image from 'react-native-web'; // or just <img />
   
   <img 
     src="/images/driveway-before.jpg" 
     alt="Driveway cleaning before"
   />
   ```

4. **Or reference in CSS**:
   ```css
   .hero-background {
     background-image: url('/images/patio-cleaning.jpg');
   }
   ```

---

## 🎯 Component Usage Patterns

### Using the Diamond Component
```tsx
import { Diamond } from '@/components/Diamond';

// Small, animated (default)
<Diamond />

// Medium, no animation
<Diamond size="md" animated={false} />

// Large, custom color
<Diamond size="lg" className="text-blue-400" />
```

### Using Framer Motion
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content fades in and slides up
</motion.div>
```

### Responsive Classes
```tsx
// Mobile-first approach
<div className='text-sm md:text-lg lg:text-2xl'>
  Text size adapts to screen size
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  1 column on mobile, 2 on tablet, 3 on desktop
</div>
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
PORT=3001 npm run dev

# Or kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Styling Not Updating
```bash
# Clear Tailwind cache
rm -rf .next node_modules/.cache
npm run dev
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check for type issues
npm run lint

# Fix TypeScript errors in editor (VS Code)
# Install ESLint extension
```

---

## 📦 Build for Production

```bash
# Create optimized build
npm run build

# Output in dist/ folder
ls -la dist/

# Test production build locally
npm run preview  # (if using Vite)
```

---

## 🚀 Deployment Ready

The project is ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify** (static site hosting)
- **GitHub Pages** (free static hosting)
- **AWS S3 + CloudFront**
- **Your own server**

Each platform has specific instructions, but the build output (`dist/`) is standard.

---

## 📖 Learning Resources

### React & TypeScript
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

### Tools
- [Lucide React Icons](https://lucide.dev/)
- [Prettier Docs](https://prettier.io/docs/)

---

## ✅ Development Checklist

- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Start dev server with `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Review component structure in `src/components/`
- [ ] Review styling in `tailwind.config.js`
- [ ] Read through `ARCHITECTURE.md`
- [ ] Make code improvements
- [ ] Test styling changes
- [ ] Test animations
- [ ] Commit changes to git
- [ ] Ready for 21st.dev integration
- [ ] Ready for image scraping
- [ ] Ready for backend connection

---

## 🤝 Ready for Your Review!

The architecture is solid and ready for:
- ✅ Code review & refactoring
- ✅ Styling customization
- ✅ Animation enhancements
- ✅ 21st.dev template integration
- ✅ Image asset additions
- ✅ Backend connection (future)

Let me know what you'd like to tackle first!

---

**Happy coding! 🚀**
