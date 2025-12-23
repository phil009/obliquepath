# Blog Design System & Effects Replication Guide

Create a modern blog with the following design system and interactive effects. This guide includes all necessary dependencies, components, and styling configurations.

---

## 📦 Dependencies to Install

```bash
npm install next@latest react@latest react-dom@latest
npm install framer-motion next-themes
npm install lucide-react
npm install clsx tailwind-merge class-variance-authority
npm install tailwindcss@latest @tailwindcss/postcss tw-animate-css
npm install typescript @types/node @types/react @types/react-dom
```

---

## 🎨 Color Scheme & Theme System

### Color Palette
Use OKLCH color space for modern, perceptually uniform colors:

**Primary Colors (Indigo/Blue Violet):**
- `--color-primary-100: oklch(0.95 0.05 280)`
- `--color-primary-200: oklch(0.87 0.07 280)`
- `--color-primary-300: oklch(0.78 0.09 280)`
- `--color-primary-400: oklch(0.7 0.12 280)`
- `--color-primary-500: oklch(0.63 0.14 280)`
- `--color-primary-600: oklch(0.55 0.16 280)`
- `--color-primary-700: oklch(0.48 0.18 280)`
- `--color-primary-800: oklch(0.4 0.2 280)`
- `--color-primary-900: oklch(0.32 0.22 280)`

**Accent Colors (Teal/Green-Blue):**
- `--color-accent-100: oklch(0.95 0.1 170)`
- `--color-accent-200: oklch(0.88 0.14 170)`
- `--color-accent-300: oklch(0.8 0.18 170)`
- `--color-accent-400: oklch(0.7 0.22 170)`
- `--color-accent-500: oklch(0.6 0.25 170)`
- `--color-accent-600: oklch(0.52 0.28 170)`
- `--color-accent-700: oklch(0.44 0.3 170)`
- `--color-accent-800: oklch(0.36 0.32 170)`
- `--color-accent-900: oklch(0.28 0.34 170)`

**Backgrounds:**
- Light mode: `oklch(0.98 0 0)` (near white)
- Dark mode: `oklch(0.18 0 270)` (deep blue-tinted dark)

### Typography
**Fonts to import:**
```css
@import url('https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,regular,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Fira+Code:300,regular,500,600,700');
```

**Font Usage:**
- Headings (h1-h6): Inter
- Body text (p, span): Poppins
- Code/Buttons: Fira Code (monospace)

---

## 🎭 Key Visual Effects

### 1. **Tech Background** (Animated Grid/Particles/Circuits)
Three variants that transition based on scroll position:

**Grid Variant:**
- Animated horizontal and vertical lines that fade in
- Lines react to mouse position (opacity increases near cursor)
- Staggered animation on load
- Low opacity (0.05-0.07)

**Particles Variant:**
- Floating particles (2-6px circles)
- Continuous floating animation (up and down)
- Particles pulse and scale slightly
- React to mouse proximity with increased opacity
- Count: 60 particles (medium density)

**Circuits Variant:**
- SVG-based circuit paths with bezier curves
- Animated path drawing effect (strokeDasharray animation)
- Circuit nodes (small circles at path intersections)
- Gradient strokes transitioning between primary and accent colors
- Interactive: nodes pulse near mouse cursor

**Implementation Notes:**
- Use Framer Motion for all animations
- Track mouse position with `mousemove` event listener
- Responsive to theme (light/dark)
- Layer behind all content (z-index: 0)
- Pointer events disabled

---

### 2. **Mouse Spotlight Effect**
A soft, glowing orb that follows the cursor:

**Specifications:**
- Size: 400px diameter
- Opacity: 0.07 (subtle)
- Color: Primary color from theme
- Blur: 100px
- Animation: Spring physics (mass: 0.1, stiffness: 800, damping: 30)
- Fixed position, follows cursor with smooth lag
- Fades out when cursor leaves viewport
- Z-index: 0 (background layer)

---

### 3. **Floating Decorative Elements**
Abstract geometric shapes floating in the background:

**Specifications:**
- 5-8 elements per page
- Shapes: Mix of circles and rounded squares
- Sizes: 50-150px random
- Colors: Gradient from primary/accent with 60-40% opacity
- Animation: Continuous floating (y-axis movement)
- Slight rotation on squares (0-15 degrees)
- Staggered entrance animation
- Positioned randomly across viewport
- Responds to scroll (using `whileInView`)

---

### 4. **Scroll Progress Indicator**
Visual feedback for page scroll progress:

**Features:**
- Thin progress bar (4px) at top of page
- Gradient: `from-primary-300/50 to-accent-300/60`
- Width grows with scroll percentage (0-100%)
- Scroll-to-top button appears after 300px scroll
- Button with icon animation (BarChart ↔ ChevronUp on hover)
- Scroll percentage indicator in bottom-left
- Spring animations for all transitions

---

### 5. **Theme Switcher System**
Dark/light mode toggle using `next-themes`:

**Setup:**
```tsx
// Wrap app with ThemeProvider
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

**Features:**
- System preference detection
- Smooth transitions between themes
- All components respond to theme changes
- CSS variables update automatically
- Persists user preference

---

## 🎨 CSS Utilities & Effects

### Gradient Text
```css
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-500 bg-[length:200%_auto];
}
```

### Gradient Border Animation
```css
.gradient-border {
  position: relative;
  border-radius: var(--radius);
}

.gradient-border::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: calc(var(--radius) + 2px);
  background: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)));
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
  z-index: -1;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 🏗️ Component Architecture

### Layout Structure
```tsx
<ThemeProvider>
  <body>
    {/* Background Effects Layer */}
    <TechBackground variant={scrollBasedVariant} opacity={0.05} interactive />
    <MouseSpotlight size={400} opacity={0.07} />
    <FloatingElements count={6} variant="mixed" />
    
    {/* Content Layer */}
    <main className="relative z-10">
      {children}
    </main>
    
    {/* UI Overlays */}
    <ScrollWatcher 
      showProgress 
      showScrollToTop 
      progressPosition="top"
      scrollToTopThreshold={300}
    />
  </body>
</ThemeProvider>
```

---

## 📐 Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Optimizations
- Reduce particle count by 50%
- Disable mouse spotlight on touch devices
- Simplify animations (reduce motion)
- Smaller floating elements
- Hide scroll percentage indicator on mobile

---

## 🎯 Animation Patterns

### Framer Motion Conventions

**Fade In:**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

**Staggered Children:**
```tsx
container: {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
```

**Scroll-based Reveal:**
```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
```

**Spring Physics:**
```tsx
transition={{ type: "spring", stiffness: 300, damping: 25 }}
```

---

## 🎨 Tailwind Configuration

### PostCSS Setup
```javascript
// postcss.config.mjs
const config = {
  plugins: ["@tailwindcss/postcss"],
};
export default config;
```

### Globals CSS Structure
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme {
  /* Custom theme variables */
}

@theme inline {
  /* Runtime theme mappings */
}

:root {
  /* Light mode variables */
}

.dark {
  /* Dark mode overrides */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## 🔧 Utility Functions

### CN Helper (Class Merge)
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 🚀 Performance Considerations

1. **Use `useEffect` with proper cleanup** for event listeners
2. **Debounce scroll/resize handlers** when possible
3. **Lazy load components** outside viewport
4. **Reduce motion** for users with accessibility preferences
5. **Optimize particle counts** based on device capability
6. **Use CSS transforms** over position changes
7. **Enable GPU acceleration** with `transform: translateZ(0)`

---

## 🎨 Design Principles

### Visual Hierarchy
- Large, bold headings with gradient effects
- Subtle background animations don't compete with content
- Clear contrast ratios (WCAG AA compliant)
- Consistent spacing scale (0.625rem base radius)

### Animation Philosophy
- Animations enhance, don't distract
- Duration: 0.3-1.5s for most transitions
- Spring physics for natural feeling
- Stagger reveals for grouped content
- Smooth scroll behavior throughout

### Color Usage
- Primary: Main brand elements, CTAs
- Accent: Highlights, hover states, secondary actions
- Neutral: Text, borders, backgrounds
- Gradients: Headings, special elements, borders

---

## 📋 Component Checklist

Essential components to implement:
- ✅ ThemeProvider wrapper
- ✅ TechBackground (all 3 variants)
- ✅ MouseSpotlight
- ✅ FloatingElements
- ✅ ScrollWatcher (with progress & button)
- ✅ Gradient text utility
- ✅ Gradient border utility
- ✅ Dark mode toggle button
- ✅ Responsive layout wrapper

---

## 🎯 Usage Example

```tsx
// app/layout.tsx
export default function BlogLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <TechBackground variant="particles" density="medium" />
          <MouseSpotlight />
          <FloatingElements count={5} />
          
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          
          <ScrollWatcher />
        </ThemeProvider>
      </body>
    </html>
  );
}

// app/page.tsx (Blog home)
export default function BlogHome() {
  return (
    <article className="container mx-auto px-4 py-20">
      <h1 className="text-6xl font-bold gradient-text mb-6">
        Blog Title
      </h1>
      <div className="prose prose-lg dark:prose-invert">
        {/* Your blog content */}
      </div>
    </article>
  );
}
```

---

## 🎨 Advanced: Scroll-Based Background Transition

```typescript
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const getBgVariant = () => {
  if (scrollY < 300) return "grid";
  if (scrollY < 1000) return "particles";
  return "circuits";
};

// Use in render:
<TechBackground variant={getBgVariant()} />
```

This creates a dynamic background that evolves as users scroll through your blog content.

---

## 📝 Notes

- All effects are **GPU-accelerated** for smooth 60fps
- **Accessibility**: Respect `prefers-reduced-motion`
- **Mobile-first**: Effects gracefully degrade on smaller screens
- **Theme-aware**: All colors/opacities adjust for dark mode
- **TypeScript**: Full type safety for all props
- **Tree-shakeable**: Only import what you need

---

## 🎨 Color Reference (Quick Copy)

```typescript
// Use these in your components
const colors = {
  primary: {
    light: 'oklch(0.7 0.12 280)',
    DEFAULT: 'oklch(0.55 0.16 280)',
    dark: 'oklch(0.4 0.2 280)'
  },
  accent: {
    light: 'oklch(0.7 0.22 170)',
    DEFAULT: 'oklch(0.52 0.28 170)',
    dark: 'oklch(0.36 0.32 170)'
  }
};
```

---

**This design system creates a modern, interactive blog experience with professional animations and a cohesive visual language. The effects are subtle enough to enhance readability while providing visual interest.**
