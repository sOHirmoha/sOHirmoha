# Testing Guide

This document outlines testing procedures for the Mohamed Saher Portfolio website.

## Quick Test

```bash
# Install dependencies
npm install

# Run build test
npm run build

# Run lint test
npm run lint

# Start development server
npm run dev
```

## Manual Testing Checklist

### 1. Build & Development

- [ ] `npm install` completes without errors
- [ ] `npm run build` completes successfully
- [ ] `npm run dev` starts development server
- [ ] `npm start` runs production build
- [ ] No console errors in terminal
- [ ] Build time is under 10 seconds

### 2. Visual Testing

#### Desktop (1280px+)
- [ ] Hero section displays correctly
- [ ] Navigation menu is visible
- [ ] All sections are properly aligned
- [ ] Text is readable and well-spaced
- [ ] Images/placeholders display correctly
- [ ] Footer is properly positioned

#### Tablet (640px-1024px)
- [ ] Layout adjusts appropriately
- [ ] Navigation becomes responsive
- [ ] Two-column layouts adapt
- [ ] Text remains readable
- [ ] Touch targets are adequate (min 44px)

#### Mobile (320px-640px)
- [ ] Mobile navigation (hamburger menu) works
- [ ] All content is accessible
- [ ] No horizontal scrolling
- [ ] Forms are easy to use
- [ ] Buttons are touch-friendly
- [ ] Text is legible without zooming

### 3. Dark/Light Mode

- [ ] Theme toggle button works
- [ ] Smooth transition between modes (300ms)
- [ ] All colors have proper contrast
- [ ] No visual glitches during transition
- [ ] Theme preference persists on reload
- [ ] System preference detection works

### 4. Navigation

- [ ] Logo click scrolls to top
- [ ] All nav links scroll to correct sections
- [ ] Smooth scrolling works
- [ ] Mobile menu opens/closes correctly
- [ ] Active states are visible
- [ ] Scroll-to-top button works

### 5. Animations

- [ ] Hero text animates on load (fade + translate)
- [ ] Scroll animations trigger at correct point
- [ ] Animations only play once (not on scroll back)
- [ ] All animations are smooth (60fps)
- [ ] No animation jank or stuttering
- [ ] Hover states work properly
- [ ] Button hover animations are subtle
- [ ] Card hover elevations work

### 6. Forms & Interaction

#### Contact Form
- [ ] All fields accept input
- [ ] Required field validation works
- [ ] Email validation works
- [ ] Message length validation works
- [ ] Error messages display clearly
- [ ] Submit button shows loading state
- [ ] Success message appears after submit
- [ ] Form resets after successful submit
- [ ] API endpoint returns proper response

#### Interactive Elements
- [ ] All buttons are clickable
- [ ] Hover states work
- [ ] Focus states are visible
- [ ] Links open correctly
- [ ] Social icons link properly

### 7. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab key navigates through all interactive elements
- [ ] Shift+Tab navigates backwards
- [ ] Enter activates buttons and links
- [ ] Escape closes mobile menu
- [ ] Focus indicators are clearly visible
- [ ] Tab order is logical
- [ ] Skip to main content link works

#### Screen Reader Testing
- [ ] Headings are in correct hierarchy (H1→H2→H3)
- [ ] Images have proper alt text
- [ ] Form labels are associated correctly
- [ ] ARIA labels are present where needed
- [ ] Dynamic content changes are announced
- [ ] Navigation landmarks are identified

#### Color Contrast
- [ ] Text has contrast ratio ≥4.5:1
- [ ] Interactive elements have adequate contrast
- [ ] Focus indicators are visible
- [ ] Error messages are distinguishable

#### Other Accessibility
- [ ] Page has proper language attribute
- [ ] All interactive elements have names
- [ ] No keyboard traps exist
- [ ] Reduced motion preference is respected

### 8. Performance

#### Load Time
- [ ] Initial page load is under 3 seconds
- [ ] Time to interactive is fast
- [ ] Images load efficiently
- [ ] No layout shift occurs

#### Runtime Performance
- [ ] Smooth scrolling performance
- [ ] Animations run at 60fps
- [ ] No memory leaks
- [ ] No console errors

### 9. SEO & Meta Tags

- [ ] Title tag is descriptive
- [ ] Meta description is present
- [ ] Open Graph tags are set
- [ ] Twitter Card tags are set
- [ ] Favicon displays correctly
- [ ] Semantic HTML is used
- [ ] Heading hierarchy is correct

### 10. Browser Compatibility

Test in the following browsers:

#### Desktop
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Mobile
- [ ] iOS Safari
- [ ] Chrome Mobile (Android)
- [ ] Samsung Internet

### 11. Responsive Breakpoints

Test at these specific widths:
- [ ] 320px (small mobile)
- [ ] 375px (iPhone)
- [ ] 640px (sm breakpoint)
- [ ] 768px (tablet)
- [ ] 1024px (md/lg breakpoint)
- [ ] 1280px (xl breakpoint)
- [ ] 1920px (full HD)

### 12. Content Verification

- [ ] All text is spelled correctly
- [ ] Professional tone is maintained
- [ ] Contact information is accurate
- [ ] Social media links are correct
- [ ] Case studies are complete
- [ ] Skills list is accurate
- [ ] Design principles are clear

## Automated Testing

### TypeScript Compilation
```bash
npm run build
```
Should complete with no TypeScript errors.

### Linting
```bash
npm run lint
```
Should pass with no errors or warnings.

## Testing with Reduced Motion

### macOS
1. System Preferences → Accessibility → Display
2. Enable "Reduce motion"
3. Test website - animations should be minimal

### Windows
1. Settings → Ease of Access → Display
2. Enable "Show animations in Windows"
3. Test website

### Browser DevTools
1. Open Chrome DevTools
2. Cmd/Ctrl + Shift + P
3. Type "Show Rendering"
4. Check "Emulate CSS prefers-reduced-motion"

## Performance Testing

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit with these settings:
   - Mode: Navigation
   - Categories: All
   - Device: Desktop & Mobile

Expected scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

### Network Throttling
Test with throttled network:
1. Chrome DevTools → Network tab
2. Set to "Fast 3G" or "Slow 3G"
3. Verify page loads acceptably

## Accessibility Testing Tools

### Recommended Tools
1. **axe DevTools** (Chrome/Firefox extension)
2. **WAVE** (Web Accessibility Evaluation Tool)
3. **Lighthouse** (Chrome DevTools)
4. **Screen Readers**:
   - NVDA (Windows)
   - JAWS (Windows)
   - VoiceOver (macOS/iOS)
   - TalkBack (Android)

### Running axe DevTools
1. Install axe DevTools extension
2. Open DevTools
3. Go to "axe DevTools" tab
4. Click "Scan ALL of my page"
5. Review and fix issues

## Bug Reporting

When reporting bugs, include:
- Browser and version
- Device and OS
- Screen size
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos if applicable

## Testing Environment Variables

Create `.env.local` for testing:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Common Issues & Solutions

### Build Failures
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

### TypeScript Errors
- Check tsconfig.json settings
- Verify all imports are correct
- Ensure types are properly defined

### Styling Issues
- Clear Tailwind cache
- Verify tailwind.config.ts is correct
- Check for conflicting CSS

### Animation Issues
- Verify Framer Motion is installed
- Check for JavaScript errors
- Test with reduced motion disabled

## Pre-Deployment Checklist

Before deploying to production:

- [ ] All tests pass
- [ ] Build completes successfully
- [ ] No console errors
- [ ] Environment variables configured
- [ ] Analytics set up (if applicable)
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] 404 page works
- [ ] All links tested
- [ ] Contact form tested in production
- [ ] Performance is acceptable
- [ ] Accessibility audit passed
- [ ] SEO meta tags verified
- [ ] Social sharing tested

## Continuous Testing

Recommend testing:
- After every code change
- Before every commit
- Before deployment
- After deployment (smoke test)
- Monthly accessibility audit
- Quarterly performance review

## Additional Resources

- [Next.js Testing Docs](https://nextjs.org/docs/testing)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)

---

Last updated: February 2024
