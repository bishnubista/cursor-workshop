# Branch Notes: Composer Basics

## Overview

Composer (Cmd+I) is Cursor's multi-file feature builder. Unlike Chat or Inline Edit, Composer can create, modify, and coordinate changes across multiple files simultaneously to build complete features.

## What is Composer?

Composer is an AI-powered development assistant that:
- Creates features across multiple files
- Understands project structure
- Coordinates related changes
- Generates new files from scratch
- Refactors code systematically

## Opening Composer

**macOS:** `Cmd + I`  
**Windows/Linux:** `Ctrl + I`

## Key Capabilities

### 1. Multi-File Creation
Build features that require multiple new files:
- Create API endpoint + model + controller + tests
- Add new React component + styles + story + tests
- Build database migration + model + seeder

### 2. Coordinated Changes
Make related changes across existing files:
- Add authentication to multiple routes
- Update API contracts across frontend and backend
- Refactor shared utilities used everywhere

### 3. Feature Development
Build complete features end-to-end:
- User registration (form + validation + API + database)
- Shopping cart (component + state + API + persistence)
- File upload (UI + backend + storage + validation)

## Composer vs Other Tools

**Use Composer When:**
- Building features across multiple files
- Creating new functionality from scratch
- Need coordinated changes
- Want AI to handle project structure

**Use Chat When:**
- Asking questions
- Need explanations
- Exploring options
- Learning concepts

**Use Cmd+K When:**
- Quick single-file edits
- Refactoring one function
- Small modifications
- Fast iterations

## How to Use Composer

1. **Open Composer:** Cmd/Ctrl + I
2. **Describe feature:** "Build a user authentication system with JWT"
3. **Review plan:** Composer shows what it will create/modify
4. **Accept or refine:** Adjust the plan if needed
5. **Let it work:** Composer makes all changes
6. **Review results:** Check generated code
7. **Test:** Run and verify the feature

## Best Practices

### 1. Be Specific About Stack
"Build a REST API with Express and MongoDB"
vs "Build an API" (ambiguous)

### 2. Specify File Structure
"Create in src/features/auth/ directory"
vs "Create auth files" (unclear where)

### 3. Include Requirements
"Add user login with email/password, JWT tokens, and password hashing with bcrypt"

### 4. Mention Existing Patterns
"Follow the same pattern as the products feature"

### 5. Request Tests
"Include unit tests and integration tests"

## Common Patterns

### Pattern 1: New Feature
```
"Create a blog post feature with:
- Post model with title, content, author, createdAt
- CRUD API endpoints
- React components for list and detail views
- Unit tests for API
"
```

### Pattern 2: Full-Stack Feature
```
"Add user profile editing:
- Frontend form component
- API endpoint to update profile
- Database model updates
- Input validation
- Error handling
"
```

### Pattern 3: Refactoring
```
"Refactor authentication across all API routes to use the new JWT middleware pattern"
```

## Tips for Success

1. **Start with structure:** Ask Composer to outline the files first
2. **Iterate:** Build in steps, review between iterations
3. **Use context:** Reference existing files
4. **Test early:** Verify each iteration works
5. **Review carefully:** Composer is powerful but needs oversight

## Next Steps

After mastering Composer:
- Learn **Agent Mode** (Branch 05) for autonomous task execution
- Explore **Codebase Indexing** (Branch 06) for large projects
- Try **Plan Mode** (Branch 07) for complex planning

---

Ready to practice? Open **TASK.md** for hands-on exercises!

