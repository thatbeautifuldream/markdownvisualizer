---
title: GitHub Flavored Markdown (GFM) Guide - Task Lists, Tables & More
description: Master GitHub Flavored Markdown (GFM) with task lists, tables, autolinks, strikethrough, and GitHub-specific features. Complete guide for GitHub README and issues.
category: Guide
date: 2026-03-07
---

# GitHub Flavored Markdown (GFM) Guide

GitHub Flavored Markdown (GFM) extends standard markdown with powerful features: task lists, tables, autolinks, strikethrough, and GitHub-specific syntax. Master GFM to create professional README files, issues, and documentation on GitHub.

_**Quick answer:** GFM adds tables with `|` separators, task lists with `- [ ]` checkboxes, strikethrough with `~~text~~`, and automatic linking of URLs. These features render on GitHub, GitLab, and GFM-compatible platforms._

---

## What is GitHub Flavored Markdown?

GitHub Flavored Markdown (GFM) is an extension of standard markdown created by GitHub. It adds features that GitHub users need most: tables, task lists, autolinks, and more.

### Why GFM Matters

- **GitHub Native:** Renders natively on GitHub, GitLab, and Gists
- **Task Lists:** Interactive checkboxes in issues and pull requests
- **Tables:** Professional data presentation
- **Autolinks:** URLs automatically become clickable
- **Emoji Support:** Shortcodes for common emojis
- **Issue References:** Link to issues by number

**Usage statistics:** GitHub hosts 100+ million repositories, all using GFM for README files and documentation.

### GFM vs. Standard Markdown

| Feature | Standard Markdown | GFM |
|---------|------------------|------|
| Tables | No | Yes |
| Task Lists | No | Yes |
| Autolinks | No | Yes |
| Strikethrough | No | Yes |
| Issue References | No | Yes |
| User Mentions | No | Yes |
| Emoji | No | Yes |
| Code Fences | Optional | Yes |

## Task Lists

Task lists add interactive checkboxes for tracking work. In GitHub issues and pull requests, checkboxes are clickable.

### Basic Syntax

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

### Nested Task Lists

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

### Task Lists in GitHub Issues

In GitHub issues, task lists track progress:

```markdown
## Sprint Tasks

- [x] Review PR #123
- [ ] Merge PR #123
- [ ] Deploy to staging
- [ ] Test staging deployment
- [ ] Deploy to production
```

Clicking checkboxes in GitHub issues automatically updates the task list.

### Task Lists for Documentation

Use task lists for tutorials and guides:

```markdown
## Setup Checklist

Before you begin, ensure you have:

- [ ] Node.js 18+ installed
- [ ] npm or yarn package manager
- [ ] Git for version control
- [ ] A GitHub account

## Installation Steps

- [x] Clone repository
- [ ] Install dependencies
- [ ] Configure environment variables
- [ ] Start development server
```

## Tables

GFM tables use pipe `|` characters to define columns and rows.

### Basic Table

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Rendered Output

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Alignment in Tables

Add colons `:` to the separator row for alignment:

```markdown
| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Left       | Center       | Right       |
| Text       | Text         | Text        |
```

### Rendered Output

| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Left       | Center       | Right       |
| Text       | Text         | Text        |

### API Documentation Table

```markdown
## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | /api/users | Get all users | Yes |
| POST | /api/users | Create user | Yes |
| GET | /api/users/:id | Get user by ID | Yes |
| PUT | /api/users/:id | Update user | Yes |
| DELETE | /api/users/:id | Delete user | Yes |
```

### Feature Comparison Table

```markdown
## Editor Comparison

| Feature | VS Code | Sublime Text | Vim |
|---------|---------|--------------|------|
| Free | Yes | Yes (evaluation) | Yes |
| Extensions | 10,000+ | 5,000+ | 1,000+ |
| Git Integration | Yes | Via plugin | Native |
| Customization | High | High | High |
| Learning Curve | Low | Low | High |
```

### Configuration Table

```markdown
## Configuration Options

| Option | Type | Default | Description |
|--------|------|----------|-------------|
| port | integer | 3000 | Server port |
| host | string | localhost | Server host |
| debug | boolean | false | Enable debug mode |
| timeout | integer | 30000 | Request timeout (ms) |
| cache.enabled | boolean | true | Enable caching |
| cache.ttl | integer | 3600 | Cache TTL (seconds) |
```

### Table Best Practices

1. **Keep tables concise:** Don't overload with too many columns
2. **Use meaningful headers:** Clear column descriptions
3. **Align appropriately:** Left for text, right for numbers
4. **Use short content:** Long text breaks table layout
5. **Consider scrolling:** For very wide tables, mention horizontal scroll

## Autolinks

GFM automatically converts URLs and email addresses to links without special syntax.

### URL Autolinks

```markdown
Visit https://github.com for code hosting
Check out https://example.com for more info
```

**Rendered:**
Visit https://github.com for code hosting
Check out https://example.com for more info

### Email Autolinks

```markdown
Contact support@example.com for help
Email user@domain.com with questions
```

**Rendered:**
Contact support@example.com for help
Email user@domain.com with questions

### Autolinks vs. Manual Links

```markdown
# Autolink (automatic)
Visit https://github.com

# Manual link (with custom text)
[Visit GitHub](https://github.com)
```

**When to use:**
- **Autolinks:** When you want to show the full URL
- **Manual links:** When you want custom link text

## Strikethrough Text

GFM adds strikethrough support with double tildes `~~`.

### Syntax

```markdown
~~This text is struck through~~
~~Deprecated feature~~
~~Old method~~
```

### Rendered Output

~~This text is struck through~~
~~Deprecated feature~~
~~Old method~~

### Use Cases

```markdown
## Migration Guide

### Old Method (Deprecated)

~~Use the old API endpoint~~

```javascript
// Deprecated
fetch('/api/v1/users');
```

### New Method (Recommended)

Use the new API endpoint

```javascript
// Recommended
fetch('/api/v2/users');
```

## Emoji Support

GFM supports emoji shortcodes. GitHub renders these as actual emojis.

### Emoji Syntax

```markdown
:+1: :sparkles: :rocket: :warning: :note:
```

### Rendered Output

:+1: :sparkles: :rocket: :warning: :note:

### Common Emoji Shortcodes

| Emoji | Shortcode | Use For |
|--------|-----------|----------|
| ✅ | `:white_check_mark:` | Completed items |
| ❌ | `:x:` | Errors or rejected |
| ⚠️ | `:warning:` | Warnings |
| ℹ️ | `:information_source:` | Information |
| 🔥 | `:fire:` | Hot features |
| 🚀 | `:rocket:` | Launches or fast features |
| ✨ | `:sparkles:` | New features |
| 🎉 | `:tada:` | Celebrations |
| 📝 | `:memo:` | Notes or documentation |
| 💡 | `:bulb:` | Ideas or tips |

### Emoji in Task Lists

```markdown
## Sprint Tasks

- [x] :white_check_mark: Implement authentication
- [x] :white_check_mark: Add unit tests
- [ ] :x: Fix login bug
- [ ] :memo: Write documentation
- [ ] :rocket: Deploy to production
```

### Emoji in Commit Messages

```markdown
## Recent Changes

- :sparkles: Added new user registration flow
- :bug: Fixed memory leak in data processor
- :wrench: Improved error handling
- :books: Updated API documentation
```

## Issue References

GFM allows referencing GitHub issues, pull requests, and commits.

### Issue References

```markdown
See issue #123 for details
Related: #456
Also: issue#789
```

### Rendered Output (on GitHub)

See issue #123 for details
Related: #456
Also: issue#789

### Pull Request References

```markdown
Merged in PR #42
See PR #100 for context
```

### Commit References

```markdown
See commit a1b2c3d
Commit: user/repo@a1b2c3d
```

### Cross-Repository References

```markdown
Issue in other repo: user/repo#123
PR in other repo: user/repo#42
Commit in other repo: user/repo@a1b2c3d
```

### Issue in Task Lists

```markdown
## TODO

- [ ] Fix issue #123
- [ ] Address PR #42 feedback
- [ ] Merge PR#100
```

## User Mentions

Mention GitHub users to notify them. Works in issues, PRs, and comments.

### Syntax

```markdown
Thanks @username for the contribution!
@another-user, can you review this?
```

### Rendered Output (on GitHub)

Thanks @username for the contribution!
@another-user, can you review this?

### Team Mentions

```markdown
Mentioning @team-name notifies the entire team.
```

### Mentions in README

Mentions in README files work but don't send notifications (unless in a discussion).

## Code Blocks with Syntax Highlighting

GFM supports fenced code blocks with language identifiers for syntax highlighting.

### Syntax

```markdown
```javascript
function hello() {
  console.log('world');
}
```
```

### Rendered Output

```javascript
function hello() {
  console.log('world');
}
```

### Supported Languages

GFM supports 100+ languages including:

- **Web:** JavaScript, TypeScript, HTML, CSS, Vue, React
- **Backend:** Python, Java, Go, Rust, Ruby, PHP
- **Data:** SQL, JSON, YAML, XML, TOML
- **DevOps:** Bash, Dockerfile, Terraform, Kubernetes

## GitHub-Specific Markdown Features

### Syntax Highlighting in READMEs

GitHub automatically detects programming languages in README files and applies syntax highlighting to code blocks without language identifiers:

```markdown
# README.md (in JavaScript project)

```javascript
function hello() {
  console.log('world');
}
```
```

### Task List Automation

In GitHub issues and PRs, task lists automatically commit changes when you check boxes:

```markdown
- [x] Setup repository
- [ ] Create README
- [ ] Add license
```

Checking "Create README" automatically commits the change to the issue/PR.

### Issue Templates

Use GFM in GitHub issue templates (`.github/ISSUE_TEMPLATE/`):

```markdown
## Bug Report

**Describe the bug:**
[Description]

**Steps to reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected behavior:**
[What should happen]

**Actual behavior:**
[What actually happened]

**Checklist:**
- [ ] I've searched for existing issues
- [ ] I've provided a minimal reproduction
- [ ] I've included relevant logs
```

### Pull Request Templates

Use GFM in PR templates (`.github/PULL_REQUEST_TEMPLATE.md`):

```markdown
## Description

[Description of changes]

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] All tests passing

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
```

## GFM Best Practices

### 1. Use Task Lists for Tracking

Task lists are perfect for tracking progress in issues and PRs.

### 2. Structure Tables Well

Keep tables simple with clear headers. Avoid too many columns or overly long content.

### 3. Reference Issues and PRs

Link to related issues and PRs using `#123` syntax for context.

### 4. Use Emojis Sparingly

Emojis add personality but don't overuse. Use them for emphasis, not decoration.

### 5. Write Descriptive Link Text

Use manual links `[text](url)` with descriptive text instead of relying on autolinks.

### 6. Test Your Markdown

Use GitHub's preview feature to ensure GFM renders correctly before committing.

## Common Pitfalls

### Over-Nested Task Lists

Too many levels of nesting make task lists hard to read. Limit to 2-3 levels.

### Complex Tables

Avoid complex tables with merged cells or multi-line content. GFM doesn't support merged cells.

### Broken Issue References

Issue references like `#999999` for non-existent issues show broken links on GitHub.

### Emoji Shortcodes Not Working

Some emoji shortcodes aren't supported in all GFM renderers. Test in GitHub first.

### Autolinks in Code Blocks

URLs in code blocks with language identifiers won't autolink (they're treated as code).

## GFM Compatibility

### Platforms Supporting GFM

| Platform | GFM Support | Notes |
|-----------|--------------|-------|
| **GitHub** | Full | Native support |
| **GitLab** | Most | Task lists, tables, autolinks |
| **Gist** | Full | Same as GitHub |
| **Bitbucket** | Partial | Tables support, task lists vary |
| **Stack Overflow** | No | Uses standard markdown |
| **Discord** | Partial | Tables, code blocks, some GFM |
| **Slack** | Partial | Code blocks, tables |

### Fallback for Non-GFM Platforms

If targeting non-GFM platforms, avoid:
- Tables (use HTML or alternative formatting)
- Task lists (use standard lists)
- Autolinks (use manual links)

## FAQ

### Is GFM the same as standard markdown?

No, GFM extends standard markdown with tables, task lists, autolinks, and more. Standard markdown is simpler but less feature-rich.

### Can I use GFM outside of GitHub?

Yes, many platforms support GFM or similar extensions: GitLab, Bitbucket, Discord, and others. However, support varies.

### Do task lists work in markdown files?

Yes, but checkboxes are only interactive in GitHub issues and PRs. In README files, they render as static checkboxes.

### Can I use custom emojis?

GitHub supports custom emoji syntax `:custom-emoji:` if the emoji exists in the repository. Otherwise, standard emoji shortcodes only.

### What if my table has too many columns?

Consider splitting into multiple tables or using alternative formatting. Very wide tables are hard to read on mobile.

### Do autolinks work in code blocks?

No, URLs in fenced code blocks with language identifiers are rendered as code, not links.

## Summary

**GFM Key Features:**

- **Task Lists:** `- [x]` for interactive checkboxes
- **Tables:** `|` separated columns with alignment support
- **Autolinks:** URLs and emails automatically become links
- **Strikethrough:** `~~text~~` for deleted content
- **Emoji:** `:shortcode:` for common emojis
- **Issue References:** `#123` links to GitHub issues
- **User Mentions:** `@username` to notify users

**Best Use Cases:**

- GitHub README files
- GitHub issues and PRs
- Technical documentation
- API documentation with tables
- Project tracking with task lists

[Try GFM in Markdown Visualizer](/) — Free Monaco-powered editor with GFM support for tables, task lists, and more.

**Data sources:** GitHub Flavored Markdown specification, GitHub documentation, CommonMark specification.
