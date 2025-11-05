# Tasks: Tab Autocomplete

Complete these hands-on exercises to master Cursor Tab and AI-powered autocomplete.

## Setup

Before starting:
- ✅ You're on the `02-beginner/tab-autocomplete` branch
- ✅ Cursor Tab is enabled (Settings → search "Cursor Tab")
- ✅ You've read `BRANCH_NOTES.md`

## Exercise 1: Enable and Test Tab

**Objective:** Verify Tab is working correctly

**Tasks:**

1. Open Settings (`Cmd/Ctrl + ,`)
2. Search for "Cursor Tab"
3. Ensure it's enabled
4. Open `practice.js`
5. Type: `function hello` and pause
6. Watch for gray suggestion text

**Expected Outcome:** You should see a gray suggestion appear after typing.

**If no suggestion appears:**
- Check internet connection
- Verify Tab is enabled
- Wait a moment longer (suggestions have a delay)

---

## Exercise 2: Accept Full Suggestions

**Objective:** Practice accepting complete suggestions

**Tasks:**

1. Open `practice.js`
2. Type: `function greet(name) {`
3. Press Enter to go to the next line
4. Pause and wait for suggestion
5. Press `Tab` to accept the full suggestion

**Expected Outcome:** Tab suggests a return statement or function body, and you accept it completely.

**Try these too:**
```javascript
function add(a, b) {
  // Press Tab here
}

const numbers = [1, 2, 3, 4, 5];
const doubled = // Press Tab here
```

---

## Exercise 3: Word-by-Word Acceptance

**Objective:** Learn to accept suggestions incrementally

**Tasks:**

1. Open `practice.js`
2. Type: `const user = {`
3. Wait for suggestion
4. Press `Cmd/Ctrl + →` multiple times to accept word by word
5. Modify as needed while accepting

**Expected Outcome:** You accept parts of the suggestion while customizing others.

**Practice with:**
```javascript
const userData = {
  // Use Cmd/Ctrl + → to accept properties one by one
}
```

---

## Exercise 4: Writing Test Cases

**Objective:** Let Tab help write repetitive test cases

**Tasks:**

1. Open `user.test.js`
2. Write the first test case manually:
```javascript
test('validates email format', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});
```
3. Start typing: `test('validates`
4. Let Tab suggest similar test cases
5. Accept and modify as needed

**Expected Outcome:** Tab suggests similar test patterns, saving you typing.

**Complete 5 test cases:**
- Email validation
- Name validation
- Password validation
- Age validation
- Phone validation

---

## Exercise 5: Boilerplate Code

**Objective:** Use Tab to generate common patterns

**Tasks:**

1. Open `api-handlers.js`
2. Type: `async function handleGetRequest(req, res) {`
3. Let Tab suggest the entire handler implementation
4. Accept and review the suggestion

**Try generating:**
- Express route handler
- Try-catch block
- Async function with error handling
- API response formatter

**Expected Outcome:** Tab generates complete boilerplate structures.

---

## Exercise 6: Array Operations

**Objective:** Practice Tab suggestions with array methods

**Tasks:**

1. Open `array-practice.js`
2. Complete these operations using Tab:

```javascript
const users = [
  { name: 'Alice', age: 25, active: true },
  { name: 'Bob', age: 30, active: false },
  { name: 'Charlie', age: 35, active: true }
];

// Type: const activeUsers = 
// Let Tab suggest the filter operation

// Type: const userNames = 
// Let Tab suggest the map operation

// Type: const totalAge = 
// Let Tab suggest the reduce operation

// Type: const hasAdult = 
// Let Tab suggest the some operation
```

**Expected Outcome:** Tab suggests appropriate array methods based on variable names and context.

---

## Exercise 7: Documentation with Tab

**Objective:** Generate JSDoc comments automatically

**Tasks:**

1. Open `documented-functions.js`
2. Above a function, type: `/**` and press Enter
3. Let Tab suggest the complete JSDoc comment
4. Accept and verify it matches the function signature

**Try documenting:**
```javascript
function calculateShipping(weight, distance, priority) {
  return weight * distance * (priority ? 1.5 : 1.0);
}

function processOrder(order, customerId, paymentMethod) {
  // Implementation
}

async function fetchUserProfile(userId, includeOrders = false) {
  // Implementation
}
```

**Expected Outcome:** Tab generates appropriate JSDoc with param types and descriptions.

---

## Exercise 8: Import Statements

**Objective:** Let Tab suggest necessary imports

**Tasks:**

1. Open `component.js`
2. Type code that uses React hooks: `const [count, setCount] = useState(0);`
3. Go to the top of the file
4. Type: `import {` 
5. Let Tab suggest: `useState } from 'react';`

**Practice with:**
- Multiple imports from same package
- Default imports
- Type imports (TypeScript)
- Destructured imports

**Expected Outcome:** Tab suggests exactly the imports you need.

---

## Exercise 9: Error Handling Patterns

**Objective:** Use Tab for try-catch blocks

**Tasks:**

1. Open `error-handling.js`
2. Type: `try {`
3. Add some code that might throw
4. Type: `} catch (error) {`
5. Let Tab suggest error handling logic

**Try different scenarios:**
- API call error handling
- File operation errors
- Database query errors
- Validation errors

**Expected Outcome:** Tab suggests contextually appropriate error handling.

---

## Exercise 10: React Component

**Objective:** Build a React component with Tab assistance

**Tasks:**

1. Open `Button.jsx`
2. Type: `const Button = ({ children, onClick, disabled }) => {`
3. Let Tab suggest the component implementation
4. Accept and review

**Build these components:**
- Input field with validation
- Card component
- Modal component
- List item component

**Expected Outcome:** Tab suggests complete component structure including props, state, and JSX.

---

## Exercise 11: Pattern Recognition

**Objective:** Teach Tab your patterns

**Tasks:**

1. Open `patterns.js`
2. Write three similar functions manually:

```javascript
function getUserById(id) {
  return database.users.find(u => u.id === id);
}

function getPostById(id) {
  return database.posts.find(p => p.id === id);
}

function getCommentById(id) {
  return database.comments.find(c => c.id === id);
}
```

3. Now type: `function getProductById`
4. Let Tab suggest following the pattern

**Expected Outcome:** Tab recognizes the pattern and suggests similar structure.

---

## Exercise 12: Context-Aware Completions

**Objective:** Understand how context affects suggestions

**Scenario 1: With Context**
```javascript
// Shopping cart context
const cart = {
  items: [],
  total: 0
};

// Type: function addToCart
// Notice: Tab suggests cart-related logic
```

**Scenario 2: Different Context**
```javascript
// User authentication context
const auth = {
  user: null,
  token: null
};

// Type: function addToCart
// Notice: Tab might suggest different logic or nothing
```

**Expected Outcome:** Same function name gets different suggestions based on context.

---

## Exercise 13: Multi-Line Completions

**Objective:** Accept entire code blocks

**Tasks:**

1. Open `multi-line.js`
2. Type: `if (user.role === 'admin') {`
3. Press Enter
4. Pause and let Tab suggest multiple lines
5. Review the entire suggestion
6. Press Tab to accept if appropriate

**Try with:**
- Switch statements
- For loops with logic
- Object definitions
- Class methods

**Expected Outcome:** Tab suggests multiple lines of contextually relevant code.

---

## Exercise 14: TypeScript Interfaces

**Objective:** Build TypeScript types with Tab

**Tasks:**

1. Open `types.ts`
2. Type: `interface User {`
3. Add one property: `id: number;`
4. Let Tab suggest remaining properties
5. Review and accept

**Build these types:**
```typescript
interface Product {
  // Let Tab suggest properties
}

type OrderStatus = // Let Tab suggest union type

interface ApiResponse<T> {
  // Let Tab suggest generic interface
}
```

**Expected Outcome:** Tab suggests appropriate TypeScript type definitions.

---

## Exercise 15: Rejection and Learning

**Objective:** Understand how rejecting suggestions improves Tab

**Tasks:**

1. Open `learning.js`
2. Type code and deliberately reject bad suggestions (keep typing or press Esc)
3. Write the correct code manually
4. Continue coding in the same file
5. Notice how suggestions improve

**Experiment:**
- Reject a suggestion
- Write your preferred version
- See if Tab learns your preference

**Expected Outcome:** Tab adapts to your coding style over time.

---

## Bonus Challenges

### Challenge 1: Speed Coding

Time yourself writing these functions with and without Tab:
- Array manipulation functions
- CRUD operations
- Form validation
- Data transformations

Compare the time difference!

### Challenge 2: Refactoring Race

Take a file with 10 similar functions and refactor them:
- Once manually
- Once with Tab assistance

Notice the speed difference.

### Challenge 3: Test Coverage

Write comprehensive tests for `user-service.js`:
- Use Tab to generate test cases
- Aim for 100% code coverage
- Let Tab suggest edge cases

### Challenge 4: Documentation Sprint

Document all functions in `undocumented.js`:
- Use Tab for JSDoc generation
- Verify accuracy
- Add examples

---

## Self-Assessment

Rate your confidence (1-5):

- [ ] Accepting full Tab suggestions
- [ ] Word-by-word acceptance
- [ ] Using Tab for boilerplate code
- [ ] Pattern recognition understanding
- [ ] Multi-line completions
- [ ] Rejecting inappropriate suggestions
- [ ] Context-aware usage
- [ ] Documentation generation

**If you rated yourself 4-5:** Excellent! Move to Branch 03 (Inline Edits)

**If you rated yourself 2-3:** Keep practicing, especially exercises 4-10

**If you rated yourself 1:** Review BRANCH_NOTES.md and start with Exercise 1

---

## Tips for Success

1. **Pause after typing** - Give Tab time to generate suggestions
2. **Review before accepting** - Don't blindly accept
3. **Use descriptive names** - Better names = better suggestions
4. **Build patterns** - Tab learns from repetition
5. **Reject bad suggestions** - This improves Tab over time

---

## Common Issues and Solutions

**Tab not suggesting anything:**
- Wait a bit longer (suggestions have delay)
- Check internet connection
- Verify Cursor Tab is enabled
- Add more context with comments

**Suggestions are wrong:**
- Provide better variable names
- Add clarifying comments
- Build more context in the file
- Reject and type your version

**Accepting suggestions by accident:**
- Practice with Cmd/Ctrl + → for word-by-word
- Keep hands on keyboard to quickly modify
- Use Cmd/Ctrl + Z to undo

---

## Next Steps

Once comfortable with Tab autocomplete:

```bash
# Move to the next branch
git checkout 03-beginner/inline-edits
```

You'll learn to make quick, targeted code edits with Cmd+K!

---

## Need Help?

- Re-read `BRANCH_NOTES.md`
- Check Tab settings in Cursor
- Ask Cursor Chat: "How do I use Tab better?"
- Visit [Cursor Forum](https://forum.cursor.com)

Happy coding with Tab! ⚡

