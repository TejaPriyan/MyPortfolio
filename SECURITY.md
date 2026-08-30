# Security Policy

## Supported Versions

This is a static, client-side portfolio website with no backend, database, or
user data collection. The latest commit on `main` is the only supported
version.

| Version | Supported |
| ------- | --------- |
| latest `main` | ✅ |

## Reporting a Vulnerability

Found something that could be abused (e.g. a malicious script injection vector
via CDN dependencies, or anything worse)? Please report it responsibly:

1. Use GitHub's **private vulnerability reporting**:
   *Security → Report a vulnerability* on this repository, **or**
2. Contact the maintainer directly via [GitHub](https://github.com/TejaPriyan).

Please **do not** open a public issue for security concerns. You should get a
response within a few days. Thanks for helping keep this project safe! 🛡️

## Notes

- All third-party libraries (Tailwind, Typed.js, particles.js, ScrollReveal,
  Font Awesome, GSAP, PDF.js) are loaded from public CDNs. If a CDN dependency
  is ever found to be compromised, it will be pinned or replaced.
- This site stores only one thing in your browser: your theme preference
  (`localStorage`). No cookies, analytics, or tracking.
