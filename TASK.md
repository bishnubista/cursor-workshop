# Tasks: Chat and Context

Complete these hands-on exercises to master Cursor Chat and context management.

## Setup

Before starting, make sure:
- ✅ You're on the `01-beginner/chat-and-context` branch
- ✅ Cursor is open with this workspace
- ✅ You've read `BRANCH_NOTES.md`

## Exercise 1: Basic Chat Interaction

**Objective:** Get comfortable with opening and using Cursor Chat

**Tasks:**

1. Open Cursor Chat (`Cmd/Ctrl + L`)
2. Ask: "What is this project about?"
3. Ask: "What files are in this directory?"
4. Try starting a new chat conversation (click the + button)

**Expected Outcome:** You should see Chat respond with information about the workshop and workspace files.

**Hint:** Notice how Chat understands your workspace automatically.

---

## Exercise 2: File Context with @file

**Objective:** Learn to reference specific files in your questions

**Tasks:**

1. Open Chat (`Cmd/Ctrl + L`)
2. Ask: "@README.md What is the purpose of this workshop?"
3. Ask: "@BRANCH_NOTES.md What are the keyboard shortcuts for Chat?"
4. Ask: "@calculator.js Explain how this calculator works"

**Expected Outcome:** Chat should provide specific answers based on the referenced files.

**Hint:** Use Tab to autocomplete file names after typing @

---

## Exercise 3: Understanding Code

**Objective:** Use Chat to understand the sample code files

**Tasks:**

1. Open `calculator.js` in the editor
2. In Chat, ask: "What does the calculate function do?"
3. Ask: "Are there any bugs in this code?"
4. Ask: "How would you improve this code?"
5. Ask: "Explain the switch statement in this file"

**Expected Outcome:** You'll get detailed explanations about the calculator implementation.

**Success Criteria:**
- You understand how the calculator works
- You identified at least one improvement suggestion
- You learned something about switch statements

---

## Exercise 4: Code Explanation with Multiple Files

**Objective:** Use @-mentions to understand relationships between files

**Tasks:**

1. Ask: "@calculator.js @calculator.test.js How do these files relate?"
2. Ask: "What testing framework is being used?"
3. Ask: "Are the tests comprehensive?"

**Expected Outcome:** Chat explains the relationship between the code and its tests.

**Hint:** You can mention multiple files in one question!

---

## Exercise 5: Debugging Help

**Objective:** Use Chat to identify and fix bugs

**Tasks:**

1. Open `buggy-code.js`
2. Ask: "@buggy-code.js Find all the bugs in this file"
3. For each bug found, ask: "How do I fix the [specific bug]?"
4. Ask: "Explain why [bug] causes problems"

**Expected Outcome:** You should find at least 3 bugs and understand how to fix them.

**Bugs to Look For:**
- Type errors
- Logic errors
- Edge case handling

---

## Exercise 6: Code Generation

**Objective:** Generate new code using Chat

**Tasks:**

1. Ask: "Create a TypeScript interface for a Product with id, name, price, and category"
2. Ask: "Write a function to calculate the total price of an array of products"
3. Ask: "Add JSDoc comments to the function you just created"

**Expected Outcome:** You'll have working TypeScript code with documentation.

**Challenge:** Copy the generated code into a new file and verify it works!

---

## Exercise 7: Codebase-Wide Questions

**Objective:** Use @codebase to search across all files

**Tasks:**

1. Ask: "@codebase What JavaScript/TypeScript files exist in this project?"
2. Ask: "@codebase Are there any TODO comments in the codebase?"
3. Ask: "@codebase What testing libraries are being used?"

**Expected Outcome:** Chat searches your entire codebase and provides comprehensive answers.

**Hint:** @codebase is powerful for large projects!

---

## Exercise 8: Learning Best Practices

**Objective:** Use Chat as a learning tool

**Tasks:**

1. Ask: "What are JavaScript best practices for error handling?"
2. Ask: "Explain the difference between const, let, and var"
3. Ask: "What is the purpose of async/await?"
4. Ask: "@calculator.js Does this code follow JavaScript best practices?"

**Expected Outcome:** You'll learn key JavaScript concepts and best practices.

**Reflection:** How would you apply these learnings to your own code?

---

## Exercise 9: Refactoring Suggestions

**Objective:** Get refactoring advice from Chat

**Tasks:**

1. Ask: "@calculator.js How can I make this code more maintainable?"
2. Ask: "Should I split this into multiple files?"
3. Ask: "How can I add better error handling?"
4. Ask: "Suggest modern JavaScript improvements"

**Expected Outcome:** You'll receive concrete refactoring suggestions.

**Challenge:** Implement one of the suggested improvements!

---

## Exercise 10: Context Comparison

**Objective:** Understand the importance of context

**Tasks:**

1. **Without context:** Ask: "How do I add a multiply function?"
2. **With file context:** Ask: "@calculator.js How do I add a multiply function?"
3. **With specific context:** Ask: "@calculator.js I want to add multiply to the existing calculate function that uses a switch statement. How?"

**Expected Outcome:** Notice how more specific context leads to better, more relevant answers.

**Key Learning:** Context quality directly impacts response quality!

---

## Exercise 11: Iterative Refinement

**Objective:** Learn to refine responses through follow-up questions

**Tasks:**

1. Ask: "Create a user validation function"
2. Follow up: "Add email validation"
3. Follow up: "Add password strength requirements"
4. Follow up: "Add TypeScript types"
5. Follow up: "Add error messages for each validation rule"

**Expected Outcome:** A comprehensive validation function built iteratively.

**Key Learning:** You can build complex solutions step by step!

---

## Exercise 12: Web Search Integration

**Objective:** Use @web to get current information

**Tasks:**

1. Ask: "@web What are the latest JavaScript ES2024 features?"
2. Ask: "@web What's the current best practice for React state management?"
3. Compare with: "What's the best practice for React state management?" (without @web)

**Expected Outcome:** Notice how @web provides more current information.

**Note:** @web requires internet and may have usage limits.

---

## Bonus Challenges

### Challenge 1: Debug Real Code
Take one of your own projects, open it in Cursor, and use Chat to:
- Find potential bugs
- Get refactoring suggestions
- Understand complex sections

### Challenge 2: Learn Something New
Pick a technology you're unfamiliar with and use Chat to:
- Understand basic concepts
- See code examples
- Learn best practices

### Challenge 3: Code Review
Ask Chat to review the sample files and provide:
- Security concerns
- Performance issues
- Accessibility considerations
- Code quality improvements

---

## Reflection Questions

After completing these exercises, consider:

1. **Context Awareness:** How did adding context (@file, @codebase) change the quality of responses?

2. **Use Cases:** What types of questions worked best with Chat?

3. **Iteration:** How did follow-up questions improve the initial responses?

4. **Learning:** What new concepts or techniques did you learn?

5. **Application:** How will you use Chat in your daily coding?

---

## Self-Assessment

Rate your confidence (1-5) in these areas:

- [ ] Opening and using Cursor Chat
- [ ] Using @-mentions for context
- [ ] Asking effective questions
- [ ] Understanding code with Chat
- [ ] Debugging with Chat assistance
- [ ] Generating code snippets
- [ ] Refactoring suggestions
- [ ] Iterative problem solving

**If you rated yourself 4-5 in most areas:** Great! You're ready for Branch 02 (Tab Autocomplete)

**If you rated yourself 2-3:** Practice more with the exercises above

**If you rated yourself 1:** Re-read BRANCH_NOTES.md and try the basic exercises again

---

## Next Steps

Once you're comfortable with Chat:

```bash
# Move to the next branch
git checkout 02-beginner/tab-autocomplete
```

You'll learn about AI-powered autocomplete that speeds up your coding significantly!

---

## Need Help?

- Re-read `BRANCH_NOTES.md` for detailed explanations
- Use Chat itself: "I'm stuck on Exercise 5. Can you help?"
- Check [Cursor Documentation](https://docs.cursor.com)
- Ask in [Cursor Forum](https://forum.cursor.com)

Happy learning! 🚀

