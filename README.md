# PrinterMake Developer Documentation

Static HTML documentation site for PrinterMake developers.

## Build

```bash
npm run build
```

This creates a `dist/` folder with the compiled HTML files ready for deployment.

## Development

```bash
npm run dev
```

Opens a local server on `http://localhost:3000`

## Deployment

The site is deployed to Cloudflare Pages with:
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`

All pages are served from a single `index.html` file with client-side navigation.
