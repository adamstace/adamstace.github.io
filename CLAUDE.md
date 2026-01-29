# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website built with vanilla HTML, CSS, and JavaScript. It features a cyberpunk-inspired design with dark/light theme support, animated cursor trails, and smooth scroll animations.

## Architecture

**Single-page application structure:**
- `index.html` - Main HTML document containing all sections (hero, about, projects, contact)
- `styles.css` - Complete styling with CSS variables for theming
- `script.js` - All interactive features and animations

**Key interactive features:**
- Theme toggle with localStorage persistence (script.js:5-25)
- Cursor trail effect with throttled dot generation (script.js:28-63)
- Intersection Observer for scroll-based animations (script.js:106-126)
- Profile image click interaction with confetti effect (script.js:132-192)

## Theming System

The site uses CSS custom properties defined in `:root` and `[data-theme="light"]` selectors (styles.css:5-29). The theme toggle JavaScript:
1. Reads saved theme from localStorage on load
2. Updates the `data-theme` attribute on `<html>` element
3. All color variables automatically update via CSS

To add new themed colors, define both dark and light mode values in the CSS variables.

## Deployment

This is designed for GitHub Pages deployment:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

Enable GitHub Pages in repository settings: Settings → Pages → Deploy from branch → main → / (root)

## Customization Points

**Personal information** (index.html):
- Line 20: Nav logo initials
- Line 37: Name in hero title
- Line 38: Roles/titles
- Lines 88-139: Project cards with descriptions and tech tags
- Lines 151-166: Contact links (email, GitHub, LinkedIn, Twitter)

**Visual customization** (styles.css):
- Lines 5-29: CSS variables for colors and theme values
- Profile image placeholder at index.html:53-55 (replace with actual image)

**Animations**:
- Project cards fade in with staggered delays (styles.css:418-421)
- Profile image rotates continuously (styles.css:291)
- Cursor trail dots are throttled to 50ms intervals (script.js:33)
