# ☕ TripleTen Coffee Shop

A modern, responsive coffee shop landing page built as the second project in the TripleTen Web Development program. This project showcases advanced HTML5 and CSS3 techniques, featuring custom animations, embedded media, and sophisticated layout design with BEM methodology.

![Coffee Shop](https://img.shields.io/badge/Project-Coffee%20Shop%20Landing-brown?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

## 🌟 Live Preview

Experience the cozy atmosphere of TripleTen Coffee Shop through this immersive landing page featuring embedded recipe videos, custom animations, and a warm, inviting design that captures the essence of specialty coffee culture.

**[🚀 View Live Demo](https://freixanet.github.io/se_project_coffeeshop/)**

## ✨ Key Features

### 🎨 **Design & UX**

- **Responsive Layout**: Optimized for screens 1100px - 1600px
- **Custom Typography**: Inter and Noto Serif font combinations
- **Interactive Elements**: Smooth hover effects and transitions
- **Coffee-Themed Design**: Warm color palette and coffee-inspired imagery

### 🏗️ **Advanced Techniques**

- **Flat BEM Methodology**: Scalable and maintainable CSS architecture
- **CSS Animations**: Custom transforms and keyframe animations
- **Embedded Media**: YouTube iframe integration for recipe videos
- **Advanced Positioning**: Complex layouts with absolute and relative positioning

### 📱 **Sections & Content**

- **Hero Section**: Striking coffee shop presentation with hours and location
- **Recipes Section**: Embedded YouTube videos with custom styling
- **Reservation System**: (In development)
- **Menu Display**: (In development)
- **About Section**: (In development)

## 📋 Table of Contents

- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Features](#-features)
- [Design System](#-design-system)
- [Best Practices](#-best-practices)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🛠️ Installation

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Basic understanding of HTML/CSS

### Quick Start

```bash
# Clone the repository
git clone https://github.com/freixanet/se_project_coffeeshop.git

# Navigate to project directory
cd se_project_coffeeshop

# Open in your preferred editor
code .

# Launch with Live Server or open index.html in browser
```

### Development Setup

The project includes professional development configuration:

```bash
# Files included for consistent development
├── .editorconfig       # Universal editor settings
├── .prettierignore     # Code formatting exclusions
├── .gitignore         # Git exclusions (.DS_Store)
```

## 📁 Project Structure

```
se_project_coffeeshop/
├── 📄 index.html              # Main HTML structure
├── 📁 pages/
│   └── 📄 index.css          # Main stylesheet (BEM methodology)
├── 📁 vendor/
│   └── 📄 normalize.css      # CSS reset normalization
├── 📁 images/                # Visual assets
│   ├── 🖼️ logo_coffeeshop_dark.svg
│   ├── 🖼️ inside_coffee_shop.png
│   ├── 🖼️ background_header.svg
│   └── 🖼️ background_recipes.svg
├── 📄 favicon.ico            # Site favicon
├── 📄 .editorconfig          # Code formatting rules
├── 📄 .gitignore            # Git ignore rules
├── 📄 .prettierignore       # Prettier exclusions
├── 📄 LICENSE               # MIT License
└── 📄 README.md             # Project documentation
```

## 🔧 Technologies Used

### Core Technologies

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **Semantic HTML5** with proper meta tags
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **Advanced CSS3** with animations and transforms
- ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google&logoColor=white) **Google Fonts** (Inter & Noto Serif)

### Methodologies & Architecture

- **Flat BEM**: Block Element Modifier methodology for scalable CSS
- **CSS Custom Properties**: Modern variable usage for maintainable styles
- **Semantic HTML**: Accessibility-first markup structure
- **Progressive Enhancement**: Mobile-first responsive approach

### External Integrations

- **YouTube Embed API**: Integrated recipe video content
- **Normalize.css v8.0.1**: Cross-browser consistency
- **Custom SVG Graphics**: Scalable vector illustrations

## 🎯 Features Implemented

### 🎨 Visual Design

- [x] Custom coffee shop branding and color scheme
- [x] Advanced typography with Google Fonts integration
- [x] Background images with proper positioning and sizing
- [x] Responsive image handling with proper alt attributes

### 🏗️ Technical Implementation

- [x] Flat BEM methodology for organized CSS
- [x] CSS animations and transform effects
- [x] Embedded YouTube iframes with custom styling
- [x] Advanced flexbox layouts for complex designs

### 📱 User Experience

- [x] Smooth navigation between sections
- [x] Interactive video content integration
- [x] Professional business hours and contact display
- [x] Accessibility considerations throughout

## 🎨 Design System

### Color Palette

```css
:root {
  --primary-blue: #3f96f3;
  --dark-blue: #0a2750;
  --text-dark: #000000;
  --text-gray: #6f6f6f;
  --background-white: #ffffff;
}
```

### Typography Scale

```css
/* Primary Font - Inter */
font-family: "Inter", Arial, sans-serif;

/* Accent Font - Noto Serif */
font-family: "Noto Serif", serif;

/* Font Sizes */
--heading-xl: 60px; /* Hero accent text */
--heading-l: 52px; /* Main headings */
--heading-m: 44px; /* Section titles */
--body-l: 16px; /* Body text */
--body-s: 14px; /* Footer text */
```

### Layout System

```css
/* Container Constraints */
.page {
  min-width: 1100px;
  max-width: 1600px;
  margin: 0 auto;
}

/* Section Spacing */
--section-padding: 100px 80px;
--content-max-width: 632px;
```

## 🏆 Best Practices Implemented

### HTML Structure

```html
<!-- Semantic markup with proper meta tags -->
<meta name="description" content="Coffee Shop Landing Page" />
<meta name="author" content="Marcos Freixanet" />

<!-- Accessible navigation -->
<nav class="nav">
  <ul class="nav__links">
    <li><a class="nav__link" href="#recipes">Recipes</a></li>
  </ul>
</nav>
```

### CSS Architecture

```css
/* BEM methodology example */
.recipes__video-caption {
  display: flex;
  justify-content: space-between;
  font-family: "Inter";
  font-weight: 500;
}

.recipes__video-caption-span {
  /* Modifier styling */
}
```

### Performance Optimization

```html
<!-- Preconnect to Google Fonts for faster loading -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Optimized font loading -->
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  rel="stylesheet"
/>
```

## 🚀 Development Roadmap

### Current Status ✅

- [x] Header section with navigation and hero content
- [x] Recipes section with embedded YouTube videos
- [x] Responsive design foundation
- [x] BEM methodology implementation

### In Progress 🚧

- [ ] **Reservation Section**: Custom form with validation
- [ ] **Menu Section**: Interactive menu display
- [ ] **About Section**: Coffee shop story and values
- [ ] **Footer**: Complete contact information and social links

### Future Enhancements 🎯

- [ ] **JavaScript Interactivity**: Form validation and smooth scrolling
- [ ] **Mobile Optimization**: Enhanced responsive breakpoints
- [ ] **Animation Library**: Advanced CSS animations and micro-interactions
- [ ] **CMS Integration**: Dynamic content management
- [ ] **E-commerce**: Online ordering system

## 🧪 Development Scripts

### Code Quality

```bash
# Format code with Prettier (if configured)
npx prettier --write .

# Validate HTML
# Use W3C Markup Validator

# Check CSS
# Use W3C CSS Validator
```

### Local Development

```bash
# Serve locally (Python 3)
python -m http.server 8000

# Or with Node.js
npx serve .

# Access at http://localhost:8000
```

## 🤝 Contributing

Contributions are welcome! This project follows standard web development practices.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Follow** BEM methodology for CSS classes
4. **Test** across multiple browsers
5. **Commit** with descriptive messages
6. **Push** and create a Pull Request

### Code Style Guidelines

- Use **Flat BEM** methodology for CSS classes
- Follow **2-space indentation** (configured in .editorconfig)
- Write **semantic HTML** with proper accessibility attributes
- Include **descriptive alt text** for all images
- Test **cross-browser compatibility**

### Issue Reporting

- Use GitHub issue templates
- Include browser and device information
- Provide screenshots for visual bugs
- Describe expected vs actual behavior

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2024 Marcos Freixanet
Permission is hereby granted, free of charge, to any person obtaining a copy...
```

## 👨‍💻 Contact & Social

**Marcos Freixanet** - Frontend Developer

- 🌐 **Portfolio**: [your-portfolio.com](https://your-portfolio.com)
- 💼 **LinkedIn**: [linkedin.com/in/marcos-freixanet](https://linkedin.com/in/marcos-freixanet)
- 📧 **Email**: marcos.freixanet@example.com
- 🐙 **GitHub**: [@freixanet](https://github.com/freixanet)

---

## 🙏 Acknowledgments

- **TripleTen**: For comprehensive web development curriculum
- **Google Fonts**: For beautiful typography (Inter & Noto Serif)
- **Normalize.css**: For cross-browser CSS consistency
- **YouTube**: For seamless video embedding capabilities
- **Web Development Community**: For inspiration and best practices

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/freixanet/se_project_coffeeshop)
![GitHub last commit](https://img.shields.io/github/last-commit/freixanet/se_project_coffeeshop)
![Website](https://img.shields.io/website?url=https%3A%2F%2Ffreixanet.github.io%2Fse_project_coffeeshop%2F)

---

<div align="center">

**Thank you for exploring TripleTen Coffee Shop!** ☕✨

[⬆ Back to top](#-tripleten-coffee-shop)

_Crafted with ❤️ and lots of ☕ by [Marcos Freixanet](https://github.com/freixanet)_

</div>
