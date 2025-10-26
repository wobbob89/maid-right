# Maid-Right

Welcome to the Maid-Right repository! This repo contains the graffiti-style static site prototype for Maid-Right, a local Melksham cleaning company.

## 📁 Repository Structure

- **Markdown Content Files**: `homepage.md`, `about.md`, `domestic.md`, `commercial.md`, `specialist.md`, `faqs.md`, `testimonials.md`, `contact.md` — original content files with metadata and copy.
- **Static Site Prototype**: `site/` — complete HTML/CSS/JS prototype ready for deployment.

## 🎨 Static Site Prototype

The `site/` directory contains a complete static website prototype featuring:

- **8 HTML pages**: index.html, about.html, domestic.html, commercial.html, specialist.html, faqs.html, testimonials.html, contact.html
- **Graffiti-style design**: Bold colors, street art aesthetic with professional cleaning standards
- **Responsive layout**: Mobile-first design that works on all devices
- **Accessibility**: WCAG compliant with ARIA labels, semantic HTML, keyboard navigation
- **SEO optimized**: Meta tags, Open Graph, JSON-LD structured data on every page

### Design System

**Colors:**
- Pink: `#FF2D95`
- Blue: `#00D4FF`
- Green: `#C7FF00`
- Purple: `#6A00FF`
- Charcoal: `#0F1722`
- Off-white: `#FBFAF7`

**Typography:**
- Headings: 'Permanent Marker' (Google Fonts)
- Body: 'Poppins' (Google Fonts)

### Features

- ✅ Sticky header with logo and navigation
- ✅ Mobile hamburger menu with accessible toggle
- ✅ Full-bleed hero sections with background images
- ✅ Three-column services grid (collapses to single column on mobile)
- ✅ Hover effects on service cards
- ✅ FAQ accordion with expand/collapse
- ✅ Contact form with client-side validation
- ✅ JSON-LD structured data (Organization + FAQPage)
- ✅ Open Graph meta tags for social sharing

## 🚀 Viewing the Site Locally

To view the static site prototype:

1. Navigate to the `site/` directory:
   ```bash
   cd site/
   ```

2. Open `index.html` in your browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or simply double-click `site/index.html` in your file explorer.

3. Alternatively, serve with a local web server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server site/
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then visit `http://localhost:8000` in your browser.

## 📦 Assets & Images

The `site/assets/` directory contains placeholder images:

- `logo.png` — Maid-Right logo (graffiti poster style)
- `header.jpg` — Wide mural background for hero sections
- `logo-sheet.jpg` — 4-up logo variations (placeholder)
- `og-home.jpg` — Open Graph image for social sharing (placeholder, should be 1200x630px)

### Replacing Placeholder Images

To replace the placeholder images with final artwork:

1. **Replace logo**: 
   - Export the final poster artwork as PNG (transparent background preferred)
   - Save as `site/assets/logo.png`

2. **Replace header**: 
   - Export the wide mural artwork as JPG (1920px width recommended)
   - Save as `site/assets/header.jpg`

3. **Replace logo sheet**: 
   - Export the 4-up logo sheet as JPG
   - Save as `site/assets/logo-sheet.jpg`

4. **Create Open Graph image**: 
   - Crop the header image to 1200x630px (Facebook/Twitter recommended size)
   - Save as `site/assets/og-home.jpg`

5. **Generate favicon** (optional):
   ```bash
   # Using ImageMagick to generate favicon from logo
   convert site/assets/logo.png -resize 32x32 site/favicon.ico
   ```

## 🔧 Development Commands

If you need to work with this repository locally:

```bash
# Clone the repository
git clone https://github.com/wobbob89/maid-right.git
cd maid-right

# Create a new branch (if needed)
git checkout -b feature/your-feature-name

# Make your changes, then stage and commit
git add .
git commit -m "Your commit message"

# Push changes
git push origin feature/your-feature-name
```

## 📧 Contact

For questions about this repository or the Maid-Right services:

- Email: enquires@maid-right.co.uk
- Facebook: https://www.facebook.com/profile.php?id=61582952575510

## 📄 License

© 2025 Maid-Right. All rights reserved.
