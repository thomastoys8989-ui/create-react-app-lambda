// Wrote by ThomasConway
# PrinterMake Developer Documentation

Comprehensive documentation website for PrinterMake developers.

## Features

- **Getting Started** - Setup and first steps
- **Studio Editor** - Complete guide to the 3D editor
- **Scripting** - Visual and C# scripting tutorials
- **Publishing** - How to share your games
- **API Reference** - Complete backend and game API docs
- **Examples** - Real-world tutorials and examples

## Running Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Building for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## Structure

```
src/
├── App.tsx          - Main app with routing
├── App.css          - Styles
├── main.tsx         - Entry point
└── pages/
    ├── Home.tsx                  - Landing page
    ├── GettingStarted.tsx        - Setup guide
    ├── Studio.tsx                - Editor guide
    ├── Scripting.tsx             - Scripting guide
    ├── Publishing.tsx            - Publishing guide
    ├── API.tsx                   - API reference
    └── Examples.tsx              - Tutorials
```

## Deployment

The docs can be deployed to any static hosting (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
# Deploy the dist folder
```

## Content

All pages are organized in a clear, searchable sidebar navigation. Each section includes:

- Step-by-step guides
- Code examples
- API documentation
- Best practices
- Tips and tricks

## Contributing

To add new content:

1. Create a new page in `src/pages/`
2. Add a route in `App.tsx`
3. Add a link in the sidebar navigation

---

Made with ❤️ for PrinterMake developers
