# Example .cursorrules Files

This file contains example `.cursorrules` configurations for different project types.

## Example 1: Next.js SaaS Application

```.cursorrules
# Next.js SaaS Application

## Stack
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Prisma (PostgreSQL)
- NextAuth.js
- tRPC

## Component Rules
- Use Server Components by default
- Client Components only when needed ('use client')
- Prefer composition over props drilling
- Keep components under 200 lines

## Code Style
- Use functional programming patterns
- Prefer const over let
- Use async/await over promises
- Explicit return types on functions
- Named exports over default exports

## File Organization
- Features in src/app/
- Components in src/components/
- Server actions in src/actions/
- API routes via tRPC in src/server/
- Types in src/types/

## Database
- Use Prisma for all database operations
- Transactions for multi-step operations
- Proper error handling on queries
- Use select to limit returned fields

## Testing
- Unit tests with Vitest
- E2E tests with Playwright
- Test files: *.test.ts
- Aim for 80% coverage

## Security
- Validate all inputs with Zod
- Use environment variables for secrets
- Implement rate limiting
- CSRF protection on forms
- XSS prevention (escape user content)
```

## Example 2: Express.js REST API

```.cursorrules
# Express.js REST API

## Stack
- Node.js + Express
- TypeScript
- PostgreSQL + TypeORM
- Redis for caching
- JWT authentication

## API Design
- RESTful conventions
- Versioned: /api/v1/
- Consistent error responses
- HATEOAS links where appropriate

## Structure
- Controllers in src/controllers/
- Services in src/services/
- Models in src/models/
- Middleware in src/middleware/
- Routes in src/routes/

## Error Handling
- Custom error classes
- Global error middleware
- Proper HTTP status codes
- No stack traces in production
- Structured error logging

## Authentication
- JWT tokens
- Refresh token pattern
- Token expiration
- Role-based access control

## Validation
- Use class-validator
- Validate all inputs
- Sanitize data
- Type-safe responses

## Testing
- Jest for unit tests
- Supertest for API tests
- Test coverage > 80%
- Integration tests for critical paths

## Documentation
- OpenAPI/Swagger
- JSDoc for functions
- README for setup
```

## Example 3: React Native Mobile App

```.cursorrules
# React Native Mobile App

## Stack
- React Native
- TypeScript
- React Navigation
- Redux Toolkit
- Async Storage

## Component Rules
- Functional components only
- Custom hooks for shared logic
- Memoization for performance
- Platform-specific code when needed

## State Management
- Redux Toolkit for global state
- Local state for UI-only state
- RTK Query for API calls
- Persist sensitive data securely

## Styling
- StyleSheet.create
- Shared design tokens
- Responsive design
- Dark mode support

## Navigation
- Type-safe navigation
- Deep linking support
- Proper back button handling

## Performance
- FlatList for long lists
- Image optimization
- Lazy loading
- Minimize re-renders

## Mobile-Specific
- Offline support
- Biometric authentication
- Push notifications
- Background tasks
- App state management

## Testing
- Jest + React Native Testing Library
- E2E with Detox
- Test on both iOS and Android
```

## Example 4: Python FastAPI Backend

```.cursorrules
# FastAPI Backend

## Stack
- Python 3.11+
- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic
- Alembic for migrations

## Code Style
- Follow PEP 8
- Type hints everywhere
- Docstrings for all functions
- Max line length: 100

## Structure
- Routers in app/routers/
- Models in app/models/
- Schemas in app/schemas/
- Services in app/services/
- Dependencies in app/dependencies/

## API Design
- RESTful endpoints
- Pydantic models for validation
- Proper HTTP methods
- Response models defined
- API documentation auto-generated

## Database
- SQLAlchemy ORM
- Alembic migrations
- Async database operations
- Connection pooling
- Transactions for consistency

## Security
- OAuth2 with JWT
- Password hashing with bcrypt
- CORS configuration
- Rate limiting
- Input validation

## Testing
- Pytest
- Test coverage > 90%
- Fixtures for common setup
- Mock external services

## Error Handling
- Custom exceptions
- Proper HTTP status codes
- Detailed error messages
- Logging with context
```

## Tips for Writing Your Own

1. **Start Simple** - Add rules as you need them
2. **Be Specific** - "Use TypeScript" vs "Use strict TypeScript with no any types"
3. **Provide Context** - Explain why certain patterns are preferred
4. **Keep Updated** - Review and revise as project evolves
5. **Team Input** - Get feedback from team members

## Testing Your Rules

After creating `.cursorrules`:

1. Ask Chat about project conventions
2. Generate code and verify it follows rules
3. Use Composer to build features
4. Check if Agent Mode respects guidelines

Your rules should guide AI toward your preferred patterns!

