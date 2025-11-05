# Branch Notes: Chat and Context

## Overview

Cursor Chat is your AI pair programming partner. It's more than just a chatbot - it's a context-aware assistant that understands your codebase and can help you write, debug, and understand code.

## What is Cursor Chat?

Cursor Chat is an AI-powered conversational interface built directly into your IDE. Unlike standalone AI tools, it has deep integration with your code and can provide contextually relevant answers.

### Key Features

1. **Context-Aware Responses** - Chat understands the files you're working on
2. **@-Mentions** - Explicitly add context using special mentions
3. **Code Generation** - Generate code directly in chat
4. **Code Explanation** - Understand complex code quickly
5. **Debugging Help** - Get suggestions for fixing bugs

## Opening Cursor Chat

**macOS:** `Cmd + L`  
**Windows/Linux:** `Ctrl + L`

The chat panel will open on the right side of your editor.

## Understanding Context

Context is everything in AI-assisted coding. The more relevant context you provide, the better the responses you'll get.

### Automatic Context

Cursor automatically includes:
- The currently open file
- Your cursor position
- Recent edits
- Visible code in your editor

### Manual Context with @-Mentions

You can explicitly add context using @-mentions:

#### @-Mention Types

1. **@file** - Reference a specific file
   ```
   @package.json What dependencies do I have?
   ```

2. **@folder** - Reference an entire folder
   ```
   @src/components Explain how the component structure works
   ```

3. **@codebase** - Search across your entire codebase
   ```
   @codebase Where is user authentication handled?
   ```

4. **@docs** - Reference documentation (if available)
   ```
   @docs How do I use React hooks?
   ```

5. **@web** - Search the web for current information
   ```
   @web What are the latest Next.js 14 features?
   ```

## Best Practices

### 1. Be Specific

**Bad:** "Fix this"  
**Good:** "This function is throwing a null pointer error when user is undefined. How can I add proper error handling?"

### 2. Provide Context

**Bad:** "How do I add authentication?"  
**Good:** "@codebase I'm using Next.js with NextAuth. How do I add authentication to my API routes?"

### 3. Break Down Complex Questions

Instead of: "Build a complete user management system"

Try:
1. "What's the best structure for user management in Next.js?"
2. "Help me create a User model with TypeScript types"
3. "How do I implement CRUD operations for users?"

### 4. Use Chat for Understanding

Chat excels at:
- Explaining unfamiliar code
- Understanding error messages
- Learning best practices
- Exploring different approaches

### 5. Iterate on Responses

If the first response isn't quite right:
- Ask follow-up questions
- Provide more context
- Request specific modifications

## Common Use Cases

### 1. Code Explanation

```
"@file What does this function do?"
"Explain the algorithm used in this sorting function"
"Why is this code using a closure here?"
```

### 2. Bug Fixing

```
"This function returns undefined when I expect an array. Why?"
"I'm getting a CORS error when calling my API. Help me fix it"
"@file Find potential bugs in this file"
```

### 3. Code Generation

```
"Create a TypeScript interface for a User with name, email, and role"
"Write a function to validate email addresses"
"Generate tests for this component"
```

### 4. Refactoring

```
"How can I make this code more efficient?"
"Refactor this to use modern JavaScript features"
"@file Suggest improvements for this code"
```

### 5. Learning

```
"What's the difference between useMemo and useCallback?"
"Explain how async/await works"
"@docs What are React Server Components?"
```

## Chat vs Other Cursor Features

### Use Chat When:
- You need explanations or understanding
- You want to discuss approaches
- You're learning something new
- You need debugging help
- You want code review feedback

### Use Cmd+K (Inline Edit) When:
- You know exactly what to change
- Making quick modifications
- Refactoring a specific section

### Use Composer When:
- Building features across multiple files
- Creating something new from scratch
- Making coordinated changes

## Tips and Tricks

### 1. Chat History

Your chat history persists across sessions. Use it to reference previous conversations:
- Scroll up to review past responses
- Use previous context in new questions

### 2. Copy Code from Chat

- Click the copy button on code blocks
- Code is formatted and ready to paste

### 3. Chat in Terminal

You can ask questions about terminal errors:
```
"I got this error when running npm install: [paste error]"
```

### 4. Multiple @-Mentions

Combine multiple @-mentions for rich context:
```
@src/components/Button.tsx @src/styles/button.css 
How do these files work together?
```

### 5. Chat Settings

Access chat settings through the gear icon:
- Choose AI model (GPT-4, Claude, etc.)
- Adjust response length
- Configure privacy settings

## Keyboard Shortcuts

- **Open Chat:** `Cmd/Ctrl + L`
- **New Chat:** Click the "+" button
- **Close Chat:** `Esc` (when focused in chat)
- **Focus Chat Input:** `Cmd/Ctrl + L` (even if already open)

## Common Mistakes to Avoid

1. **Too Vague** - "Fix my code" doesn't provide enough information
2. **No Context** - Not using @-mentions when needed
3. **Too Broad** - Asking for entire features instead of breaking them down
4. **Ignoring Errors** - Not sharing error messages when asking for help
5. **Not Iterating** - Accepting the first response without refining

## Model Selection

Different models have different strengths:

- **Claude 3.5 Sonnet** - Best overall balance, most commonly used
- **GPT-4o** - Fast and capable, excellent for most tasks
- **Claude 3 Opus** - Most capable, best for complex reasoning
- **o1-preview** - Advanced reasoning for very complex problems
- **GPT-4 Turbo** - Previous generation, still excellent
- **Claude 3 Haiku** - Fastest responses for simple tasks

Choose based on your task complexity and speed needs.

## Privacy Considerations

- Your code is sent to AI providers (OpenAI, Anthropic)
- Review your organization's policies
- Use privacy mode if available for sensitive code
- Don't share API keys or secrets in chat

## Next Steps

After mastering Chat:
- Learn **Tab Autocomplete** (Branch 02) for faster coding
- Learn **Inline Edit** (Branch 03) for quick modifications
- Progress to **Composer** (Branch 04) for building features

## Resources

- [Cursor Chat Documentation](https://docs.cursor.com/chat)
- [Cursor Forum - Chat Tips](https://forum.cursor.com)
- [Cursor Discord](https://discord.gg/cursor)

---

Ready to practice? Open **TASK.md** to start the hands-on exercises!

