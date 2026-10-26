# NYCUNO Website

A modernization of the NYCUNO website using **Astro** and **Tailwind CSS**. The goal is to establish a stable static-site foundation, migrate existing pages while preserving their functionality, and later introduce **Decap CMS** so authorized management users can update website content.

## Project Status

- [x] Architecture agreed: Astro + Tailwind CSS
- [ ] Initialize Astro project and local development setup
- [ ] Migrate existing website pages
- [ ] Validate visual consistency, responsiveness, and integrations
- [ ] Integrate Decap CMS for content management
- [ ] Configure and validate production deployment

## Technology Stack

- [Astro](https://astro.build/) — static site framework
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [GitHub](https://github.com/) — source control
- GitHub Pages — planned hosting with the organization's existing custom domain
- [Decap CMS](https://decapcms.org/) — planned content management system

## Getting Started

### Prerequisites

- Node.js version supported by the installed Astro release
- npm

### Install Dependencies

After cloning the repository:

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Build for Production

```bash
npm run build
```

Astro generates the static production site in the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

## Planned Project Structure

The structure below is the intended direction and may evolve during implementation.

```text
public/
  assets/
  fonts/
  images/
src/
  components/
    Header.astro
    Footer.astro
    CookieConsent.astro
    LanguageSelector.astro
  layouts/
    MainLayout.astro
  pages/
  styles/
    global.css
astro.config.mjs
package.json
```

Shared elements such as the header, footer, cookie consent, and language selector should be implemented as reusable components where appropriate.

## Migration Principles

1. **Preserve the existing experience first.** Prioritize visual and functional parity before introducing design changes.
2. **Migrate incrementally.** Establish the Astro foundation, test a representative page, and then migrate the remaining pages in groups.
3. **Preserve existing functionality.** Test navigation, responsive layouts, forms, validation, cookie consent, language selection, app download links, and third-party integrations.
4. **Adopt Tailwind incrementally.** Replace duplicated and unnecessary styling while retaining third-party styles when replacing them would introduce unnecessary risk.
5. **Separate content from presentation.** Prepare appropriate content for Decap CMS after the static Astro site is stable.
6. **Protect production.** Validate builds and deployment behavior before publishing changes to the live website.

## Planned Content Management

Decap CMS will be introduced after the Astro migration is stable. The intended workflow allows authorized editors to update approved content fields and publish changes directly to the live website through the repository and automated deployment pipeline.

CMS authentication and editor permissions must be configured securely. GitHub Pages serves static output and does not itself provide the OAuth backend required by every Decap CMS authentication setup.

## Deployment

Production hosting is planned for GitHub Pages using the organization's existing custom domain.

Deployment configuration—including Astro's `site` setting, any required base path, the domain `CNAME` file, and the GitHub Actions workflow—will be finalized during the deployment phase.

Do not change production DNS or GitHub Pages settings during the initial local setup.

## Quality Checklist

Before the migration is considered production-ready, verify:

- [ ] All primary pages and intended URLs work.
- [ ] Internal links and asset paths resolve correctly.
- [ ] Layouts work across supported screen sizes and browsers.
- [ ] Header, footer, cookie consent, and language selector work.
- [ ] Contact form, validation, CAPTCHA, and external integrations work.
- [ ] App download links and social links work.
- [ ] `npm run build` completes successfully.
- [ ] CMS authentication, content editing, publishing, and rollback are tested before management handover.

## Development Workflow

- Keep changes focused and incremental.
- Run `npm run build` before submitting changes intended for deployment.
- Review visual and functional behavior after each page migration.
- Preserve Git history so incorrect changes can be reverted.
- Never commit secrets, OAuth client secrets, or personal access tokens to the repository.

## License

No license has been specified yet. Confirm the organization's licensing requirements before adding one.
