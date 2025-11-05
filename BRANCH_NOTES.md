# Branch Notes: Custom Prompts and Rules

## Overview

`.cursorrules` is Cursor's configuration file for customizing AI behavior. Use it to enforce coding standards, define project-specific patterns, and guide AI responses according to your team's preferences.

## What is .cursorrules?

A `.cursorrules` file:
- Lives in your project root
- Contains instructions for Cursor AI
- Applies to all AI features (Chat, Composer, Agent)
- Enforces project-specific guidelines
- Customizes AI behavior

## Creating .cursorrules

Create a file named `.cursorrules` in your project root:

```
project-root/
├── .cursorrules  ← Create this file
├── src/
├── package.json
└── README.md
```

## Basic Structure

```.cursorrules
# Project Information
This is a Next.js 14 project using TypeScript, Tailwind CSS, and Prisma.

# Coding Standards
- Use functional components with TypeScript
- Prefer named exports over default exports
- Use async/await instead of .then()
- Follow Airbnb style guide

# File Organization
- Components in src/components/
- API routes in src/app/api/
- Types in src/types/
- Utils in src/lib/

# Testing
- Write tests using Jest and React Testing Library
- Test files should be named *.test.tsx
- Aim for 80% code coverage
```

## Common Rules

### 1. Technology Stack
```
We use:
- Next.js 14 with App Router
- TypeScript (strict mode)
- Tailwind CSS for styling
- Prisma for database
- NextAuth for authentication
```

### 2. Code Style
```
Code Style Rules:
- Use 2-space indentation
- Max line length: 100 characters
- Use single quotes for strings
- Add semicolons
- Use trailing commas
```

### 3. Component Patterns
```
React Component Rules:
- All components must be TypeScript
- Use React.FC type for functional components
- Props interface named ComponentNameProps
- Destructure props in function signature
- Use React hooks (no class components)
```

### 4. Error Handling
```
Error Handling:
- All async functions must have try-catch
- Use custom error classes
- Log errors with context
- Show user-friendly error messages
- Never expose internal errors to users
```

### 5. Testing Requirements
```
Testing:
- Unit tests for all utilities
- Integration tests for API routes
- Component tests for all UI
- E2E tests for critical paths
- Mock external services
```

### 6. Documentation
```
Documentation:
- JSDoc for all exported functions
- README for each major module
- Inline comments for complex logic
- API documentation with examples
- Keep docs up-to-date
```

### 7. Security
```
Security Rules:
- Validate all user input
- Sanitize data before database queries
- Use parameterized queries (no SQL injection)
- Implement rate limiting on APIs
- Never log sensitive information
- Use environment variables for secrets
```

## Advanced Rules

### Framework-Specific

**Next.js Project:**
```
Next.js Specific:
- Use Server Components by default
- Client Components only when needed (mark with 'use client')
- Use Server Actions for mutations
- Implement proper loading and error states
- Use Next.js Image component for images
- Follow Next.js file-based routing conventions
```

**React Native:**
```
React Native:
- Use StyleSheet.create for styles
- Follow platform-specific guidelines
- Test on both iOS and Android
- Use Platform.select() for platform differences
- Optimize for performance (memoization, lazy loading)
```

### Team Conventions

```
Team Conventions:
- Branch naming: feature/*, bugfix/*, hotfix/*
- Commit format: type(scope): description
- PR requires 2 approvals
- All code must pass CI before merge
- Update tests with code changes
```

### Accessibility

```
Accessibility:
- All interactive elements must have ARIA labels
- Maintain 4.5:1 color contrast ratio
- Support keyboard navigation
- Test with screen readers
- Follow WCAG 2.1 AA standards
```

## Real-World Examples

### Example 1: Strict TypeScript Project
```.cursorrules
Project: E-commerce Platform

Stack:
- TypeScript (strict mode, no any types)
- React 18 with TypeScript
- Redux Toolkit for state
- RTK Query for API calls
- Material-UI for components

Rules:
1. All components must have TypeScript interfaces for props
2. No `any` type - use `unknown` if type is truly unknown
3. Explicit return types on all functions
4. Use Redux Toolkit's createSlice for state
5. API calls only through RTK Query
6. All forms use React Hook Form with Zod validation
7. Error boundaries around major feature areas
8. Loading states for all async operations

File Structure:
- Features organized by domain (src/features/auth/, src/features/products/)
- Each feature has: components/, hooks/, slices/, api/
- Shared utilities in src/lib/
- Type definitions in src/types/
```

### Example 2: Microservices Backend
```.cursorrules
Project: Microservices Architecture

Stack:
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- Redis for caching
- RabbitMQ for messaging

Service Rules:
1. Each service is independent (no direct service-to-service calls)
2. Communication only via message queue
3. Each service has own database
4. Use dependency injection pattern
5. Centralized logging to ELK stack
6. Health check endpoint required
7. Graceful shutdown handling
8. Rate limiting on all public endpoints

API Design:
- RESTful conventions
- Versioned APIs (/api/v1/)
- Consistent error response format
- Request/response logging
- JWT authentication on protected routes
- API documentation with Swagger
```

### Example 3: Mobile App
```.cursorrules
Project: Mobile Banking App

Stack:
- React Native
- TypeScript
- Redux for state
- React Navigation
- Async Storage

Security Requirements:
- All API calls must use HTTPS
- Implement certificate pinning
- Encrypt sensitive data locally
- No console.log in production
- Implement biometric authentication
- Session timeout after 5 minutes
- Secure token storage

UX Requirements:
- Loading indicators for all async operations
- Offline support with sync when online
- Pull-to-refresh on lists
- Error messages user-friendly
- Haptic feedback on important actions
- Dark mode support
```

## Tips for Writing Rules

### 1. Be Specific
**Vague:** "Write good code"  
**Specific:** "Use async/await for asynchronous code, not .then() chains"

### 2. Provide Examples
```
Bad: const data = response.json()

Good: const data = await response.json()
```

### 3. Explain Why
```
Use named exports instead of default exports.
Reason: Better IDE support and easier refactoring.
```

### 4. Group Related Rules
Organize by category (Style, Testing, Security, etc.)

### 5. Keep Updated
Review and update rules as project evolves

## Testing Your Rules

After creating `.cursorrules`:

1. Open Cursor Chat
2. Ask: "What are the coding standards for this project?"
3. Cursor should reference your rules
4. Try generating code - it should follow your rules

## Common Use Cases

### 1. Onboarding
New developers can ask Cursor about project conventions

### 2. Consistency
Ensures all AI-generated code follows same standards

### 3. Best Practices
Enforces security, accessibility, performance guidelines

### 4. Framework Conventions
Guides AI to use framework-specific patterns

## Limitations

- Rules are guidelines, not hard constraints
- AI may still deviate occasionally
- Review AI-generated code always
- Rules don't replace code review
- Keep rules reasonable in scope

## Next Steps

Congratulations! You've completed the Cursor workshop!

**Continue Learning:**
- Apply these skills to your projects
- Explore Cursor documentation
- Join Cursor community
- Share your learnings
- Build amazing things!

---

See **TASK.md** for customization exercises!
