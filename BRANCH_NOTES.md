# Branch Notes: Plan Mode

## Overview

Plan Mode is Cursor's research-first approach for complex tasks. Instead of immediately making changes, Plan Mode researches your codebase, creates a detailed plan, and only executes after you approve.

## What is Plan Mode?

Plan Mode:
- **Researches first** - Explores codebase before acting
- **Creates detailed plans** - Shows what it will do
- **Requires approval** - You review and approve the plan
- **Executes carefully** - Makes changes according to plan
- **Perfect for big changes** - Migrations, refactors, architectural changes

## When to Use Plan Mode

**Ideal for:**
- Architectural changes (REST to GraphQL, monolith to microservices)
- Large refactors (framework migrations, major version upgrades)
- Complex features requiring research
- When you want to understand the approach first
- High-risk changes needing careful planning

**Not needed for:**
- Simple, well-understood changes
- Quick fixes
- Standard CRUD operations

## How Plan Mode Works

1. **Activate Plan Mode** in Composer settings
2. **Describe task:** "Migrate from REST API to GraphQL"
3. **Agent researches:** Explores relevant files and patterns
4. **Plan presented:** Detailed step-by-step plan shown
5. **You review:** Understand and approve/modify the plan
6. **Execution:** Agent implements according to plan
7. **Verification:** Check results match expectations

## Plan Mode Features

### 1. Codebase Research
- Reads relevant files
- Understands existing patterns
- Identifies dependencies
- Maps out affected areas

### 2. Risk Assessment
- Identifies potential breaking changes
- Flags high-risk operations
- Suggests mitigation strategies

### 3. Step-by-Step Planning
- Breaks task into phases
- Orders steps logically
- Identifies dependencies
- Estimates complexity

### 4. Interactive Refinement
- You can modify the plan
- Ask questions about approach
- Request alternatives
- Add constraints

## Best Practices

### 1. Clear End Goals
"Migrate authentication to use OAuth 2.0 with support for Google and GitHub providers"

### 2. Provide Context
"We're using Express.js v4, Passport.js for auth, and PostgreSQL"

### 3. Specify Constraints
"Don't break existing API contracts. Maintain backward compatibility for 2 versions."

### 4. Review Plans Carefully
- Understand each step
- Check for edge cases
- Verify no critical functionality is missed
- Ensure tests are included

### 5. Test Incrementally
Run tests after each major phase of the plan

## Common Use Cases

### 1. Framework Migration
"Migrate from Vue 2 to Vue 3, updating all components and dependencies"

### 2. API Redesign
"Refactor REST API to GraphQL while maintaining backward compatibility"

### 3. Database Changes
"Add multi-tenancy support to the database schema and update all queries"

### 4. Architecture Refactor
"Split monolithic application into microservices starting with auth service"

### 5. Adding i18n
"Add internationalization support across the entire application"

### 6. Performance Overhaul
"Implement caching layer, optimize database queries, and add lazy loading"

## Example Plan Mode Sessions

### Example 1: Adding TypeScript

**Task:** "Convert entire JavaScript codebase to TypeScript"

**Plan might include:**
1. Install TypeScript and @types packages
2. Add tsconfig.json with appropriate settings
3. Convert utility files first (fewer dependencies)
4. Convert models and types
5. Convert services and controllers
6. Convert React components
7. Update build process
8. Fix type errors
9. Update tests
10. Update documentation

### Example 2: Database Migration

**Task:** "Migrate from MongoDB to PostgreSQL"

**Plan might include:**
1. Analyze current data models
2. Design PostgreSQL schema
3. Create migration scripts
4. Set up database connections
5. Implement data access layer
6. Update repositories/services
7. Create data migration utilities
8. Test with sample data
9. Plan production migration
10. Update documentation

## Tips for Complex Plans

1. **Break into Phases:** Approve and execute one phase at a time
2. **Commit Between Steps:** Save progress after each major step
3. **Test Frequently:** Don't wait until end to test
4. **Keep Notes:** Document decisions and changes
5. **Have Rollback Plan:** Know how to revert if needed

## Plan Mode vs Other Features

**Plan Mode:**
- Research → Plan → Approve → Execute
- Best for: Complex, high-risk changes
- Time: Slower, more thoughtful

**Agent Mode:**
- Execute autonomously
- Best for: Clear, well-defined tasks
- Time: Faster execution

**Composer:**
- Interactive building
- Best for: New features
- Time: Medium, guided

**Chat/Cmd+K:**
- Direct changes
- Best for: Simple modifications
- Time: Fastest

## Advanced Tips

### 1. Iterative Planning
Start with high-level plan, then drill into each phase

### 2. Risk Mitigation
Ask: "What could go wrong with this plan?"

### 3. Alternative Approaches
Request: "Show me 3 different approaches to solve this"

### 4. Phased Rollout
Plan migrations in phases with fallback options

### 5. Documentation-First
Include documentation updates in the plan

## Next Steps

After mastering Plan Mode:
- **Cloud Agents** (Branch 08) for parallel execution
- **Custom Rules** (Branch 09) for project-specific configuration

---

See **TASK.md** for complex planning exercises!

