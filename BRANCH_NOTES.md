# Branch Notes: Inline Edits (Cmd+K)

## Overview

Inline Edit (Cmd+K or Ctrl+K) is Cursor's quick edit feature. It lets you make targeted code changes by describing what you want in natural language, without leaving your file or opening a chat panel.

## What is Inline Edit?

Inline Edit is like having a mini AI assistant that works right where your cursor is. You select code (or place your cursor), press Cmd+K, describe the change, and Cursor applies it instantly.

### Key Features

1. **Context-Aware** - Understands the selected code
2. **Fast** - Quicker than Chat for simple edits
3. **Non-Disruptive** - Stays in your editor flow
4. **Preview Changes** - See before accepting
5. **Natural Language** - Describe changes in plain English

## Opening Inline Edit

**macOS:** `Cmd + K`  
**Windows/Linux:** `Ctrl + K`

A small input box appears where you can type your edit instruction.

## How It Works

1. **Select code** (or place cursor where you want to add code)
2. **Press Cmd+K**
3. **Type your instruction** (e.g., "add error handling")
4. **Press Enter**
5. **Review the change**
6. **Accept** (Cmd+Enter) or **Reject** (Esc)

## Common Use Cases

### 1. Refactoring

```javascript
// Select this code and Cmd+K "convert to arrow function"
function greet(name) {
  return `Hello, ${name}`;
}

// Becomes:
const greet = (name) => `Hello, ${name}`;
```

### 2. Adding Features

```javascript
// Place cursor inside function and Cmd+K "add input validation"
function divide(a, b) {
  return a / b;
}

// Becomes:
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
```

### 3. Type Conversion

```javascript
// Select and Cmd+K "convert to TypeScript with types"
function processUser(user) {
  return {
    id: user.id,
    name: user.name.toUpperCase()
  };
}
```

### 4. Adding Documentation

```javascript
// Cursor before function, Cmd+K "add JSDoc documentation"
function calculateTotal(items, tax) {
  return items.reduce((sum, item) => sum + item.price, 0) * (1 + tax);
}
```

### 5. Error Handling

```javascript
// Select function, Cmd+K "add try-catch error handling"
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
```

### 6. Code Modernization

```javascript
// Select old code, Cmd+K "modernize this code using ES6+"
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function(n) {
  return n * 2;
});
```

### 7. Adding Tests

```javascript
// Cursor after function, Cmd+K "add unit tests for this function"
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
```

## Best Practices

### 1. Be Specific

**Vague:** "fix this"  
**Better:** "add null check for user parameter"  
**Best:** "add validation to check if user is null or undefined, throw error if so"

### 2. Select Relevant Code

- Select the exact function/block you want to modify
- Don't select too much (Cursor might change more than intended)
- Don't select too little (Cursor needs context)

### 3. One Change at a Time

Instead of: "add error handling, convert to TypeScript, and add logging"

Do:
1. Cmd+K "add error handling"
2. Accept
3. Cmd+K "convert to TypeScript"
4. Accept
5. Cmd+K "add logging"

### 4. Review Before Accepting

- Always read the generated code
- Check for logic errors
- Verify it matches your intent
- Test after accepting

### 5. Use for Quick Edits

**Good for Cmd+K:**
- Refactoring single functions
- Adding validation
- Converting syntax
- Adding error handling
- Quick documentation

**Better for other tools:**
- Large architectural changes → Plan Mode
- Multi-file features → Composer
- Understanding code → Chat
- New code from scratch → Composer

## Keyboard Shortcuts

- **Open Inline Edit:** `Cmd/Ctrl + K`
- **Accept Change:** `Cmd/Ctrl + Enter` or click Accept
- **Reject Change:** `Esc` or click Reject
- **View Diff:** Automatically shown
- **Cancel Input:** `Esc` (while typing)

## Common Instructions

### Refactoring
- "convert to arrow function"
- "extract this logic into a separate function"
- "simplify this code"
- "remove duplicate code"
- "rename variable to [newName]"

### Adding Features
- "add input validation"
- "add error handling"
- "add logging"
- "add type checking"
- "add default parameters"

### Type Conversion
- "convert to TypeScript"
- "add JSDoc types"
- "add prop-types validation"
- "convert to async/await"
- "convert to promises"

### Documentation
- "add JSDoc comment"
- "add inline comments explaining logic"
- "add examples to documentation"
- "add parameter descriptions"

### Testing
- "add unit tests"
- "add edge case tests"
- "add mock data"
- "add test assertions"

### Code Quality
- "add null checks"
- "add defensive programming"
- "improve readability"
- "follow ESLint rules"
- "make this more performant"

## Understanding the Diff View

When Cursor generates changes:

**Red lines** = Removed code  
**Green lines** = Added code  
**No color** = Unchanged code

You can:
- Scroll through changes
- Read carefully before accepting
- Reject if not quite right
- Try again with different instructions

## Tips and Tricks

### 1. Iterative Refinement

First try: "add validation"  
If not right: Reject and try "add email format validation"  
If still not right: Reject and try "validate email using regex pattern /^[^@]+@[^@]+\.[^@]+$/"

### 2. Use Technical Terms

Cursor understands technical jargon:
- "memoize this function"
- "debounce this event handler"
- "curry this function"
- "add lazy loading"

### 3. Reference Patterns

"convert this to the same pattern as the function above"  
"use the error handling pattern from utils.js"

### 4. Specify Technologies

"add validation using Zod"  
"convert to styled-components"  
"rewrite using React hooks instead of class components"

### 5. Multi-Step in One Instruction

"add TypeScript types and JSDoc comments"  
"refactor to async/await and add error handling"

## Cmd+K vs Other Features

### Cmd+K (Inline Edit)
- **Speed:** Very fast
- **Scope:** Single file, specific section
- **Use:** Quick targeted edits
- **Context:** Selected code only
- **Output:** Direct code changes

### Chat (Cmd+L)
- **Speed:** Conversational pace
- **Scope:** Whole codebase
- **Use:** Discussion, explanation, exploration
- **Context:** Broad, with @-mentions
- **Output:** Suggestions, explanations, code snippets

### Composer (Cmd+I)
- **Speed:** Moderate
- **Scope:** Multi-file changes
- **Use:** Building features, coordinated changes
- **Context:** Project-wide
- **Output:** Multiple file changes

### When to Use Cmd+K

**Perfect for:**
- Small, focused changes
- Refactoring single functions
- Adding simple features
- Quick syntax conversions
- Adding documentation

**Not ideal for:**
- Creating files from scratch
- Multi-file coordinated changes
- Complex architectural decisions
- Exploratory questions

## Common Issues

### Edit Not What You Expected

**Solution:**
- Reject and try more specific instruction
- Select different code scope
- Break into smaller edits
- Use Chat to clarify first

### Cursor Changes Too Much

**Solution:**
- Select smaller code block
- Be more specific about what NOT to change
- Try: "only modify the validation, don't change the return statement"

### Cursor Changes Too Little

**Solution:**
- Select broader code block
- Be more explicit about scope
- Try: "update all similar instances in this function"

### Change Breaks Code

**Solution:**
- Reject the change
- Review error messages
- Try more specific instruction
- Test incrementally

## Advanced Techniques

### 1. Chain Multiple Edits

After accepting an edit, immediately Cmd+K again for related changes.

### 2. Use Examples

"convert to the same format as the example in config.js"

### 3. Specify Constraints

"add logging but only in development mode"  
"validate but don't throw errors, return boolean instead"

### 4. Reference Standards

"format according to Airbnb style guide"  
"follow React best practices"
"use functional programming patterns"

## Performance Tips

### Make Edits Faster

- Keep selections focused
- Use clear, concise instructions
- Work in smaller chunks
- Use specific technical terms

### Reduce Mistakes

- Review diffs carefully
- Test after each edit
- Use version control
- Keep backup before major refactors

## Real-World Workflows

### Workflow 1: Refactoring Legacy Code

1. Open old file
2. Select first function
3. Cmd+K "convert to modern JavaScript ES6+"
4. Review and accept
5. Cmd+K "add input validation"
6. Review and accept
7. Cmd+K "add JSDoc documentation"
8. Move to next function

### Workflow 2: Adding TypeScript

1. Select JavaScript function
2. Cmd+K "convert to TypeScript with proper types"
3. Review types
4. Accept or refine
5. Repeat for each function

### Workflow 3: Improving Error Handling

1. Find function with weak error handling
2. Select function
3. Cmd+K "add comprehensive error handling with try-catch"
4. Review error cases
5. Accept
6. Cmd+K "add error logging"

## Next Steps

After mastering Inline Edit:
- Learn **Composer** (Branch 04) for multi-file features
- Explore **Agent Mode** (Branch 05) for autonomous tasks
- Try **Codebase Indexing** (Branch 06) for large projects

## Resources

- [Cursor Inline Edit Docs](https://docs.cursor.com/inline-edit)
- [Cursor Forum - Inline Edit Tips](https://forum.cursor.com)
- [Keyboard Shortcuts Reference](https://docs.cursor.com/shortcuts)

---

Ready to practice? Open **TASK.md** for hands-on exercises!

