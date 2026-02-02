# Quick Start Guide

Get Mohamed Saher's portfolio up and running in minutes.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd mohamed-saher-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Quick Customization

### 1. Update Personal Info (5 minutes)

**File: `components/Hero.tsx`**
```typescript
// Line 18-33: Update name and title
Mohamed Saher → Your Name
Graphic & UI/UX Designer → Your Title
7 Years of Freelance Experience → Your Experience
```

**File: `components/About.tsx`**
```typescript
// Lines 32-46: Update biography
Replace with your own story and experience
```

**File: `components/Contact.tsx`**
```typescript
// Lines 75-85: Update contact information
mohamed.saher@design.com → your@email.com
+1 (555) 123-4567 → Your phone
Available Worldwide → Your location
```

**File: `app/layout.tsx`**
```typescript
// Lines 19-35: Update SEO metadata
Update title, description, and keywords
```

### 2. Update Case Studies (10 minutes)

**File: `components/CaseStudies.tsx`**

Replace the `caseStudies` array (lines 10-155) with your own projects:

```typescript
{
  title: "Your Project Name",
  category: "Design Category",
  duration: "Project Duration",
  role: "Your Role",
  problem: "The challenge...",
  solution: "Your solution...",
  process: ["Step 1", "Step 2", ...],
  results: ["Result 1", "Result 2", ...],
  tags: ["Tag1", "Tag2"],
  color: "from-blue-500 to-cyan-500"
}
```

### 3. Update Social Links (2 minutes)

**Files: `components/Contact.tsx` and `components/Footer.tsx`**

```typescript
// Line 89-92 in Contact.tsx and similar in Footer.tsx
{ icon: FaLinkedin, label: "LinkedIn", href: "your-linkedin-url" },
{ icon: FaBehance, label: "Behance", href: "your-behance-url" },
{ icon: FaDribbble, label: "Dribbble", href: "your-dribbble-url" },
{ icon: FaGithub, label: "GitHub", href: "your-github-url" },
```

### 4. Add Your Photo (Optional)

Replace the placeholder in `components/About.tsx` (lines 68-78):

```typescript
// Current: Text placeholder
<span className="text-8xl font-display font-bold">MS</span>

// Replace with:
<Image 
  src="/images/profile.jpg" 
  alt="Your Name"
  width={400}
  height={400}
  className="rounded-2xl"
/>
```

Don't forget to:
1. Add your image to `/public/images/`
2. Import Next.js Image component

## Deploy in 5 Minutes

### Vercel (Easiest)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

Done! Your site is live.

### Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Choose your repository
5. Click "Deploy site"

## Common Issues

### Issue: Build fails
**Solution**: Clear cache and reinstall
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Dark mode not working
**Solution**: Clear browser localStorage
```javascript
// In browser console:
localStorage.clear()
// Then refresh the page
```

### Issue: Fonts not loading
**Solution**: Google Fonts are automatically loaded by Next.js. If issues persist:
1. Check internet connection
2. Clear browser cache
3. Restart dev server

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── CaseStudies.tsx   # Projects section
│   ├── Contact.tsx       # Contact form
│   └── ...
├── public/               # Static files
│   └── favicon.svg       # Site icon
└── tailwind.config.ts    # Tailwind config
```

## Next Steps

1. ✅ Customize personal information
2. ✅ Update case studies with real projects
3. ✅ Add real images
4. ✅ Test on mobile devices
5. ✅ Deploy to production
6. ✅ Set up custom domain
7. ✅ Add analytics
8. ✅ Configure contact form backend

## Need Help?

- **Documentation**: See README.md
- **Deployment**: See DEPLOYMENT.md
- **Features**: See FEATURES.md
- **Technical**: See PROJECT_SUMMARY.md

---

**Tip**: Start with small changes and test frequently. Build often to catch errors early.
