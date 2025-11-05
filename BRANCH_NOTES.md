# Branch Notes: Agent Mode

## Overview

Agent Mode is Cursor's autonomous task execution feature. Unlike Composer which you guide, Agent Mode can independently research, plan, and execute complex multi-step tasks with minimal supervision.

## What is Agent Mode?

Agent Mode is an AI assistant that:
- Works autonomously on complex tasks
- Makes decisions without constant guidance
- Iterates and fixes its own mistakes
- Handles long-running tasks
- Can research your codebase independently

## Key Features

1. **Autonomous Execution** - Works independently once given a task
2. **Self-Correction** - Identifies and fixes its mistakes
3. **Codebase Research** - Explores and understands your project
4. **Multi-Step Planning** - Breaks complex tasks into steps
5. **Tool Usage** - Runs tests, checks errors, reads files

## When to Use Agent Mode

**Perfect for:**
- Adding tests to entire codebase
- Refactoring patterns across many files
- Fixing linter errors systematically
- Implementing complex features
- Documentation generation
- Code quality improvements

**Not ideal for:**
- Simple one-file changes (use Cmd+K)
- When you need to understand the approach first (use Chat)
- Time-sensitive quick fixes

## Agent Mode vs Other Features

**Agent Mode:**
- Autonomous, runs independently
- Best for: Complex, multi-step tasks
- Handles: Code exploration, decision-making, iteration

**Composer:**
- Interactive, you guide it
- Best for: Building features you spec out
- Handles: Multi-file creation and updates

**Chat:**
- Conversational
- Best for: Questions, explanations, guidance
- Handles: Understanding and advice

**Cmd+K:**
- Quick edits
- Best for: Single-file modifications
- Handles: Fast, targeted changes

## How Agent Mode Works

1. **Activate:** Enable Agent Mode in Composer
2. **Give Task:** Describe what you want accomplished
3. **Agent Plans:** Reviews codebase, creates approach
4. **Agent Executes:** Makes changes, runs tests, fixes issues
5. **Agent Reports:** Shows what was done
6. **You Review:** Check results, approve or request changes

## Best Practices

### 1. Clear Objectives
"Add unit tests to all functions in src/utils/ with at least 80% coverage"
vs "Add some tests"

### 2. Set Constraints
"Refactor using functional patterns, but don't change public APIs"

### 3. Specify Success Criteria
"All existing tests must pass, no new linter errors"

### 4. Provide Context
"Follow the testing pattern used in src/auth/auth.test.js"

### 5. Monitor Progress
Check intermediate steps, intervene if going off track

## Common Use Cases

### 1. Test Coverage
"Add unit tests to all untested files in src/services/"

### 2. Error Fixing
"Fix all ESLint errors in the project"

### 3. Documentation
"Add JSDoc comments to all exported functions"

### 4. Refactoring
"Refactor all class components to functional components with hooks"

### 5. Security Audit
"Review code for security vulnerabilities and fix them"

### 6. Performance
"Identify and fix performance bottlenecks in the application"

## Tips for Success

1. **Start Small:** Test Agent Mode on smaller tasks first
2. **Clear Instructions:** Be specific about requirements
3. **Set Boundaries:** Define what should/shouldn't change
4. **Review Often:** Check progress periodically
5. **Provide Examples:** Reference existing patterns to follow

## Next Steps

After mastering Agent Mode:
- Learn **Codebase Indexing** (Branch 06) for better context
- Explore **Plan Mode** (Branch 07) for complex planning
- Try **Cloud Agents** (Branch 08) for parallel execution

---

Ready to practice? Open **TASK.md** for exercises!

