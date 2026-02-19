# Contributing

Guidelines for contributing to the Meta Blend website project.

## Development Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser

## Code Standards

### TypeScript

- Strict mode is enabled
- All components and functions must have proper type annotations
- Use interfaces for component props, not type aliases
- Use `React.ReactNode` for children types

### Components

- Place page components in `src/app/`
- Place reusable components in `src/components/ui/`
- Place layout components in `src/components/layout/`
- Place homepage sections in `src/components/sections/`
- Use `forwardRef` for components that accept refs
- Include `displayName` for forwarded ref components

### Styling

- Use Tailwind CSS utility classes
- Define design tokens in `globals.css` under `@theme inline`
- Use the `cn()` utility for conditional class names
- Maintain WCAG AA contrast ratios (4.5:1 minimum for normal text)

### Data

- Place static data in `src/content/`
- Define TypeScript interfaces for data structures
- Export data as named constants

## Commit Messages

Use clear, descriptive commit messages:

```
feat: add contact form validation
fix: resolve heading order on services page
docs: update README with deployment instructions
style: improve color contrast for accessibility
```

## Pre-commit Checklist

Before pushing changes:

1. Run `npm run lint` -- zero errors and warnings
2. Run `npm run build` -- build completes successfully
3. Verify changes in the browser across routes
4. Check that new text meets WCAG AA contrast requirements
