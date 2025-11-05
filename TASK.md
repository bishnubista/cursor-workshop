# Tasks: GitHub CLI Integration

Master GitHub CLI to streamline your development workflow with terminal-based PR management.

## Prerequisites

- Git installed and configured
- GitHub account
- Basic understanding of git workflows
- Terminal/command line familiarity

---

## Exercise 1: Installation and Setup

**Objective:** Install and authenticate GitHub CLI on your system.

### macOS:
```bash
# Install using Homebrew
brew install gh

# Verify installation
gh --version

# Authenticate
gh auth login
```

### Windows:
```bash
# Install using WinGet
winget install --id GitHub.cli

# Verify installation (restart terminal first)
gh --version

# Authenticate
gh auth login
```

**Authentication Steps:**
1. Choose `GitHub.com`
2. Select `HTTPS` (or SSH if you prefer)
3. Choose `Login with a web browser`
4. Copy the one-time code
5. Press Enter, authorize in browser

**Verify:**
```bash
gh auth status
```

✅ **Success Criteria:**
- [ ] `gh` command works
- [ ] Successfully authenticated
- [ ] Can view your username in `gh auth status`

---

## Exercise 2: Configure GitHub CLI

**Objective:** Set up GitHub CLI preferences and git integration.

**Tasks:**

1. **Set Git Protocol:**
```bash
gh config set git_protocol https
```

2. **Set Preferred Editor:**
```bash
gh config set editor "cursor"
```

3. **View All Settings:**
```bash
gh config list
```

4. **Set Default PR Template Behavior:**
```bash
gh config set prompt enabled
```

✅ **Success Criteria:**
- [ ] Git protocol configured
- [ ] Editor preference set
- [ ] Settings verified with `gh config list`

---

## Exercise 3: Create Your First PR from Terminal

**Objective:** Create a pull request using GitHub CLI.

**Setup:**
```bash
# Create a test repository or use existing one
gh repo create gh-cli-practice --public --clone

# Navigate to repository
cd gh-cli-practice

# Create a feature branch
git checkout -b feat/add-readme

# Create a README file
echo "# GitHub CLI Practice" > README.md
echo "Learning to use GitHub CLI effectively." >> README.md

# Commit changes
git add README.md
git commit -m "feat(docs): add initial README"

# Push branch
git push -u origin feat/add-readme
```

**Create PR:**
```bash
# Option 1: Interactive mode
gh pr create

# Option 2: With flags
gh pr create \
  --title "feat(docs): add initial README" \
  --body "Adds basic README file with project description"
```

✅ **Success Criteria:**
- [ ] Feature branch created
- [ ] Changes committed with conventional commit format
- [ ] PR created successfully
- [ ] PR visible on GitHub

---

## Exercise 4: Practice Conventional Commit Messages

**Objective:** Master the conventional commit format for PR titles.

**Create PRs with these types:**

1. **Feature Addition:**
```bash
git checkout -b feat/user-authentication
# Make changes
git commit -m "feat(auth): implement JWT-based authentication"
gh pr create --title "feat(auth): implement JWT-based authentication"
```

2. **Bug Fix:**
```bash
git checkout -b fix/validation-error
# Make changes
git commit -m "fix(forms): resolve email validation regex"
gh pr create --title "fix(forms): resolve email validation regex"
```

3. **Documentation:**
```bash
git checkout -b docs/api-guide
# Make changes
git commit -m "docs(api): add endpoint documentation"
gh pr create --title "docs(api): add endpoint documentation"
```

4. **Refactoring:**
```bash
git checkout -b refactor/auth-service
# Make changes
git commit -m "refactor(auth): simplify token validation logic"
gh pr create --title "refactor(auth): simplify token validation logic"
```

✅ **Success Criteria:**
- [ ] All commit messages follow `type(scope): description` format
- [ ] PR titles are concise (under 60 characters)
- [ ] Scope clearly identifies affected area
- [ ] Description is in imperative mood

---

## Exercise 5: Write Comprehensive PR Descriptions

**Objective:** Create detailed PR descriptions following best practices.

**Task:** Create a PR with a complete description template.

**Create the PR:**
```bash
git checkout -b feat/dashboard

# Make some changes to practice with
mkdir -p src/components
cat > src/components/Dashboard.tsx << 'EOF'
export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Analytics and metrics</p>
    </div>
  );
}
EOF

git add .
git commit -m "feat(dashboard): add dashboard component with metrics"
git push -u origin feat/dashboard

# Create PR with comprehensive description
gh pr create --title "feat(dashboard): add dashboard component" --body "$(cat << 'EOF'
## Overview
Implements the main dashboard component for displaying user analytics and metrics.

## Changes
- Created Dashboard component with TypeScript
- Added basic layout structure
- Prepared component for metrics integration
- Set up component exports

## Testing
- [ ] Component renders without errors
- [ ] Layout displays correctly
- [ ] TypeScript types are correct
- [ ] No console warnings

## Screenshots
![Dashboard Preview](url-to-screenshot)

## Breaking Changes
None

## Related Issues
Relates to #1 - Dashboard Feature Epic

## Checklist
- [x] Code follows project style guide
- [x] Component is typed with TypeScript
- [x] No console errors or warnings
- [ ] Unit tests added (pending)
- [x] Reviewed own code

## Additional Notes
This is the foundation component. Metrics integration will follow in subsequent PRs.
EOF
)"
```

**Required Sections:**
- [ ] Overview (what and why)
- [ ] Changes (bullet list)
- [ ] Testing checklist
- [ ] Screenshots (if UI changes)
- [ ] Breaking changes
- [ ] Related issues
- [ ] PR checklist

✅ **Success Criteria:**
- [ ] Description is comprehensive and clear
- [ ] All sections included
- [ ] Checkboxes used appropriately
- [ ] Related issues linked correctly

---

## Exercise 6: PR Management Commands

**Objective:** Learn to manage PRs from the terminal.

**Tasks:**

1. **List Your PRs:**
```bash
# All your PRs
gh pr list --author @me

# Open PRs only
gh pr list --author @me --state open

# Filter by label
gh pr list --label "needs-review"
```

2. **View PR Details:**
```bash
# View in terminal
gh pr view 1

# View in browser
gh pr view 1 --web

# View diff
gh pr diff 1
```

3. **Check Out a PR:**
```bash
# Check out PR #1
gh pr checkout 1

# Verify you're on PR branch
git branch --show-current
```

4. **Update PR:**
```bash
# Make changes
echo "Updated content" >> README.md
git add .
git commit -m "docs: update README content"
git push
```

5. **Manage PR State:**
```bash
# Mark draft as ready
gh pr ready 1

# Close PR
gh pr close 1

# Reopen PR
gh pr reopen 1
```

✅ **Success Criteria:**
- [ ] Can list and filter PRs
- [ ] Can view PR details in terminal
- [ ] Successfully checked out a PR
- [ ] Updated PR with new commits
- [ ] Managed PR state (ready/close/reopen)

---

## Exercise 7: Code Review Workflow

**Objective:** Review and approve PRs using GitHub CLI.

**Scenario:** Review a teammate's PR (or your own for practice).

**Tasks:**

1. **Find PRs to Review:**
```bash
# List all open PRs
gh pr list

# List PRs assigned to you
gh pr list --assignee @me
```

2. **Review Process:**
```bash
# Check out the PR
gh pr checkout 2

# Review changes in Cursor
cursor .

# View the diff
gh pr diff 2

# Run tests
npm test  # or your test command
```

3. **Leave Review:**

**Approve:**
```bash
gh pr review 2 --approve --body "LGTM! Great implementation. Code is clean and well-tested."
```

**Request Changes:**
```bash
gh pr review 2 --request-changes --body "Please add error handling for the API call. See inline comments for details."
```

**Comment Only:**
```bash
gh pr review 2 --comment --body "Consider using async/await instead of .then() for consistency with the rest of the codebase."
```

4. **Merge PR:**
```bash
# Merge with squash
gh pr merge 2 --squash

# Merge with merge commit
gh pr merge 2 --merge

# Merge with rebase
gh pr merge 2 --rebase

# Delete branch after merge
gh pr merge 2 --squash --delete-branch
```

✅ **Success Criteria:**
- [ ] Successfully reviewed PR in terminal
- [ ] Left appropriate review (approve/request changes/comment)
- [ ] Merged PR using preferred merge strategy
- [ ] Verified merge on GitHub

---

## Exercise 8: Draft PR for Early Feedback

**Objective:** Create draft PRs for work-in-progress code.

**Task:**

```bash
# Start new feature
git checkout -b feat/user-settings

# Make initial changes
mkdir -p src/pages
cat > src/pages/Settings.tsx << 'EOF'
export function Settings() {
  // TODO: Implement settings page
  return <div>Settings Page - Work in Progress</div>;
}
EOF

git add .
git commit -m "feat(settings): initial settings page structure"
git push -u origin feat/user-settings

# Create draft PR
gh pr create --draft \
  --title "WIP: feat(settings): user settings page" \
  --body "## Status
🚧 Work in Progress - Not ready for full review

## Overview
Building user settings page with profile and preferences management.

## Current Progress
- [x] Basic page structure
- [ ] Profile section
- [ ] Preferences section
- [ ] Form validation
- [ ] API integration

## Feedback Needed
Would appreciate early feedback on:
- Page layout approach
- State management pattern
- Component structure

## Next Steps
1. Implement profile section
2. Add preferences UI
3. Integrate with API
4. Add form validation"

# Continue working...
# When ready, mark as ready for review
gh pr ready
```

✅ **Success Criteria:**
- [ ] Draft PR created successfully
- [ ] Status clearly marked as WIP
- [ ] Description explains current state
- [ ] Feedback areas identified
- [ ] Successfully marked ready when complete

---

## Exercise 9: Use Cursor AI for PR Descriptions

**Objective:** Leverage Cursor AI to generate high-quality PR descriptions.

**Task:**

1. **Make Changes:**
```bash
git checkout -b feat/search-functionality

# Create search component
mkdir -p src/components
cat > src/components/Search.tsx << 'EOF'
import { useState } from 'react';

export function Search({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
EOF

git add .
git commit -m "feat(search): implement search component with form handling"
git push -u origin feat/search-functionality
```

2. **Generate Description with Cursor:**

Open Cursor Chat (Cmd+L / Ctrl+L) and ask:
```
Generate a comprehensive PR description for my recent changes. 
Include:
- Overview of what was added and why
- Detailed list of changes
- Testing checklist
- Any breaking changes
- Follow our PR template format with all sections
```

3. **Create PR with Generated Description:**

```bash
# Copy the AI-generated description
# Then create PR:
gh pr create --title "feat(search): implement search component" --body "<paste-description-here>"
```

**Alternative - Using Clipboard:**

**macOS:**
```bash
# Copy description from Cursor, then:
gh pr create --title "feat(search): implement search component" --body "$(pbpaste)"
```

**Windows PowerShell:**
```bash
gh pr create --title "feat(search): implement search component" --body "$(Get-Clipboard)"
```

✅ **Success Criteria:**
- [ ] Used Cursor AI to generate description
- [ ] Description is comprehensive and well-formatted
- [ ] All required sections included
- [ ] Description accurately reflects changes
- [ ] PR created successfully

---

## Exercise 10: Complete PR Workflow

**Objective:** Execute a full feature development workflow.

**Scenario:** Implement a complete feature from branch creation to merge.

**Tasks:**

1. **Plan Feature:**
```bash
# Create issue first (optional)
gh issue create \
  --title "Add user profile avatar upload" \
  --body "Users need ability to upload and update profile pictures"
```

2. **Create Feature Branch:**
```bash
git checkout main
git pull origin main
git checkout -b feat/avatar-upload
```

3. **Implement Feature:**
```bash
# Create component
mkdir -p src/components/profile
cat > src/components/profile/AvatarUpload.tsx << 'EOF'
import { useState } from 'react';

export function AvatarUpload({ onUpload }: { onUpload: (file: File) => void }) {
  const [preview, setPreview] = useState<string>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div>
      {preview && <img src={preview} alt="Avatar preview" />}
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}
EOF
```

4. **Commit with Good Message:**
```bash
git add .
git commit -m "feat(profile): add avatar upload component with preview

- Implement AvatarUpload component
- Add file input with image preview
- Handle file selection and upload callback
- Support image file types only"
```

5. **Push and Create PR:**
```bash
git push -u origin feat/avatar-upload

gh pr create \
  --title "feat(profile): add avatar upload component" \
  --body "## Overview
Implements avatar upload functionality for user profiles.

## Changes
- Created AvatarUpload component
- Added file input with type restrictions
- Implemented image preview
- Added upload callback for parent components

## Testing
- [x] Component renders correctly
- [x] File selection works
- [x] Preview displays uploaded image
- [x] Only accepts image files
- [ ] Integration tests (pending API)

## Screenshots
[Would include screenshot here]

## Breaking Changes
None - new feature addition

## Related Issues
Closes #5

## Checklist
- [x] TypeScript types defined
- [x] Component is reusable
- [x] No console errors
- [x] Follows project conventions
- [ ] Unit tests added (next PR)

## Next Steps
- API integration for actual upload
- Error handling for large files
- Add loading state" \
  --assignee @me \
  --label "enhancement"
```

6. **Review and Iterate:**
```bash
# View PR
gh pr view

# If changes needed, make them
# ... edit files ...
git add .
git commit -m "feat(profile): add file size validation"
git push
```

7. **Merge When Approved:**
```bash
# Check CI status
gh pr checks

# Merge with squash
gh pr merge --squash --delete-branch
```

8. **Clean Up:**
```bash
# Switch back to main
git checkout main
git pull origin main

# Verify branch deleted
git branch -a
```

✅ **Success Criteria:**
- [ ] Issue created (optional)
- [ ] Feature branch created from updated main
- [ ] Feature implemented completely
- [ ] Commit message is descriptive and formatted correctly
- [ ] PR description is comprehensive
- [ ] PR has appropriate labels and assignees
- [ ] Changes pushed and PR updated
- [ ] PR merged and branch deleted
- [ ] Returned to main and pulled latest

---

## Exercise 11: PR Template Setup

**Objective:** Create and use PR templates for consistency.

**Task:**

1. **Create PR Template:**
```bash
# Create GitHub templates directory
mkdir -p .github

# Create pull request template
cat > .github/pull_request_template.md << 'EOF'
## Description
<!-- Provide a brief description of changes -->

## Type of Change
- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update
- [ ] ♻️ Code refactoring
- [ ] ⚡ Performance improvement
- [ ] ✅ Test update

## Changes Made
<!-- List all changes -->
- 
- 
- 

## Testing Completed
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Edge cases tested
- [ ] No console errors/warnings

## Screenshots/Recordings
<!-- If applicable, add screenshots or screen recordings -->

## Breaking Changes
<!-- List any breaking changes and migration steps -->

## Related Issues
<!-- Link related issues: Fixes #123, Relates to #456 -->

## Checklist
- [ ] Code follows project style guide
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings introduced
- [ ] Tests added and passing
- [ ] Branch is up-to-date with base branch

## Additional Context
<!-- Add any other context about the PR here -->
EOF

git add .github/pull_request_template.md
git commit -m "chore: add pull request template"
git push
```

2. **Test Template:**
```bash
# Create new PR - should auto-populate with template
git checkout -b test/pr-template
echo "test" > test.txt
git add test.txt
git commit -m "test: verify PR template"
git push -u origin test/pr-template

gh pr create
# Template should appear in editor
```

✅ **Success Criteria:**
- [ ] Template file created in `.github/`
- [ ] Template includes all required sections
- [ ] New PRs auto-populate with template
- [ ] Template improves PR consistency

---

## Bonus Challenges

### Challenge 1: Custom Aliases
Create shell aliases for common workflows:

```bash
# Add to .zshrc or .bashrc
alias prc='gh pr create'
alias prl='gh pr list --author @me'
alias prv='gh pr view'
alias prm='gh pr merge --squash --delete-branch'
alias prf='git push && gh pr create --fill'
```

### Challenge 2: Stacked PRs
Practice creating dependent PRs:
```bash
# Base PR
git checkout -b feat/api-base
# ... changes ...
gh pr create --base main

# Dependent PR
git checkout -b feat/api-advanced
# ... changes ...
gh pr create --base feat/api-base
```

### Challenge 3: Batch Operations
List and close multiple PRs:
```bash
# List all your open draft PRs
gh pr list --author @me --state open --draft

# Close old PRs (carefully!)
gh pr list --author @me --json number --jq '.[].number'
```

### Challenge 4: CI/CD Integration
Monitor and interact with CI:
```bash
# View checks for PR
gh pr checks 1

# Watch checks in real-time
gh pr checks 1 --watch

# View workflow runs
gh run list

# View specific run
gh run view 123456
```

### Challenge 5: Automate with Scripts
Create a script for your complete workflow:

```bash
cat > create-feature-pr.sh << 'EOF'
#!/bin/bash
# Usage: ./create-feature-pr.sh feature-name "Feature description"

FEATURE_NAME=$1
DESCRIPTION=$2

git checkout main
git pull origin main
git checkout -b "feat/$FEATURE_NAME"

# Your development happens here
echo "Make your changes, then press Enter to continue..."
read

git add .
git commit -m "feat($FEATURE_NAME): $DESCRIPTION"
git push -u origin "feat/$FEATURE_NAME"

gh pr create --title "feat($FEATURE_NAME): $DESCRIPTION" \
  --body "## Overview
$DESCRIPTION

## Changes
- Implementation of $FEATURE_NAME

## Testing
- [ ] Tests added
- [ ] Manual testing completed

## Checklist
- [ ] Code reviewed
- [ ] Documentation updated"
EOF

chmod +x create-feature-pr.sh
```

---

## Real-World Scenarios

### Scenario 1: Hotfix for Production

```bash
# 1. Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-login-bug

# 2. Make the fix
# ... fix code ...

# 3. Fast-track PR
git add .
git commit -m "fix(auth): resolve critical login redirect issue"
git push -u origin hotfix/critical-login-bug

gh pr create \
  --title "fix(auth): resolve critical login redirect" \
  --body "🚨 CRITICAL HOTFIX

## Issue
Users unable to login due to redirect loop

## Fix
Corrected redirect logic in auth callback

## Testing
- [x] Verified locally
- [x] Tested in staging
- [x] Ready for production

## Rollback Plan
Revert commit abc123 if issues occur" \
  --label "critical,hotfix" \
  --assignee @me

# 4. Request immediate review
gh pr review --request @reviewer-username
```

### Scenario 2: Large Feature with Multiple PRs

```bash
# Create feature branch
git checkout -b feat/user-dashboard

# Work on dashboard
# ... implement ...

# Create first PR for base structure
git checkout -b feat/dashboard-base
git add src/components/Dashboard.tsx
git commit -m "feat(dashboard): add base dashboard component"
git push -u origin feat/dashboard-base
gh pr create --base main

# Create second PR for widgets
git checkout feat/user-dashboard
git checkout -b feat/dashboard-widgets
git add src/components/widgets/
git commit -m "feat(dashboard): add analytics widgets"
git push -u origin feat/dashboard-widgets
gh pr create --base feat/dashboard-base
```

### Scenario 3: Addressing Review Feedback

```bash
# Check out your PR
gh pr checkout 10

# View the review comments
gh pr view 10

# Make requested changes
# ... edit files ...

git add .
git commit -m "refactor(dashboard): address code review feedback

- Extract duplicate logic to utility function
- Add error handling as requested
- Improve variable naming"
git push

# Notify reviewers
gh pr comment 10 --body "✅ All feedback addressed. Ready for re-review. 

Changes made:
- Extracted utility function
- Added error handling
- Improved naming

@reviewer please take another look!"
```

---

## Self-Assessment Checklist

### Installation & Setup
- [ ] GitHub CLI installed on my system
- [ ] Successfully authenticated with GitHub
- [ ] Configured git protocol and editor preferences
- [ ] Set up auto-completion (optional)

### Basic PR Operations
- [ ] Can create PR from terminal
- [ ] Can list and filter PRs
- [ ] Can view PR details in terminal
- [ ] Can check out PRs locally

### PR Best Practices
- [ ] Write conventional commit messages
- [ ] Create concise, descriptive titles
- [ ] Write comprehensive PR descriptions
- [ ] Follow PR template consistently
- [ ] Link related issues correctly

### Code Review
- [ ] Can review PRs from terminal
- [ ] Can approve/request changes/comment
- [ ] Can merge PRs with different strategies
- [ ] Understand when to use draft PRs

### Advanced Skills
- [ ] Created PR templates for projects
- [ ] Set up custom aliases for efficiency
- [ ] Can work with stacked PRs
- [ ] Can use Cursor AI for PR descriptions
- [ ] Comfortable with complete workflows

### Workflow Integration
- [ ] Integrated gh CLI into daily workflow
- [ ] Use terminal for most GitHub operations
- [ ] Leverage Cursor + gh for productivity
- [ ] Follow team's PR rules and conventions

---

## Next Steps

**Immediate:**
1. Install GitHub CLI if not already done
2. Complete exercises 1-5 (basics)
3. Practice creating 3-5 PRs using gh

**This Week:**
1. Complete all exercises
2. Set up PR templates for your projects
3. Create helpful aliases
4. Use gh exclusively for PR management

**Ongoing:**
1. Refine your PR description quality
2. Help team members adopt gh CLI
3. Automate repetitive workflows
4. Share best practices with team

---

## Additional Resources

- [GitHub CLI Manual](https://cli.github.com/manual/)
- [Conventional Commits Spec](https://www.conventionalcommits.org/)
- [Writing Good Commit Messages](https://cbea.ms/git-commit/)
- [Pull Request Best Practices](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)
- [Code Review Best Practices](https://google.github.io/eng-practices/review/)

---

## Troubleshooting Common Issues

### "gh: command not found"
**Solution:** Restart terminal after installation, verify PATH

### "gh auth login fails"
**Solution:** Try manual token: Settings → Developer settings → Personal access tokens

### "PR creation fails"
**Solution:** Ensure branch is pushed: `git push -u origin $(git branch --show-current)`

### "Permission denied"
**Solution:** Check repository permissions: `gh repo view --json permissions`

---

**Ready to master GitHub CLI?** Start with Exercise 1 and work your way through! 🚀
