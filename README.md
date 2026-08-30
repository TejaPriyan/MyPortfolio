<h1 align="center">Teja Priyan — Portfolio Website</h1>

<p align="center">
  <img src="assets/banner.jpg" alt="Teja Priyan — Portfolio Website banner" width="100%">
</p>

<p align="center">
  <a href="https://portfoliotejapriyan.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/Live_Demo-portfoliotejapriyan.vercel.app-22d3ee?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge" alt="License: MIT"></a>
  <a href="#-contributing"><img src="https://img.shields.io/badge/PRs-welcome-22d3ee?style=for-the-badge" alt="PRs Welcome"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
</p>

---

## 📖 About

My personal developer portfolio — a modern, single-page website showcasing my **projects, skills, experience, and resume**. Built as a zero-build static site with a glassmorphism design, animated particle background, dual color themes, and an in-page resume viewer with download & print support.

> **Computer Science graduate and Full Stack Developer** specializing in intelligent systems, modern web applications, and AI-driven solutions — including computer-vision projects like helmet detection, number plate recognition, and traffic monitoring.

## ✨ Features

- 🌗 **Dual theme toggle** — Ocean (cyan) 🌊 / Amethyst (purple) 🔮 themes, with the choice persisted in `localStorage`
- ✨ **Interactive particle background** — canvas particles that react to hover and click ([particles.js](https://vincentgarreau.com/particles.js/))
- ⌨️ **Typing animation** — cycling role headlines ([Typed.js](https://github.com/mattboldt/typed.js/))
- 🫧 **Glassmorphism UI** — frosted glass cards with glow hover effects and smooth transitions
- 🎬 **Scroll-reveal animations** — sections animate into view ([ScrollReveal](https://scrollrevealjs.org/))
- 🔢 **Animated stat counters** — projects / experience / dedication counters trigger on scroll
- 📄 **In-page resume modal** — view, print, or download the resume without leaving the page
- 📱 **Fully responsive** — mobile-first layout that works on phones, tablets, and desktops
- ♿ **Reduced-motion friendly** — respects the user's `prefers-reduced-motion` setting
- ⚡ **Zero build step** — a single `index.html` with CDN dependencies; deploy anywhere instantly

## 🧩 Sections

| Section | Description |
| --- | --- |
| **Hero** | Name, animated role headline, quick stats, and CTA buttons |
| **About** | Education & background, plus a "what I do" summary |
| **Experience & Training** | Timeline of education, training, and project work |
| **Skills** | Frontend, backend & database, and AI/tooling skill badges |
| **Projects** | Featured work with tech tags and live demo links |
| **Contact** | Email, GitHub, and LinkedIn |
| **Resume modal** | Full resume with print & download (HTML) options |

## 🛠️ Tech Stack

| Layer | Technologies |
| --- | --- |
| **Structure & styling** | HTML5, CSS3 (custom properties), Tailwind CSS |
| **Logic & interactivity** | Vanilla JavaScript |
| **Animation & effects** | particles.js, Typed.js, ScrollReveal, GSAP |
| **Icons** | Font Awesome |
| **Document handling** | PDF.js |
| **Hosting** | Vercel |

> All libraries are loaded via CDN — there is nothing to install and no build step required.

## 📂 Project Structure

```
MyPortfolio/
├── index.html              # The entire site — markup, styles, and scripts
├── assets/
│   └── banner.jpg          # Banner image used in this README
├── .github/
│   ├── ISSUE_TEMPLATE/     # Bug report & feature request templates
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── CI.md               # Ready-to-paste GitHub Actions workflow (optional)
├── .editorconfig           # Consistent editor formatting rules
├── .gitignore
├── .htmlvalidate.json      # html-validate configuration for CI
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
└── vercel.json             # Vercel deployment configuration
```

## 🚀 Getting Started

### Prerequisites

- Any modern web browser
- (Optional) [Node.js](https://nodejs.org/) if you want to run the HTML validator locally

### Run locally

**Option 1 — just open it**

```bash
git clone https://github.com/TejaPriyan/MyPortfolio.git
cd MyPortfolio
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

**Option 2 — serve it** (recommended, so everything behaves exactly like production)

```bash
# Python
python3 -m http.server 8080
# then visit http://localhost:8080

# or Node
npx serve .
```

> **Note:** Styling and libraries load from CDNs, so an internet connection is required.

### Validate HTML (optional)

```bash
npx html-validate index.html
```

The relaxed rule set lives in [`.htmlvalidate.json`](.htmlvalidate.json), and a
ready-to-paste GitHub Actions workflow is documented in
[`.github/CI.md`](.github/CI.md).

## 🌍 Deployment

The site is a single static file — it deploys anywhere in seconds.

<details>
<summary><strong>Vercel</strong> (current host)</summary>

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects a static site — just click **Deploy**

Or with the CLI:

```bash
npm i -g vercel
vercel --prod
```

Settings for this repo are in [`vercel.json`](vercel.json).

</details>

<details>
<summary><strong>GitHub Pages</strong></summary>

1. Go to **Settings → Pages**
2. Under *Build and deployment*, choose **Deploy from a branch**
3. Select `main` / `root` and save

The site will be live at `https://<username>.github.io/MyPortfolio/`.

</details>

<details>
<summary><strong>Netlify</strong></summary>

Drag-and-drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop), or:

```bash
npm i -g netlify-cli
netlify deploy --prod --dir .
```

</details>

## 🔧 Customization

Everything lives in [`index.html`](index.html) — search for these keys:

| I want to change… | Look for |
| --- | --- |
| Name & page title | `<title>`, the `<h1>` in the navbar, and the hero heading |
| Typing role headlines | the `strings: [...]` array in the `Typed("#typing", {...})` call |
| About / experience text | the `#about` and `#experience` sections |
| Skill badges | the `#skills` section |
| Projects & demo links | the `#projects` section (`window.open(...)` buttons) |
| Contact links | the `#contact` section |
| Resume content | the `#htmlResume` container inside the resume modal |
| Theme colors | the `:root` and `body.theme-purple` CSS variables |

## 🔗 Live Projects Featured on the Site

| Project | Link |
| --- | --- |
| 🏨 Hotel Booking Website | [veltechhotel.onrender.com](https://veltechhotel.onrender.com/) |
| 🎮 Gaming Hub Platform | [tejagamehub.netlify.app](https://tejagamehub.netlify.app/) |
| 🧘 Glass‑Tech Sanctuary | [myself-tejapriyan.onrender.com](https://myself-tejapriyan.onrender.com/) |
| 🌐 This portfolio | [portfoliotejapriyan.vercel.app](https://portfoliotejapriyan.vercel.app/) |

## 🤝 Contributing

Found a typo, a bug, or have an idea to make the site better? Contributions are welcome!
See [CONTRIBUTING.md](CONTRIBUTING.md) for how to get started, and please read the [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and share.

## 📬 Contact

- 🌐 Portfolio: [portfoliotejapriyan.vercel.app](https://portfoliotejapriyan.vercel.app/)
- 💻 GitHub: [@TejaPriyan](https://github.com/TejaPriyan)
- 💼 LinkedIn: [in/tejapriyan](https://www.linkedin.com/in/tejapriyan)

---

<p align="center">Crafted with <span style="color:#22d3ee">♥</span> and code by <strong>Teja Priyan</strong></p>
