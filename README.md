# Jan Tech Website

A modern, responsive company website for **Jan Tech**, a technology company based in **Pokhara, Nepal**.

The website is being built with React, Tailwind CSS, and modern frontend development practices. It is designed to present Jan Tech’s services, training programs, portfolio, products, company story, and contact information in a clean and professional way.

## About Jan Tech

Jan Tech is a Pokhara-based technology company founded by three Shrestha brothers.

Our story is built around three ideas:

- **Our Roots** — Agriculture and community
- **Knowledge** — Learning, training, and practical education
- **Our Future** — Technology and innovation

Jan Tech focuses on creating useful digital solutions, practical technology training, and modern software products.

## Website Features

The current website includes:

- Responsive sticky navigation
- Mobile navigation menu
- Hero section
- About Jan Tech section
- Company statistics
- Services section
- Training section
- Portfolio section
- Products section
- Contact form UI
- Google Maps location
- Responsive footer
- Mobile-first responsive design
- Reusable React components
- Accessible navigation and form elements

## Services

Jan Tech currently presents the following services:

- Web & App Development
- Mobile App Development
- Web Hosting
- Domain Registration
- Maintenance & Support
- Training & Education

## Training

Current training areas include:

- Basic Computer Training
- System & Network Support
- English & Japanese Language
- Career & Technical Mentoring

## Products

### Khaiwa

A social and entertainment platform designed around community, communication, digital interactions, and interactive experiences.

### Jaaunepal

A digital product being developed by Jan Tech with a focus on useful technology experiences for people in Nepal and beyond.

## Portfolio

The portfolio currently focuses on two main development areas:

- Web Development
- Mobile Application Development

Real Jan Tech project examples can be added as the company portfolio grows.

## Technology Stack

The website uses:

- React
- JavaScript
- JSX
- Vite
- Tailwind CSS
- Lucide React
- npm
- Git
- GitHub

Supabase will be added for:

- Dynamic service data
- Contact inquiry storage
- Secure database access using Row Level Security

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Container.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Section.jsx
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── Statistics.jsx
│   │   └── Training.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── FormField.jsx
│       ├── PortfolioCard.jsx
│       ├── ProductCard.jsx
│       ├── SectionHeading.jsx
│       ├── ServiceCard.jsx
│       ├── StatCard.jsx
│       ├── TextAreaField.jsx
│       └── TrainingCard.jsx
│
├── constants/
│   └── navigation.js
│
├── data/
│   ├── about.js
│   ├── portfolio.js
│   ├── products.js
│   ├── services.js
│   ├── stats.js
│   └── training.js
│
├── lib/
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/itsora7/jan-tech-website.git
```

### 2. Open the project folder

```bash
cd jan-tech-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

Usually:

```text
http://localhost:5173
```

## Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Environment Variables

Supabase has not yet been connected.

When Supabase is added, the project will use:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key
```

The real `.env.local` file must not be committed to GitHub.

## Design Direction

The Jan Tech visual identity uses:

- Dark navy
- Green
- Blue
- Red brand accents
- White and light-gray backgrounds
- Rounded cards
- Subtle shadows
- Clean typography
- Responsive layouts

The visual story follows:

**Roots → Knowledge → Technology**

with green representing roots, navy representing structure and identity, and blue representing technology and the future.

## Responsive Design

The website is designed for:

- Small mobile screens
- Large mobile screens
- Tablets
- Laptops
- Desktop monitors

Tailwind CSS is used with a mobile-first approach.

## Accessibility

The project includes:

- Semantic HTML
- Accessible form labels
- Keyboard-friendly buttons
- Visible focus states
- `aria-expanded` for mobile navigation
- Descriptive alt text
- Accessible navigation landmarks

## Current Development Status

Completed:

- Frontend structure
- Reusable components
- Header
- Hero
- About
- Statistics
- Services
- Training
- Portfolio
- Products
- Contact UI
- Footer
- Google Maps location
- Git and GitHub setup

Next planned work:

- Supabase project setup
- Services database table
- Contact inquiry database table
- Row Level Security policies
- Dynamic services loading
- Contact form submission
- Final responsive testing
- Accessibility review
- Production build
- Deployment

## Git Workflow

Typical development workflow:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

## Repository

GitHub:

`https://github.com/itsora7/jan-tech-website`

## Location

**Jan Tech**
Pokhara, Nepal

6XCF+7RC, Barahi Margh
Pokhara 33700, Nepal

## License

This project does not currently include an open-source license.

All rights reserved unless a license is added later.

---

© Jan Tech. All rights reserved.
