# Branch Notes: Cloud Agents

## Overview

Cloud Agents (announced October 2025) enable running multiple AI agents simultaneously in the cloud. This allows parallel execution of independent tasks, dramatically speeding up complex workflows that have multiple independent components.

## What are Cloud Agents?

Cloud Agents:
- **Run in the cloud** - Don't require constant local connection
- **Parallel execution** - Multiple agents work simultaneously
- **Independent tasks** - Each agent handles separate work
- **Background processing** - Continue working while you do other things
- **Scalable** - Handle multiple complex tasks at once

## Key Benefits

### 1. Parallel Processing
Instead of: Test → Document → Refactor (sequential)
With Cloud Agents: Test + Document + Refactor (parallel)

### 2. No Local Blocking
Agents run in cloud, your local Cursor remains responsive

### 3. Multi-Project Support
Work on multiple projects simultaneously

### 4. Long-Running Tasks
Agents continue even if you close Cursor

### 5. Resource Optimization
Cloud resources handle heavy computation

## When to Use Cloud Agents

**Ideal for:**
- Multiple independent tasks across different areas
- Time-consuming operations (testing entire codebase)
- Tasks that don't depend on each other
- Background work while you focus on something else

**Examples:**
- Agent 1: Add tests to frontend
- Agent 2: Add tests to backend  
- Agent 3: Generate documentation
- Agent 4: Fix linter errors

All running simultaneously!

## How Cloud Agents Work

1. **Identify Independent Tasks** - Break work into parallel pieces
2. **Spawn Multiple Agents** - Each gets a specific task
3. **Agents Work in Parallel** - Cloud execution
4. **Monitor Progress** - See status of each agent
5. **Review Results** - Check completed work from each agent

## Best Practices

### 1. Independence is Key
Ensure tasks don't conflict:
- ✅ Good: Test frontend + Test backend (different files)
- ❌ Bad: Refactor auth + Add auth tests (same files)

### 2. Clear Boundaries
Give each agent a specific, non-overlapping scope:
- Agent 1: "Add tests to src/frontend/"
- Agent 2: "Add tests to src/backend/"
- Agent 3: "Add tests to src/utils/"

### 3. Monitor Resource Usage
Cloud agents use cloud resources - be mindful of usage

### 4. Review Each Agent's Work
Don't assume all agents succeeded perfectly

## Common Patterns

### Pattern 1: Test Coverage Sprint
- Agent 1: Unit tests for services
- Agent 2: Unit tests for controllers
- Agent 3: Integration tests
- Agent 4: E2E tests

### Pattern 2: Multi-Platform Documentation
- Agent 1: Generate API documentation
- Agent 2: Generate component documentation
- Agent 3: Create README files
- Agent 4: Write migration guides

### Pattern 3: Code Quality Parallel
- Agent 1: Fix ESLint errors
- Agent 2: Add TypeScript types
- Agent 3: Add error handling
- Agent 4: Improve accessibility

### Pattern 4: Feature Development
- Agent 1: Build authentication UI
- Agent 2: Build authentication API
- Agent 3: Build authentication tests
- Agent 4: Write authentication docs

## Tips for Success

1. **Plan Agent Tasks Carefully** - Ensure no overlap
2. **Start Small** - Try 2-3 agents before scaling up
3. **Monitor Progress** - Check agent status regularly
4. **Handle Conflicts** - Resolve if agents touch same files
5. **Test Integration** - Ensure agent outputs work together

## Cloud Agents vs Other Features

**Cloud Agents:**
- Multiple parallel tasks
- Cloud execution
- Independent work streams
- Background processing

**Agent Mode:**
- Single autonomous task
- Local or cloud execution
- Sequential operations
- Requires attention

**Plan Mode:**
- Research → Plan → Execute
- Complex planning
- Single focus
- High-risk changes

**Composer:**
- Interactive building
- Multi-file coordination
- Guided development
- Real-time feedback

## Advanced Use Cases

### 1. Monorepo Parallel Updates
Update multiple packages simultaneously

### 2. Multi-Language Projects
Different agents for different language stacks

### 3. Documentation Overhaul
Parallelize documentation across modules

### 4. Migration Projects
Migrate different areas in parallel

## Limitations & Considerations

1. **Agent Conflicts** - Avoid overlapping file changes
2. **Resource Limits** - Cloud agent quotas
3. **Coordination** - Some tasks can't be parallelized
4. **Review Overhead** - More agents = more to review

## Next Steps

After mastering Cloud Agents:
- **Custom Rules** (Branch 09) to configure agent behavior per project

---

See **TASK.md** for parallel execution exercises!

