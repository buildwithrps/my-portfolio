# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Your portfolio code pushed to a GitHub repository
- Node.js and npm installed locally

## Method 1: Automatic Deployment (Recommended)

### Step 1: Push Your Code
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Click **Configure** if prompted

### Step 3: Automatic Build & Deploy
- The GitHub Actions workflow will automatically:
  - Build your Next.js app
  - Export static files
  - Deploy to GitHub Pages
- Your site will be available at: `https://buildwithrps.github.io/my-portfolio`

## Method 2: Manual Deployment

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Create gh-pages Branch
```bash
git checkout -b gh-pages
git add out/
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Step 3: Configure GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **gh-pages** branch and **/(root)** folder
4. Click **Save**

## Troubleshooting

### Common Issues

1. **Build Fails**: Check for TypeScript/ESLint errors
2. **Images Not Loading**: Ensure all image URLs are accessible
3. **Routing Issues**: Verify `basePath` in `next.config.ts` matches your repo name
4. **Styling Issues**: Check if Tailwind CSS is building correctly

### Build Commands

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run export` - Static export (same as build)
- `npm run lint` - Check for code issues

### File Structure After Build

```
out/
├── index.html          # Main page
├── _next/             # Next.js assets
├── .nojekyll          # Prevents Jekyll processing
└── [other assets]     # Images, SVGs, etc.
```

## Custom Domain (Optional)

1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Create a `CNAME` file in the `public/` folder with your domain
3. Configure your DNS settings to point to GitHub Pages

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Ensure all dependencies are properly installed
4. Check the Next.js documentation for static export

---

**Your portfolio will be live at: https://buildwithrps.github.io/my-portfolio**
