# Contributing to Mohamed Saher Portfolio

Thank you for your interest in contributing to this portfolio website!

## Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mohamed-saher-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to http://localhost:3000

## Code Standards

### TypeScript
- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid using `any` type
- Enable strict mode

### React Components
- Use functional components with hooks
- Add "use client" directive for interactive components
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

### Styling
- Use Tailwind CSS utility classes
- Follow the 8pt grid system (spacing: 4, 8, 16, 24, 32, 48, 64, 96, 128)
- Use design tokens from tailwind.config.ts
- Use custom classes from globals.css for common patterns

### Animations
- Use Framer Motion for all animations
- Keep animations between 200-400ms for UI interactions
- Use ease-out easing for natural feel
- Respect `prefers-reduced-motion` (already handled in globals.css)
- Test animations at 60fps

### Accessibility
- Maintain WCAG 2.1 AA compliance
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios ≥4.5:1

## Component Structure

```typescript
"use client"; // Add if component has interactivity

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ComponentName() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="section-id" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Component content */}
        </motion.div>
      </div>
    </section>
  );
}
```

## Testing Before Commit

1. **Build check**
   ```bash
   npm run build
   ```

2. **Lint check**
   ```bash
   npm run lint
   ```

3. **Visual testing**
   - Test on multiple screen sizes (320px, 640px, 1024px, 1280px+)
   - Test dark and light modes
   - Test keyboard navigation
   - Test with reduced motion enabled
   - Verify all animations are smooth (60fps)

4. **Browser testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

## Adding New Features

### Adding a New Section

1. Create component in `/components` directory
2. Follow the structure above
3. Add to `/app/page.tsx`
4. Update navigation in `/components/Header.tsx`
5. Test responsiveness and accessibility

### Modifying Content

- Update component files directly
- Maintain the professional tone
- Keep copy concise and action-oriented
- Update meta tags in `/app/layout.tsx` if needed

### Updating Styles

- Modify `/app/globals.css` for global styles
- Update `/tailwind.config.ts` for design tokens
- Follow the existing 8pt grid system
- Maintain dark mode compatibility

## Git Workflow

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes
   - Write clean, readable code
   - Follow existing patterns
   - Add comments for complex logic

3. Test thoroughly
   - Run build and lint
   - Test in multiple browsers
   - Verify accessibility

4. Commit with descriptive message
   ```bash
   git commit -m "feat: add new feature description"
   ```

5. Push and create pull request
   ```bash
   git push origin feature/your-feature-name
   ```

## Commit Message Format

Use conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Example: `feat: add animation to skills section`

## Performance Guidelines

- Keep bundle size minimal
- Use lazy loading for below-fold content
- Optimize images (use WebP, proper sizing)
- Avoid unnecessary re-renders
- Use GPU-accelerated properties (transform, opacity)
- Maintain 60fps for all animations

## Accessibility Checklist

- [ ] Semantic HTML used
- [ ] Proper heading hierarchy (H1-H6)
- [ ] All images have alt text
- [ ] Color contrast ≥4.5:1
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] ARIA labels where needed
- [ ] Screen reader tested
- [ ] Reduced motion supported

## Questions?

If you have questions or need clarification:
1. Check existing documentation files
2. Review similar components in the codebase
3. Create an issue for discussion

## Code Review

All contributions will be reviewed for:
- Code quality and readability
- Performance impact
- Accessibility compliance
- Design consistency
- Browser compatibility

Thank you for contributing! 🎨
