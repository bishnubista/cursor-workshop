# Branch Notes: GitHub CLI Integration

## Overview

GitHub CLI (`gh`) is a powerful command-line tool that brings GitHub functionality directly to your terminal. Combined with Cursor's AI capabilities, it streamlines your development workflow by enabling you to create PRs, manage issues, and interact with repositories without leaving your coding environment.

## What is GitHub CLI?

GitHub CLI (`gh`) is an official tool from GitHub that:
- Creates and manages pull requests from the terminal
- Creates, views, and manages issues
- Runs GitHub Actions workflows
- Clones and manages repositories
- Reviews and merges PRs
- Integrates seamlessly with git commands

## Why Use GitHub CLI with Cursor?

✅ **Stay in Flow** - Create PRs without context switching  
✅ **AI-Powered Descriptions** - Use Cursor to generate PR descriptions  
✅ **Faster Reviews** - View and comment on PRs in terminal  
✅ **Automated Workflows** - Script common GitHub tasks  
✅ **Better Collaboration** - Manage issues and discussions efficiently

## Installation

### macOS

**Option 1: Using Homebrew (Recommended)**
```bash
brew install gh
```

**Option 2: Using MacPorts**
```bash
sudo port install gh
```

**Option 3: Using Conda**
```bash
conda install gh --channel conda-forge
```

**Verify Installation:**
```bash
gh --version
```

### Windows

**Option 1: Using WinGet (Windows 10+)**
```bash
winget install --id GitHub.cli
```

**Option 2: Using Scoop**
```bash
scoop install gh
```

**Option 3: Using Chocolatey**
```bash
choco install gh
```

**Option 4: Manual Installation**
1. Download the `.msi` installer from [GitHub CLI Releases](https://github.com/cli/cli/releases)
2. Run the installer
3. Follow the installation wizard

**Verify Installation:**
```bash
gh --version
```

**Note for Windows:** After installation, restart your terminal (PowerShell, CMD, or Git Bash) to ensure `gh` is in your PATH.

## Initial Setup

### 1. Authenticate with GitHub

```bash
gh auth login
```

**Interactive Setup:**
1. Choose: `GitHub.com` or `GitHub Enterprise Server`
2. Preferred protocol: `HTTPS` or `SSH`
3. Authenticate: `Login with a web browser` (recommended)
4. Copy the one-time code shown
5. Press Enter to open browser
6. Paste code and authorize

**Verify Authentication:**
```bash
gh auth status
```

### 2. Configure Git Integration

```bash
# Set gh as default git protocol
gh config set git_protocol https
# Or use SSH
gh config set git_protocol ssh

# Set preferred editor for PR descriptions
gh config set editor "cursor"
# Or use your preferred editor
gh config set editor "code"
gh config set editor "vim"
```

### 3. Enable Auto-completion (Optional)

**macOS (zsh):**
```bash
gh completion -s zsh > /usr/local/share/zsh/site-functions/_gh
```

**Windows (PowerShell):**
```powershell
gh completion -s powershell | Out-String | Invoke-Expression
```

## Essential Commands

### Pull Requests

#### Create a PR
```bash
# Create PR with interactive prompts
gh pr create

# Create PR with title and body
gh pr create --title "Add user authentication" --body "Implements login and signup"

# Create draft PR
gh pr create --draft

# Create PR targeting specific branch
gh pr create --base main --head feature/auth

# Create PR and open in browser
gh pr create --web
```

#### View PRs
```bash
# List open PRs
gh pr list

# List PRs with specific state
gh pr list --state closed
gh pr list --state merged

# View PR details
gh pr view 123
gh pr view 123 --web

# List your PRs
gh pr list --author @me

# List PRs assigned to you
gh pr list --assignee @me
```

#### Review PRs
```bash
# Check out a PR locally
gh pr checkout 123

# View PR diff
gh pr diff 123

# Review a PR
gh pr review 123 --approve
gh pr review 123 --request-changes --body "Please add tests"
gh pr review 123 --comment --body "Looks good overall"
```

#### Manage PRs
```bash
# Merge a PR
gh pr merge 123

# Merge with options
gh pr merge 123 --squash
gh pr merge 123 --merge
gh pr merge 123 --rebase

# Close a PR
gh pr close 123

# Reopen a PR
gh pr reopen 123

# Mark as ready for review
gh pr ready 123
```

### Issues

```bash
# Create an issue
gh issue create --title "Bug: Login fails" --body "Description here"

# List issues
gh issue list

# View issue
gh issue view 456

# Close issue
gh issue close 456

# Reopen issue
gh issue reopen 456
```

### Repositories

```bash
# Clone repository
gh repo clone username/repo

# Create new repository
gh repo create my-new-repo --public

# View repository
gh repo view

# Fork repository
gh repo fork username/repo
```

## PR Best Practices

### 1. Concise Title

**Format:** `type(scope): brief description`

**Examples:**
```
feat(auth): add OAuth login
fix(api): resolve timeout in user endpoint
docs(readme): update installation steps
refactor(utils): simplify date formatting
test(cart): add unit tests for checkout
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks
- `style`: Formatting changes
- `perf`: Performance improvements

### 2. Detailed Summary

A good PR description includes:

**Template:**
```markdown
## Overview
Brief explanation of what this PR does and why.

## Changes
- Added X feature
- Modified Y component
- Fixed Z bug
- Removed deprecated A

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Edge cases covered

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Breaking Changes
List any breaking changes and migration steps.

## Related Issues
Fixes #123
Related to #456

## Checklist
- [ ] Code follows project style guide
- [ ] Tests added and passing
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Reviewed own code
```

### 3. PR Rules

**Before Creating PR:**
- [ ] Branch is up to date with base branch
- [ ] All tests pass locally
- [ ] Code is linted and formatted
- [ ] No debug code or console logs
- [ ] Documentation updated

**PR Content:**
- [ ] Title is concise and descriptive
- [ ] Description explains what, why, and how
- [ ] Screenshots for UI changes
- [ ] Breaking changes highlighted
- [ ] Linked to related issues

**Review Process:**
- [ ] Request reviewers
- [ ] Address feedback promptly
- [ ] Mark conversations as resolved
- [ ] Keep PR scope focused
- [ ] Squash commits before merge (if required)

### 4. PR Size Guidelines

**Ideal PR:**
- Changes: 200-400 lines
- Files: 3-8 files
- Time to review: 10-20 minutes

**Too Large?**
- Split into multiple PRs
- Create feature branches
- Use stacked PRs for dependencies

## Cursor + GitHub CLI Workflow

### Workflow 1: Feature Branch to PR

```bash
# 1. Create feature branch
git checkout -b feat/user-profile

# 2. Make changes in Cursor
# ... code in Cursor ...

# 3. Commit with descriptive message
git add .
git commit -m "feat(profile): add user profile page with avatar upload"

# 4. Push branch
git push -u origin feat/user-profile

# 5. Create PR with detailed description
gh pr create --title "feat(profile): add user profile page" \
  --body "## Overview
Implements user profile page with avatar upload functionality.

## Changes
- Created ProfilePage component
- Added avatar upload with preview
- Integrated with user API endpoint
- Added profile update form with validation

## Testing
- [x] Unit tests added for form validation
- [x] Integration test for profile update
- [x] Manual testing completed
- [x] Tested with different image formats

## Screenshots
[Add screenshot]

Fixes #234"
```

### Workflow 2: Quick Fix

```bash
# 1. Create hotfix branch
git checkout -b fix/login-redirect

# 2. Fix bug in Cursor
# ... make fix ...

# 3. Commit and push
git add .
git commit -m "fix(auth): correct redirect after login"
git push -u origin fix/login-redirect

# 4. Create PR
gh pr create --title "fix(auth): correct redirect after login" \
  --body "Fixes redirect issue where users were sent to 404 after login. Now correctly redirects to dashboard." \
  --assignee @me
```

### Workflow 3: Using Cursor AI for PR Descriptions

**Step 1:** Make your changes in Cursor

**Step 2:** Use Cursor Chat to generate PR description
```
Prompt: "Generate a detailed PR description for the changes I made. 
Include overview, list of changes, testing checklist, and any breaking changes."
```

**Step 3:** Copy AI-generated description

**Step 4:** Create PR with description
```bash
gh pr create --title "feat(dashboard): add analytics widgets" \
  --body "$(pbpaste)"  # macOS
# or
gh pr create --title "feat(dashboard): add analytics widgets" \
  --body "$(Get-Clipboard)"  # Windows PowerShell
```

### Workflow 4: Code Review from Terminal

```bash
# 1. List open PRs
gh pr list

# 2. Check out PR
gh pr checkout 123

# 3. Review code in Cursor
# Open files and examine changes

# 4. Run tests
npm test

# 5. Approve or request changes
gh pr review 123 --approve --body "LGTM! Great implementation of the feature."

# or request changes
gh pr review 123 --request-changes --body "Please add error handling for API failures"
```

## Advanced Tips

### 1. PR Templates

Create `.github/pull_request_template.md`:
```markdown
## Description
<!-- Explain what this PR does -->

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing

## Checklist
- [ ] Code follows style guide
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

Then PR creation will auto-populate with template.

### 2. Aliases for Common Commands

Add to `.zshrc` or `.bashrc`:
```bash
# PR shortcuts
alias prc='gh pr create'
alias prl='gh pr list'
alias prv='gh pr view'
alias prm='gh pr merge --squash'

# Quick PR with Cursor
alias prq='git push && gh pr create --fill'
```

### 3. View PR in Cursor

```bash
# Checkout PR and open in Cursor
gh pr checkout 123 && cursor .
```

### 4. Bulk Operations

```bash
# List all your open PRs
gh pr list --author @me --state open

# Close multiple stale PRs
gh pr list --author @me --state open --json number --jq '.[].number' | \
  xargs -I {} gh pr close {}

# View all PRs needing review
gh pr list --label "needs-review"
```

### 5. CI/CD Integration

```bash
# View PR status checks
gh pr checks 123

# Wait for checks to pass
gh pr checks 123 --watch

# Re-run failed checks
gh run rerun 456
```

## Common Patterns

### Pattern 1: Draft PR for Early Feedback

```bash
# Push work-in-progress code
git push -u origin feature/new-dashboard

# Create draft PR
gh pr create --draft \
  --title "WIP: Redesign dashboard" \
  --body "Early version for feedback on layout and structure. Not ready for full review."

# Mark ready when complete
gh pr ready
```

### Pattern 2: Stacked PRs

```bash
# Base feature
git checkout -b feat/api-base
# ... make changes ...
gh pr create --base main

# Dependent feature
git checkout -b feat/api-advanced
# ... make changes ...
gh pr create --base feat/api-base
```

### Pattern 3: Quick Hotfix

```bash
# Create branch, fix, and PR in one flow
git checkout -b fix/critical-bug && \
  # ... make fix in Cursor ... && \
  git add . && \
  git commit -m "fix: resolve critical login bug" && \
  git push -u origin fix/critical-bug && \
  gh pr create --title "fix: resolve critical login bug" \
    --body "Emergency fix for production login issue" \
    --assignee @me \
    --label "urgent"
```

## Troubleshooting

### Authentication Issues

```bash
# Re-authenticate
gh auth login

# Check auth status
gh auth status

# Refresh token
gh auth refresh
```

### PR Creation Fails

```bash
# Ensure you're on the correct branch
git branch --show-current

# Ensure branch is pushed
git push -u origin $(git branch --show-current)

# Check if remote repository exists
gh repo view
```

### Permission Errors

```bash
# Check your permissions
gh api repos/:owner/:repo --jq '.permissions'

# Ensure you have push access
gh repo view --json permissions
```

## Integration with Cursor

### 1. Use Cursor for PR Descriptions

Ask Cursor Chat:
```
"Review my recent commits and generate a comprehensive PR description following our team's template"
```

### 2. Code Review Assistance

After checking out a PR:
```
"Analyze the changes in this PR and identify potential issues or improvements"
```

### 3. Automated Testing

```
"Write tests for the changes in this PR"
```

### 4. Documentation

```
"Update documentation to reflect the changes in this PR"
```

## Best Practices Checklist

### Before Creating PR:
- [ ] Code is complete and tested
- [ ] Branch is up-to-date with main
- [ ] All tests pass
- [ ] Code is linted
- [ ] No debug statements
- [ ] Documentation updated

### PR Title:
- [ ] Follows conventional commits format
- [ ] Concise (50 characters or less)
- [ ] Clear and descriptive
- [ ] Includes scope when relevant

### PR Description:
- [ ] Explains what and why
- [ ] Lists all changes
- [ ] Includes testing checklist
- [ ] Has screenshots for UI changes
- [ ] Notes breaking changes
- [ ] Links related issues

### Review Process:
- [ ] Request appropriate reviewers
- [ ] Label PR correctly
- [ ] Assign to milestone/project
- [ ] Respond to feedback promptly
- [ ] Keep PR scope focused
- [ ] Resolve all conversations

## Resources

- [GitHub CLI Documentation](https://cli.github.com/manual/)
- [GitHub CLI Repository](https://github.com/cli/cli)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [The Art of the Pull Request](https://hackernoon.com/the-art-of-pull-requests-6f0f099850f9)

## Next Steps

**Practice:**
1. Install and authenticate GitHub CLI
2. Create your first PR from terminal
3. Review a PR using `gh`
4. Experiment with different workflows

**Advanced:**
1. Set up PR templates
2. Create custom aliases
3. Integrate with CI/CD
4. Automate common tasks

---

See **TASK.md** for hands-on exercises!
