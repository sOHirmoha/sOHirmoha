# Deployment Guide

This guide will help you deploy Mohamed Saher's portfolio website to various hosting platforms.

## Quick Start

The portfolio is built with Next.js and can be deployed to any platform that supports Node.js applications.

## Recommended Platforms

### 1. Vercel (Recommended)

Vercel is the easiest deployment option for Next.js applications.

**Steps:**

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your repository
5. Configure the project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

**Environment Variables:**
- No environment variables required for basic deployment

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### 2. Netlify

**Steps:**

1. Push your code to a Git repository
2. Visit [netlify.com](https://netlify.com) and login
3. Click "New site from Git"
4. Choose your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

**netlify.toml Configuration:**

Create a `netlify.toml` file in the project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 3. AWS Amplify

**Steps:**

1. Push code to GitHub, GitLab, or Bitbucket
2. Open AWS Amplify Console
3. Click "New app" → "Host web app"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
6. Deploy

### 4. DigitalOcean App Platform

**Steps:**

1. Push code to GitHub
2. Visit DigitalOcean App Platform
3. Click "Create App"
4. Select your repository
5. Configure:
   - Type: Web Service
   - Build Command: `npm run build`
   - Run Command: `npm start`
6. Deploy

### 5. Docker Deployment

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
```

Update `next.config.ts` to enable standalone output:

```typescript
const nextConfig = {
  output: 'standalone',
};
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Pre-Deployment Checklist

- [ ] Update personal information in components
- [ ] Replace social media links with actual URLs
- [ ] Add real contact email
- [ ] Customize case studies with actual projects
- [ ] Add real project images/mockups
- [ ] Update meta tags and SEO information
- [ ] Test dark/light mode switching
- [ ] Test all form validations
- [ ] Verify accessibility with screen reader
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Test all internal navigation links

## Performance Optimization

### Image Optimization

Use Next.js Image component for all images:

```jsx
import Image from 'next/image';

<Image 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={500} 
  height={300}
  priority // for above-the-fold images
/>
```

### Analytics

Add Google Analytics or Vercel Analytics:

**Google Analytics (GA4):**

1. Create `app/analytics.tsx`:

```typescript
'use client';

import Script from 'next/script';

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  );
}
```

2. Add to `app/layout.tsx`:

```typescript
import { Analytics } from './analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Custom Domain Setup

### DNS Configuration

Point your domain to the hosting platform:

**Vercel:**
- A Record: `76.76.21.21`
- CNAME: `cname.vercel-dns.com`

**Netlify:**
- A Record: `75.2.60.5`
- CNAME: `[your-site].netlify.app`

### SSL Certificate

Most platforms provide automatic SSL certificates. If not:
- Use Let's Encrypt (free)
- Configure through your hosting platform's dashboard

## Monitoring

### Error Tracking

Consider adding error tracking:

**Sentry:**

```bash
npm install @sentry/nextjs
```

**Vercel Analytics:**

```bash
npm install @vercel/analytics
```

Add to layout:

```typescript
import { Analytics } from '@vercel/analytics/react';

<Analytics />
```

## Maintenance

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

### Security

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Troubleshooting

### Build Failures

1. Clear cache: `rm -rf .next node_modules && npm install`
2. Check Node version: `node -v` (should be 18.x or higher)
3. Review build logs for specific errors

### Performance Issues

1. Run Lighthouse audit
2. Optimize images
3. Enable caching headers
4. Use CDN for static assets

### Contact Form

The current implementation is client-side only. For production:

1. Set up email service (SendGrid, AWS SES)
2. Create serverless function to handle submissions
3. Add CAPTCHA protection
4. Implement rate limiting

## Support

For deployment issues:
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com

---

Last updated: 2024
