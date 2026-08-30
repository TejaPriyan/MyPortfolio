# Contributing to MyPortfolio

Thanks for your interest in contributing! 🎉 This is a small static site, so the
contribution flow is intentionally lightweight.

## 🗂️ Ways to contribute

- 🐛 Report a bug (broken layout, console errors, typos, dead links)
- ✨ Suggest a feature (new section, animation, accessibility improvement)
- 🎨 Improve the design or responsiveness
- ⚡ Improve performance or accessibility
- 📝 Fix documentation

## 🚀 Getting started

1. **Fork** this repository and **clone** your fork:

   ```bash
   git clone https://github.com/<your-username>/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Create a branch** for your change:

   ```bash
   git checkout -b fix/short-description
   ```

3. **Run the site locally**:

   ```bash
   python3 -m http.server 8080
   # then open http://localhost:8080
   ```

4. **Make your changes.** Almost everything lives in `index.html` —
   markup, styles, and scripts.

5. **Validate your HTML** (this also runs in CI):

   ```bash
   npx html-validate index.html
   ```

6. **Test both themes** — toggle 🌊 cyan and 🔮 purple — and check the
   layout at mobile, tablet, and desktop widths.

7. **Commit and push**, then open a pull request against `main`:

   ```bash
   git add .
   git commit -m "fix: describe what you changed"
   git push origin fix/short-description
   ```

## 🧭 Guidelines

- Keep the site **dependency-free to build** — a single `index.html` that runs
  anywhere. New libraries must be loaded via CDN and justified in the PR.
- Don't introduce personally identifiable information (real phone numbers,
  private emails) — use the placeholder contact details already in the page.
- Prefer small, focused pull requests over large sweeping changes.
- Use clear commit messages (e.g. `fix: navbar overlap on mobile Safari`).

## 🐛 Reporting a bug

Open an issue using the **Bug report** template and include:

- What you expected vs. what happened
- Browser, OS, and screen size
- Console errors (if any) and steps to reproduce

## 📜 Code of Conduct

By participating in this project you agree to uphold the
[Code of Conduct](CODE_OF_CONDUCT.md). Be kind and constructive. 💙
