# CI — HTML Validation (optional)

GitHub Actions can't be pushed by the automation that opened this PR, so the
workflow file is provided here. To enable CI on this repository:

1. Go to **Add file → Create new file**
2. Name it `.github/workflows/ci.yml`
3. Paste the content below and commit

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  validate:
    name: Validate HTML
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install html-validate
        run: npm install --no-fund --no-audit html-validate@8

      - name: Validate index.html
        run: npx html-validate index.html

  repo-health:
    name: Repository health check
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Check required community files exist
        run: |
          set -e
          for f in README.md LICENSE CONTRIBUTING.md CODE_OF_CONDUCT.md .gitignore; do
            if [ -f "$f" ]; then
              echo "✅ $f"
            else
              echo "❌ Missing required file: $f" >&2
              exit 1
            fi
          done
```

The validation rules live in [`.htmlvalidate.json`](../.htmlvalidate.json) —
a relaxed config tuned for the existing `index.html`.
