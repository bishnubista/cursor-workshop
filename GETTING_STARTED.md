# Getting Started with Cursor Workshop

This guide will help you set up your environment and navigate through the workshop effectively.

## Step 1: Install Cursor

If you haven't already installed Cursor:

1. Visit [https://cursor.com](https://cursor.com)
2. Download Cursor for your operating system (macOS, Windows, or Linux)
3. Install and launch Cursor
4. Sign up for a Cursor account (free tier available)

## Step 2: Clone This Repository

```bash
# Clone the repository
git clone <repository-url>
cd cursor-workflow

# Verify you're on the main branch
git branch
```

## Step 3: Understand the Workshop Structure

This workshop uses **Git branches** to organize content. Each branch contains:

- **BRANCH_NOTES.md** - Feature explanations and concepts
- **TASK.md** - Hands-on exercises to complete
- **Sample code** - Files to practice with

## Step 4: Navigate Between Branches

### Switching to a Branch

```bash
# Switch to any branch
git checkout 01-beginner/chat-and-context

# Or use the shorter form
git checkout 01-beginner/chat-and-context
```

### Viewing Available Branches

```bash
# List all branches
git branch -a

# Or view them remotely
git fetch --all
git branch -r
```

### Recommended Learning Path

**For Beginners:**
```bash
git checkout 01-beginner/chat-and-context    # Start here
git checkout 02-beginner/tab-autocomplete     # Then this
git checkout 03-beginner/inline-edits         # Then this
```

**For Intermediate Users:**
```bash
git checkout 04-intermediate/composer-basics
git checkout 05-intermediate/agent-mode
git checkout 06-intermediate/codebase-indexing
```

**For Advanced Users:**
```bash
git checkout 07-advanced/plan-mode
git checkout 08-advanced/cloud-agents
git checkout 09-advanced/custom-prompts-rules
```

## Step 5: How to Complete Each Branch

Once you've checked out a branch:

1. **Read BRANCH_NOTES.md first**
   ```bash
   cat BRANCH_NOTES.md
   ```
   Or open it in Cursor to read

2. **Open TASK.md to see exercises**
   ```bash
   cat TASK.md
   ```

3. **Complete the tasks** using Cursor's features

4. **Experiment** - Try variations and explore

5. **Move to the next branch** when ready

## Essential Cursor Keyboard Shortcuts

Learn these shortcuts - they'll make you much more productive:

### macOS
- **Cmd + K** - Inline edit (quick code modifications)
- **Cmd + L** - Open Chat
- **Cmd + I** - Open Composer
- **Cmd + Shift + P** - Command palette
- **Tab** - Accept autocomplete suggestion
- **Cmd + .** - Show quick fixes

### Windows/Linux
- **Ctrl + K** - Inline edit (quick code modifications)
- **Ctrl + L** - Open Chat
- **Ctrl + I** - Open Composer
- **Ctrl + Shift + P** - Command palette
- **Tab** - Accept autocomplete suggestion
- **Ctrl + .** - Show quick fixes

## Cursor Settings Recommendations

For the best workshop experience, configure these settings:

1. **Enable Cursor Tab** (AI autocomplete)
   - Open Settings: Cmd/Ctrl + ,
   - Search for "Cursor Tab"
   - Enable "Cursor Tab"

2. **Enable Codebase Indexing**
   - Open Settings: Cmd/Ctrl + ,
   - Search for "indexing"
   - Enable "Codebase Indexing"

3. **Choose Your AI Model**
   - Chat: Use Claude 3.5 Sonnet or GPT-4o for best results
   - Faster responses: Use Claude 3 Haiku for quick questions

## Understanding Cursor's Main Features

Before you start, here's a quick overview:

### 1. Cursor Chat (Cmd/Ctrl + L)
- Ask questions about your code
- Get explanations and suggestions
- Use @-mentions to add context (@file, @folder, @codebase)

### 2. Cursor Tab
- AI-powered autocomplete as you type
- Press Tab to accept suggestions
- More intelligent than traditional autocomplete

### 3. Inline Edit (Cmd/Ctrl + K)
- Quick edits without leaving your file
- Describe changes in natural language
- Perfect for refactoring and small modifications

### 4. Composer (Cmd/Ctrl + I)
- Build features across multiple files
- Create new functionality from scratch
- Handles complex, multi-step tasks

### 5. Agent Mode
- Autonomous task execution
- Handles long-running, complex tasks
- Can make decisions and iterate

### 6. Plan Mode
- Research-first approach
- Creates detailed plans before execution
- Best for architectural changes

## Tips for Learning

1. **Start Simple** - Don't skip the beginner branches even if you're experienced
2. **Practice Daily** - Spend 15-30 minutes per branch
3. **Build Muscle Memory** - Repeat exercises until shortcuts become automatic
4. **Experiment** - Try different prompts and approaches
5. **Use Real Projects** - Apply what you learn to your own code
6. **Take Breaks** - Process what you've learned before moving on

## Troubleshooting

### Cursor isn't responding
- Check your internet connection
- Verify you're logged in (check bottom-left corner)
- Try reloading the window: Cmd/Ctrl + R

### Autocomplete not working
- Ensure Cursor Tab is enabled in settings
- Check if you've hit your usage limits
- Wait a moment - suggestions appear after a brief pause

### Can't switch branches
- Commit or stash your changes first:
  ```bash
  git stash
  git checkout <branch-name>
  ```

### Sample code not working
- Make sure you've installed dependencies (if any)
- Check the BRANCH_NOTES.md for setup instructions
- Use Cursor Chat to ask for help debugging

## Getting Help

If you're stuck:

1. **Use Cursor Chat** - Ask questions about the tasks
2. **Read BRANCH_NOTES.md** - Contains detailed explanations
3. **Check Cursor Docs** - [https://docs.cursor.com](https://docs.cursor.com)
4. **Ask the Community** - [Cursor Forum](https://forum.cursor.com)

## Ready to Start?

Now that you're set up, choose your starting point:

**Complete Beginner?**
```bash
git checkout 01-beginner/chat-and-context
```

**Some Experience?**
```bash
git checkout 04-intermediate/composer-basics
```

**Already Proficient?**
```bash
git checkout 07-advanced/plan-mode
```

Happy learning! 🚀

