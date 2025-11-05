# Tasks: Inline Edits (Cmd+K)

Complete these exercises to master Cursor's Inline Edit feature.

## Setup

- ✅ You're on the `03-beginner/inline-edits` branch
- ✅ You've read `BRANCH_NOTES.md`
- ✅ You know: Cmd+K (Mac) or Ctrl+K (Windows/Linux)

## Exercise 1: Basic Inline Edit

**Objective:** Get comfortable with the Cmd+K workflow

**Tasks:**

1. Open `refactor-me.js`
2. Find the `greet` function
3. Select the entire function
4. Press `Cmd/Ctrl + K`
5. Type: "convert to arrow function"
6. Press Enter
7. Review the change
8. Press `Cmd/Ctrl + Enter` to accept (or click Accept)

**Expected Outcome:** The function is converted to an arrow function.

**Success Criteria:** You successfully used Cmd+K to refactor code.

---

## Exercise 2: Adding Validation

**Objective:** Use Cmd+K to add input validation

**Tasks:**

1. Open `refactor-me.js`
2. Find the `divide` function
3. Place cursor inside the function
4. Press `Cmd/Ctrl + K`
5. Type: "add input validation to check if both params are numbers"
6. Review and accept

**Expected Outcome:** Function now validates input types.

**Try also:**
- "add validation for division by zero"
- "add descriptive error messages"

---

## Exercise 3: Error Handling

**Objective:** Add error handling to async functions

**Tasks:**

1. Open `async-functions.js`
2. Find `fetchUserData`
3. Select the function
4. Cmd+K: "add try-catch error handling"
5. Accept
6. Cmd+K again: "add error logging to console"
7. Accept

**Expected Outcome:** Function has proper error handling and logging.

**Challenge:** Do the same for all functions in the file.

---

## Exercise 4: Code Modernization

**Objective:** Modernize old JavaScript code

**Tasks:**

1. Open `legacy-code.js`
2. Select the first function with `var` and old syntax
3. Cmd+K: "convert to modern JavaScript ES6+"
4. Accept
5. Repeat for all functions in the file

**What to look for:**
- `var` → `const`/`let`
- Function expressions → Arrow functions
- Template literals instead of concatenation
- Destructuring where appropriate

**Expected Outcome:** All code uses modern JavaScript syntax.

---

## Exercise 5: TypeScript Conversion

**Objective:** Convert JavaScript to TypeScript

**Tasks:**

1. Open `to-typescript.js`
2. Select the `User` interface area
3. Cmd+K: "convert to TypeScript interface"
4. Accept
5. Select `createUser` function
6. Cmd+K: "add TypeScript types"
7. Accept

**Expected Outcome:** Code has proper TypeScript types.

**Continue with:**
- All remaining functions
- Add return types
- Add parameter types

---

## Exercise 6: Documentation Generation

**Objective:** Add comprehensive documentation

**Tasks:**

1. Open `undocumented.js`
2. Place cursor above `calculateTotal`
3. Cmd+K: "add JSDoc documentation"
4. Accept
5. Repeat for each function

**Expected Documentation:**
- Parameter descriptions
- Return type
- Example usage
- Edge cases

**Expected Outcome:** All functions have complete JSDoc.

---

## Exercise 7: Extracting Functions

**Objective:** Extract complex logic into separate functions

**Tasks:**

1. Open `complex-function.js`
2. Find the `processOrder` function
3. Select the validation logic block
4. Cmd+K: "extract this into a separate function called validateOrder"
5. Accept
6. Select the calculation logic
7. Cmd+K: "extract into calculateOrderTotal function"
8. Accept

**Expected Outcome:** One large function is broken into smaller, focused functions.

**Refactor further:**
- Extract email sending logic
- Extract inventory checking
- Clean up the main function

---

## Exercise 8: Adding Tests

**Objective:** Generate unit tests for functions

**Tasks:**

1. Open `math-utils.js`
2. Scroll to the bottom of the file
3. Place cursor at the end
4. Cmd+K: "add unit tests for all functions in this file"
5. Review the tests
6. Accept or refine

**Expected Outcome:** Complete test suite covering all functions.

**Test criteria:**
- Normal cases
- Edge cases
- Error cases

---

## Exercise 9: Improving Readability

**Objective:** Make code more readable

**Tasks:**

1. Open `messy-code.js`
2. Select the first confusing function
3. Cmd+K: "improve readability by adding meaningful variable names"
4. Accept
5. Cmd+K: "add comments explaining the logic"
6. Accept
7. Cmd+K: "simplify complex conditionals"
8. Accept

**Expected Outcome:** Code is much easier to understand.

**Continue with:**
- All functions in the file
- Look for improvements in structure
- Better naming throughout

---

## Exercise 10: React Component Refactoring

**Objective:** Refactor React components

**Tasks:**

1. Open `ClassComponent.jsx`
2. Select the entire class
3. Cmd+K: "convert to functional component with hooks"
4. Accept
5. Cmd+K: "add prop-types validation"
6. Accept

**Expected Outcome:** Modern React component with hooks and prop validation.

**Try also:**
- "add error boundary"
- "add loading state"
- "memoize this component"

---

## Exercise 11: Performance Optimization

**Objective:** Optimize code for better performance

**Tasks:**

1. Open `slow-code.js`
2. Select the `searchArray` function
3. Cmd+K: "optimize this search using a Set for O(1) lookup"
4. Accept
5. Select `filterDuplicates`
6. Cmd+K: "optimize to remove duplicates more efficiently"
7. Accept

**Expected Outcome:** Code runs significantly faster.

**Optimize more:**
- Reduce unnecessary iterations
- Use efficient data structures
- Implement memoization where appropriate

---

## Exercise 12: Security Improvements

**Objective:** Add security best practices

**Tasks:**

1. Open `api-routes.js`
2. Select the user creation route
3. Cmd+K: "add input sanitization to prevent injection attacks"
4. Accept
5. Cmd+K: "add rate limiting logic"
6. Accept

**Expected Outcome:** More secure API endpoints.

**Security additions:**
- SQL injection prevention
- XSS prevention
- CSRF protection
- Input validation

---

## Exercise 13: Accessibility Enhancements

**Objective:** Improve component accessibility

**Tasks:**

1. Open `Button.jsx`
2. Select the button element
3. Cmd+K: "add ARIA attributes for accessibility"
4. Accept
5. Cmd+K: "add keyboard navigation support"
6. Accept

**Expected Outcome:** Component is accessible.

**Add:**
- ARIA labels
- Keyboard shortcuts
- Screen reader support
- Focus management

---

## Exercise 14: Error Messages

**Objective:** Improve error messaging

**Tasks:**

1. Open `validation.js`
2. Find error throws
3. Select each throw statement
4. Cmd+K: "make this error message more descriptive and user-friendly"
5. Accept for each

**Expected Outcome:** Clear, actionable error messages.

**Good error messages include:**
- What went wrong
- Why it went wrong
- How to fix it
- Example of correct usage

---

## Exercise 15: Chaining Edits

**Objective:** Make multiple sequential improvements

**Tasks:**

1. Open `needs-work.js`
2. Select a function
3. Cmd+K: "add input validation"
4. Accept
5. Immediately Cmd+K: "add error handling"
6. Accept
7. Immediately Cmd+K: "add JSDoc documentation"
8. Accept
9. Immediately Cmd+K: "add unit tests"
10. Accept

**Expected Outcome:** Function went from basic to production-ready.

**Key Learning:** Chain multiple edits for comprehensive improvements.

---

## Bonus Challenges

### Challenge 1: Complete Refactor

Take `legacy-project.js` and:
1. Modernize the syntax
2. Add TypeScript types
3. Add error handling
4. Add documentation
5. Add tests
6. Optimize performance
7. Improve security

### Challenge 2: Component Library

Enhance `ComponentLibrary.jsx`:
1. Add TypeScript
2. Add prop-types
3. Add accessibility
4. Add animations
5. Add responsive design
6. Add dark mode support

### Challenge 3: API Hardening

Secure `api-endpoints.js`:
1. Add input validation
2. Add authentication checks
3. Add rate limiting
4. Add error handling
5. Add logging
6. Add request sanitization

---

## Self-Assessment

Rate your confidence (1-5):

- [ ] Using Cmd+K for basic edits
- [ ] Adding validation and error handling
- [ ] Code modernization
- [ ] TypeScript conversion
- [ ] Documentation generation
- [ ] Extracting functions
- [ ] Performance optimization
- [ ] Security improvements
- [ ] Chaining multiple edits
- [ ] Reviewing diffs before accepting

**If you rated yourself 4-5:** Great! Move to Branch 04 (Composer)

**If you rated yourself 2-3:** Practice exercises 1-10 again

**If you rated yourself 1:** Review BRANCH_NOTES.md and start over

---

## Key Takeaways

After completing these exercises, you should:

✅ Know when to use Cmd+K vs other Cursor features  
✅ Write effective inline edit instructions  
✅ Review and accept/reject changes confidently  
✅ Chain multiple edits for complex improvements  
✅ Refactor code quickly and safely  
✅ Add types, tests, and docs efficiently  
✅ Improve code quality systematically  

---

## Next Steps

Ready for multi-file features?

```bash
git checkout 04-intermediate/composer-basics
```

You'll learn to build complete features across multiple files!

---

## Tips for Real-World Usage

1. **Start Small** - Don't try to refactor everything at once
2. **Test Often** - Run tests after each major change
3. **Use Version Control** - Commit before big refactors
4. **Review Carefully** - Always read the diff
5. **Iterate** - If not perfect, reject and try again
6. **Combine Tools** - Use Chat to understand, Cmd+K to change
7. **Build Habits** - Make Cmd+K part of your workflow

---

## Need Help?

- Re-read `BRANCH_NOTES.md` for detailed guidance
- Use Chat: "How do I use Cmd+K to [specific goal]?"
- Check [Cursor Docs](https://docs.cursor.com)
- Ask in [Cursor Forum](https://forum.cursor.com)

Happy refactoring! 🔧

