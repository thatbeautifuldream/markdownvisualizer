---
title: Markdown Task Lists & Checkboxes - Complete Guide
description: Master markdown task lists with interactive checkboxes. Learn syntax, nested lists, GitHub integration, and best practices for project tracking and documentation.
category: Guide
date: 2026-03-07
---

# Markdown Task Lists & Checkboxes

Markdown task lists use checkboxes with `- [ ]` for incomplete and `- [x]` for completed items. On GitHub, these render as interactive checkboxes that automatically commit changes when checked. Perfect for tracking progress in issues, PRs, and documentation.

_**Quick answer:** Create task lists with `- [ ]` for unchecked and `- [x]` for checked items. In GitHub issues and PRs, checkboxes are clickable and auto-commit. Use nested lists for subtasks and structure._

---

## Basic Task List Syntax

### Simple Task List

```markdown
- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
- [ ] Another incomplete task
```

### Rendered Output

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
- [ ] Another incomplete task

### Task List Structure

```markdown
- [x] Completed: Checkbox with 'x' is checked
- [ ] Incomplete: Checkbox with space is unchecked
```

**Key points:**
- `- [x]` = Completed/checked
- `- [ ]` = Incomplete/unchecked
- Space inside brackets `[]` is required for unchecked

## Nested Task Lists

### Two-Level Nesting

```markdown
- [x] Setup project
  - [x] Initialize repository
  - [x] Add .gitignore
  - [ ] Create README.md
- [ ] Implement features
  - [ ] User authentication
  - [ ] Data persistence
  - [ ] API endpoints
```

### Rendered Output

- [x] Setup project
  - [x] Initialize repository
  - [x] Add .gitignore
  - [ ] Create README.md
- [ ] Implement features
  - [ ] User authentication
  - [ ] Data persistence
  - [ ] API endpoints

### Three-Level Nesting

```markdown
- [ ] Main task
  - [x] Subtask 1
    - [x] Sub-subtask A
    - [ ] Sub-subtask B
  - [ ] Subtask 2
    - [x] Sub-subtask C
    - [ ] Sub-subtask D
```

**Best practice:** Limit nesting to 2-3 levels. Too many levels make task lists hard to read.

## Task List Use Cases

### GitHub Issue Tracking

```markdown
## Bug Fix: Login Timeout

**Description:** Users are experiencing timeout errors when attempting to log in with valid credentials.

**Reproduction Steps:**
1. Navigate to login page
2. Enter valid email and password
3. Click login button
4. Error: "Login timeout after 30 seconds"

**To Fix Checklist:**

- [x] Reproduce the issue locally
- [x] Identify root cause in authentication service
- [ ] Implement timeout fix
- [ ] Add error handling for network delays
- [ ] Update authentication timeout to 60 seconds
- [ ] Add unit tests for timeout scenarios
- [ ] Test with different network conditions
- [ ] Update documentation with new timeout value

**Expected Behavior:**
Login should complete within 30 seconds with proper error handling for network issues.

**Priority:** High
**Assignee:** @developer
```

### Pull Request Checklist

```markdown
## PR #123: Add User Profile Feature

**Description:** Adds user profile page with avatar upload, bio editing, and privacy settings.

**Changes:**
- Added `/profile` route
- Implemented avatar upload with image processing
- Created bio editing form
- Added privacy settings toggle

**Code Review Checklist:**

- [ ] Code follows project style guidelines
- [ ] Self-review completed before submission
- [ ] Comments added for complex logic
- [ ] No console.log statements left in production code
- [ ] Error handling implemented for all edge cases
- [ ] Accessibility checked (ARIA labels, keyboard navigation)
- [ ] Mobile responsive design verified

**Testing Checklist:**

- [x] Unit tests added for new features
- [x] All existing tests passing
- [ ] Integration tests completed
- [ ] Manual testing on Chrome, Firefox, Safari
- [ ] Mobile testing on iOS and Android
- [ ] Cross-browser compatibility verified

**Documentation Checklist:**

- [ ] README updated with new features
- [ ] API documentation updated
- [ ] Changelog entry added
- [ ] User guide screenshots updated

**Deployment Checklist:**

- [ ] Staging deployment successful
- [ ] Production backup created
- [ ] Migration scripts tested
- [ ] Feature flags configured
- [ ] Rollback plan documented
```

### Sprint Planning

```markdown
## Sprint 23 - March 2026

**Sprint Goal:** Improve user onboarding experience

**Stories:**

### User Onboarding Flow
- [ ] Create onboarding welcome screen
- [ ] Implement step-by-step tutorial
- [ ] Add progress indicator
- [ ] Create user profile setup wizard
- [ ] Add skip button for returning users

### Documentation Updates
- [x] Write onboarding documentation
- [ ] Create video tutorial
- [ ] Update FAQ with common onboarding questions
- [ ] Translate onboarding to Spanish

### Bug Fixes
- [ ] Fix onboarding navigation bug
- [ ] Resolve profile photo upload issue
- [ ] Fix tutorial progress not saving

**Blocked:** User onboarding flow (waiting on design approval)

**In Progress:** Documentation updates

**Completed:** None yet
```

### Tutorial Checklist

```markdown
## Setup Guide Checklist

Before you begin this tutorial, ensure you have:

### Prerequisites

- [ ] Node.js 18+ installed
  - Run `node -v` to check version
- [ ] npm or yarn package manager
- [ ] Git for version control
  - Run `git --version` to verify
- [ ] A code editor (VS Code recommended)
- [ ] A GitHub account

### Environment Setup

- [ ] Clone the repository
  ```bash
  git clone https://github.com/user/project.git
  cd project
  ```
- [ ] Install dependencies
  ```bash
  npm install
  ```
- [ ] Copy environment template
  ```bash
  cp .env.example .env
  ```
- [ ] Edit .env with your values
- [ ] Start development server
  ```bash
  npm run dev
  ```

### Verification

- [ ] Verify server starts without errors
- [ ] Access application at http://localhost:3000
- [ ] Test database connection
- [ ] Run automated tests
  ```bash
  npm test
  ```

### Next Steps

- [ ] Read the documentation
- [ ] Explore the codebase
- [ ] Try running the example application
- [ ] Join the community Discord
```

### Release Checklist

```markdown
## Version 2.0.0 Release Checklist

### Pre-Release

- [ ] All features from sprint completed
- [ ] All pull requests merged
- [ ] Code review completed for all changes
- [ ] All tests passing (including integration tests)
- [ ] Performance benchmarks meet targets
- [ ] Security audit completed
- [ ] Dependencies updated to latest stable versions
- [ ] Documentation updated
- [ ] Changelog written

### Testing

- [ ] Smoke tests passed
- [ ] Regression tests passed
- [ ] User acceptance testing completed
- [ ] Browser compatibility verified
- [ ] Mobile testing completed
- [ ] Accessibility testing passed

### Release

- [ ] Create release branch from main
- [ ] Update version numbers
- [ ] Build production assets
- [ ] Run production build locally
- [ ] Tag release with version number
- [ ] Push tag to GitHub
- [ ] Create GitHub release with changelog
- [ ] Deploy to staging environment
- [ ] Verify staging deployment
- [ ] Deploy to production
- [ ] Verify production deployment
- [ ] Monitor application logs and metrics

### Post-Release

- [ ] Announce release to users
- [ ] Update documentation website
- [ ] Post announcement on social media
- [ ] Monitor error rates and performance
- [ ] Gather user feedback
- [ ] Schedule retrospective meeting
```

## Task List Best Practices

### 1. Use Descriptive Task Names

```markdown
# Bad - Vague
- [ ] Do the thing
- [ ] Fix stuff

# Good - Specific
- [ ] Implement user authentication
- [ ] Fix login timeout error
```

### 2. Keep Tasks Atomic

```markdown
# Bad - Multiple tasks in one checkbox
- [ ] Setup database, create tables, add seed data

# Good - Separate tasks
- [ ] Setup database connection
- [ ] Create user tables
- [ ] Add seed data
```

### 3. Organize with Headings

```markdown
## Testing
- [ ] Unit tests
- [ ] Integration tests

## Documentation
- [ ] API docs
- [ ] User guide

## Deployment
- [ ] Staging deploy
- [ ] Production deploy
```

### 4. Use Nesting for Subtasks

```markdown
# Bad - Flat list, hard to read
- [ ] Setup project
- [ ] Create repository
- [ ] Add .gitignore
- [ ] Create README
- [ ] Install dependencies

# Good - Nested structure
- [ ] Setup project
  - [ ] Create repository
  - [ ] Add .gitignore
  - [ ] Create README
  - [ ] Install dependencies
```

### 5. Include Context and Due Dates

```markdown
## High Priority Tasks

- [ ] Fix login bug (Due: 2026-03-10, Priority: High)
- [ ] Deploy to staging (Due: 2026-03-12, Priority: High)
```

### 6. Mark Completed Items Clearly

Use `- [x]` for completed tasks. Some editors render these with strikethrough:

- [x] Completed task
- [ ] Incomplete task

### 7. Limit Task List Length

Long task lists are hard to maintain. Consider breaking into multiple lists:

```markdown
## Sprint 23 Tasks (March 1-15)

- [ ] Task 1
- [ ] Task 2

## Sprint 24 Tasks (March 16-30)

- [ ] Task 3
- [ ] Task 4
```

## Task List in Different Contexts

### README.md Task Lists

Task lists in README files show project status:

```markdown
## Project Status

- [x] Core functionality implemented
- [x] Basic authentication
- [ ] User profile pages
- [ ] Admin dashboard
- [ ] Mobile responsive design

**Completion:** 40%
```

**Note:** Checkboxes in README files are static (not clickable) on GitHub.

### GitHub Issues (Interactive)

Task lists in GitHub issues are interactive:

```markdown
## TODO

- [x] Review issue comments
- [ ] Reproduce bug
- [ ] Implement fix
- [ ] Test fix
- [ ] Submit PR
```

**Interactive:** Clicking checkboxes automatically commits changes to the issue.

### Pull Requests (Tracking)

Use task lists in PRs for review progress:

```markdown
## Review Checklist

- [x] Code review completed
- [ ] Tests passing
- [ ] Documentation updated
- [ ] Ready to merge
```

### Markdown Files (Static)

Task lists in regular markdown files render as static checkboxes:

```markdown
## Checklist for This Guide

- [x] Understand basic syntax
- [ ] Learn nested task lists
- [ ] Explore use cases
- [ ] Master best practices
```

## Advanced Task List Features

### Task List with Links

```markdown
- [x] Read [documentation](https://docs.example.com)
- [ ] Submit [issue #123](https://github.com/user/repo/issues/123)
```

### Task List with Code

```markdown
- [x] Run `npm install` to install dependencies
- [ ] Execute `npm test` to verify tests
```

### Task List with Emojis

```markdown
- [x] :white_check_mark: Setup complete
- [x] :white_check_mark: Tests passing
- [ ] :x: Documentation incomplete
- [ ] :warning: Deployment pending
```

### Task List with Priority Labels

```markdown
- [ ] [High] Fix critical bug
- [ ] [Medium] Add feature
- [ ] [Low] Update README
```

## Common Pitfalls

### Inconsistent Formatting

```markdown
# Bad - Mixed formats
- [x] Completed
- [X] Also completed (capital X)
- [  ] Incomplete (extra space)
- [ ]Incomplete (missing space)

# Good - Consistent format
- [x] Completed
- [ ] Incomplete
```

### Too Many Levels

```markdown
# Bad - 4+ levels, hard to read
- [ ] Task
  - [ ] Subtask
    - [ ] Sub-subtask
      - [ ] Deep subtask

# Good - 2-3 levels max
- [ ] Task
  - [ ] Subtask
    - [ ] Sub-subtask
```

### Overly Broad Tasks

```markdown
# Bad - Vague, unactionable
- [ ] Improve performance
- [ ] Make it better

# Good - Specific, actionable
- [ ] Reduce API response time from 500ms to 200ms
- [ ] Add error handling for network failures
```

### Missing Context

```markdown
# Bad - No explanation
- [ ] Fix bug
- [ ] Add feature

# Good - Provides context
- [ ] Fix login timeout bug (issue #456)
- [ ] Add user profile upload feature (PR #123)
```

## FAQ

### Are task lists standard markdown?

No, task lists are part of GitHub Flavored Markdown (GFM). They work on GitHub, GitLab, and GFM-compatible platforms.

### Can I use task lists in regular markdown files?

Yes, but checkboxes are static (not clickable) outside of GitHub issues and PRs. They'll render visually but won't be interactive.

### Do task lists work in all markdown editors?

No, only GFM-compatible editors support task lists. Standard markdown editors may not render checkboxes correctly.

### Can I have multiple task lists in one document?

Yes, you can have multiple task lists with different headings and contexts in a single markdown file.

### How do I indicate task priority?

Add labels or emojis: `- [ ] [High] Task` or `- [ ] :fire: Important task`

### What happens when I check a box on GitHub?

Checking a box in a GitHub issue or PR automatically commits the change to the issue/PR history.

## Summary

**Task List Syntax:**

```markdown
- [x] Completed task
- [ ] Incomplete task
```

**Nested Tasks:**

```markdown
- [ ] Main task
  - [x] Subtask 1
  - [ ] Subtask 2
```

**Best Practices:**

1. Use descriptive, specific task names
2. Keep tasks atomic (one action per checkbox)
3. Organize with headings and nesting
4. Include context, due dates, and priority
5. Limit nesting to 2-3 levels
6. Break long lists into multiple sections

**Use Cases:**
- GitHub issue tracking
- Pull request checklists
- Sprint planning
- Tutorial guides
- Release checklists
- Project status tracking

[Try Task Lists in Markdown Visualizer](/) — Free editor with GFM support for task lists and interactive checkboxes.

**Data sources:** GitHub Flavored Markdown specification, GitHub documentation, CommonMark specification.
