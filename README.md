# 🪐 Inspire '25–'26 – TechFest Website

Welcome to the **Inspire '25–'26** website repository! This space-themed tech fest site, built with HTML, CSS, and JavaScript, immerses visitors in a cosmic experience—while each department page echoes its own unique theme and technological flair.

---

##  Deployment Link
```
https://tattvam21.github.io/inspire-25-26/
```

---

##  Overview

**Inspire '25–'26** is your virtual gateway to a stellar festival of innovation. Visitors journey through a cosmos of events, departmental showcases, and interactive content—all wrapped in a stunning space aesthetic.

Key elements:
- A cohesive **space/dark‑universe theme** across all pages
- Distinct **department-themed pages** (e.g., Astronomy for Physics, Digital Constellations for CSE)
- Pure **HTML5, CSS3, and vanilla JavaScript**—no frameworks used

---

## 🚀 Code Structure

### Project Organization

```
├── index.html              # Main entry point with hero section and event navigation
├── style.css               # Global styles and animations
├── script.js               # Canvas animations and interactive elements
├── Dep_Select/             # Department selection images and assets
├── Department/             # Department-specific pages and resources
│   ├── Central/            # Central department pages
│   ├── Civil/              # Civil engineering department pages
│   ├── Computer/           # Computer science department pages
│   ├── Electrical/         # Electrical engineering department pages
│   ├── Mechnical/          # Mechanical engineering department pages
│   └── Science/            # Science department pages
├── Time/                   # Timeline assets and images
└── footer/                 # Footer assets and logos
```

### Core Components

1. **Canvas Animations**
   - Two primary canvas elements: `cometCanvas` and `skyCanvas`
   - Star and comet particle systems with physics-based animations
   - Visibility-based rendering for performance optimization

2. **Navigation System**
   - Interactive event nodes connected by animated paths
   - Department-specific navigation with custom theming
   - Event name display with hover effects

3. **Responsive Layout**
   - Fluid grid system for event displays
   - Mobile-optimized viewport settings
   - Conditional animation rendering based on device capabilities

---

##  Built With

- **HTML5** – Structured layout and semantic content  
- **CSS3** – Space-themed visuals, responsive design, and animations  
- **JavaScript (vanilla)** – UI interactivity and dynamic effects  
- **Canvas API** – Dynamic background animations and particle systems

---

## ✨ Features

- 🌌 Fully responsive space-themed design
- 🧑‍🚀 Department-specific pages with custom styles and content
- 📅 Event schedule section with interactive navigation
- ⚡ Interactive JS elements (animations, menus, etc.)
- 🎨 Canvas-based particle animations with stars and comets
- 📱 Optimized performance across desktop and mobile devices

---

## 🛠️ Recent Optimizations

### Performance Improvements

#### Canvas Animations
- **Reduced particle count**: Decreased stars and comets for better performance
- **Visibility-based rendering**: Only animate elements in viewport
- **Frame skipping**: Implemented for smoother animations on lower-end devices
- **Batch processing**: Optimized drawing operations to reduce GPU calls
- **Simplified rendering**: Removed shadow effects and complex gradients
- **Memory optimization**: Improved object pooling and history tracking

#### CSS Optimizations
- **Hardware acceleration**: Added transform properties for GPU rendering
- **Animation timing**: Implemented cubic-bezier for smoother transitions
- **Android-specific fixes**: Added media queries for better Android compatibility
- **Font loading**: Optimized with proper font-display settings

#### Image Loading
- **Eager/lazy loading**: Strategic loading based on content priority
- **Width/height attributes**: Added to prevent layout shifts
- **Preconnect**: Implemented for critical resources

#### Mobile Responsiveness
- **Viewport meta tags**: Properly configured for mobile devices
- **Android media queries**: Added specific fixes for Android browsers
- **Touch targets**: Enlarged for better mobile interaction
- **Conditional animations**: Disabled heavy animations on mobile

#### HTML Structure
- **Meta tags**: Added proper SEO and viewport settings
- **Script loading**: Deferred for non-critical JavaScript

### Bug Fixes
- Fixed JavaScript syntax error (removed extra closing brace)
- Enhanced text visibility with appropriate colors and glow effects
- Added proper event name labels with improved styling

---

## 👥 Contributors

Meet the amazing core team behind the Inspire '25–'26 website:

- [**Tattvam Kajavadara**](https://www.linkedin.com/in/tattvam-kajavadara/)
- [**Neel Sorathiya**](https://www.linkedin.com/in/neel-sorathiya)
- [**Pratham Tailor**](https://www.linkedin.com/in/pratham-tailor/)
- [**Aryan Tolani**](https://www.linkedin.com/in/aryan-tolani-621755313/)
- [**Yashvi Chulawala**](https://www.linkedin.com/in/yashvi-chulawala-ab7972316/)

---

## 🔧 Development

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/tattvam21/inspire-25-26.git
   cd inspire-25-26
   ```

### Making Changes

1. **Canvas Animations**: Modify `script.js` to adjust particle count, speed, or effects
2. **Styling**: Update `style.css` for color schemes, animations, or layout changes
3. **Content**: Edit `index.html` or department-specific HTML files to update event information

---

