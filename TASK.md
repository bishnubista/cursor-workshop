# Tasks: Composer Basics

Practice building features with Composer (Cmd/Ctrl + I).

## Setup
- ✅ You're on `04-intermediate/composer-basics`  
- ✅ Read `BRANCH_NOTES.md`
- ✅ Know: Cmd+I (Mac) or Ctrl+I (Windows/Linux)

## Exercise 1: Create a Simple API Endpoint

**Objective:** Use Composer to build a complete API endpoint

**Task:**
1. Open Composer (Cmd/Ctrl + I)
2. Type: "Create a REST API endpoint for managing tasks with GET, POST, PUT, DELETE operations. Use Express.js. Create separate files for routes, controller, and model."
3. Review the plan
4. Accept and let Composer work
5. Review the generated files

**Expected Files:**
- `routes/tasks.js`
- `controllers/taskController.js`
- `models/Task.js`

**Success Criteria:** Complete CRUD API structure created

---

## Exercise 2: Build a React Component Library

**Task:**
Use Composer to create:
- Button component with variants (primary, secondary, danger)
- Input component with validation
- Card component
- Each with PropTypes and examples

**Prompt:**
"Create a React component library in src/components/ with Button, Input, and Card components. Each should have PropTypes, variants, and usage examples in comments."

**Expected Outcome:** Reusable component library

---

## Exercise 3: Add Authentication System

**Task:**
"Build a user authentication system with:
- User registration endpoint
- Login endpoint with JWT
- Password hashing with bcrypt
- Auth middleware for protected routes
- Organize in src/auth/ directory"

**Expected Files:**
- `auth/authController.js`
- `auth/authMiddleware.js`
- `auth/authRoutes.js`
- `models/User.js`

---

## Exercise 4: Create Database Layer

**Task:**
"Create a database connection layer for MongoDB with:
- Connection setup with retry logic
- Database helper utilities
- Error handling
- Environment configuration
- Place in src/database/"

---

## Exercise 5: Build Feature with Tests

**Task:**
"Create a product catalog feature with:
- Product model
- CRUD API endpoints
- Input validation
- Unit tests using Jest
- Integration tests for API endpoints"

**Key Learning:** Composer can generate tests too!

---

## Exercise 6: Add Logging System

**Task:**
"Implement a logging system with:
- Winston logger configuration
- Different log levels (info, warn, error)
- File and console transports
- Request logging middleware
- Place in src/utils/logger.js"

---

## Exercise 7: Refactor Across Files

**Task:**
"Refactor all API error handling to use a centralized error handler middleware. Update all existing route files to use this pattern."

**Key Learning:** Composer can refactor across multiple files

---

## Exercise 8: Build Full-Stack Feature

**Task:**
"Create a comment system:
- Backend: Comment model, API endpoints (CRUD)
- Frontend: CommentList and CommentForm components
- Connect frontend to backend with API calls
- Add loading and error states"

---

## Bonus Challenges

1. **E-commerce Cart:** Complete shopping cart with add/remove/update/checkout
2. **Search Feature:** Full-text search with filters and pagination
3. **File Upload:** Image upload with validation, storage, and preview
4. **Real-time Chat:** WebSocket-based chat with rooms

---

## Self-Assessment

Rate your confidence (1-5):
- [ ] Using Composer to create features
- [ ] Multi-file coordinated changes
- [ ] Generating complete project structures
- [ ] Reviewing and refining Composer output
- [ ] Understanding when to use Composer vs other tools

**Ready?** Move to `05-intermediate/agent-mode`

```bash
git checkout 05-intermediate/agent-mode
```

