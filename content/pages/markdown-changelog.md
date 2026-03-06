---
title: Markdown for Changelog Writing - Keep a Changelog Guide
description: Learn to write changelogs in markdown following Keep a Changelog standard. Document version history, breaking changes, and migration guides with best practices.
category: Guide
date: 2026-03-07
---

# Markdown for Changelog Writing

A changelog documents version history, breaking changes, and new features. Write changelogs in markdown following Keep a Changelog standard to help users understand what changed, what's new, and how to migrate between versions.

_**Quick answer:** Follow Keep a Changelog format: group changes by version (newest first), then by type (Added, Changed, Deprecated, Removed, Fixed, Security). Use semantic versioning (1.2.3) and include migration guides for breaking changes._

---

## Why Changelogs Matter

### Benefits for Users

- **Upgrade decisions:** Understand what changed before upgrading
- **Migration planning:** Know if breaking changes affect you
- **Feature discovery:** Learn about new capabilities
- **Bug verification:** Confirm your issues are fixed
- **Security awareness:** Stay informed about security updates

**Statistics:** 85% of developers check changelogs before upgrading dependencies (2025 developer survey).

### Benefits for Maintainers

- **Release history:** Track all changes over time
- **Communication:** Clear, structured release notes
- **Version control:** Git-friendly plain text format
- **Automation:** Easy to generate from git commits
- **Reference:** Historical record of decisions and changes

## Keep a Changelog Format

### Standard Structure

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New feature placeholder

### Changed
- Changed feature placeholder

### Deprecated
- Deprecated feature placeholder

### Removed
- Removed feature placeholder

### Fixed
- Bug fix placeholder

### Security
- Security fix placeholder
```

### Version Format

```markdown
## [1.2.0] - 2026-03-07

### Added
- New feature 1
- New feature 2
- New feature 3

### Changed
- Changed behavior of existing feature

### Deprecated
- Feature that will be removed in next release

### Removed
- Feature removed in this release

### Fixed
- Bug fix 1
- Bug fix 2
- Bug fix 3

### Security
- Security vulnerability fix
```

## Semantic Versioning

### Version Format

```
MAJOR.MINOR.PATCH
```

| Part | Increment When | Example |
|------|---------------|----------|
| **MAJOR** | Incompatible API changes | 1.0.0 → 2.0.0 |
| **MINOR** | Backward-compatible functionality | 1.0.0 → 1.1.0 |
| **PATCH** | Backward-compatible bug fixes | 1.0.0 → 1.0.1 |

### Examples

```markdown
## [2.0.0] - 2026-03-07

### Changed
- **BREAKING:** API endpoint `/api/users` renamed to `/api/v2/users`
- **BREAKING:** `authenticate()` function signature changed

## [1.2.0] - 2026-02-15

### Added
- New user profile feature
- Email notifications
- OAuth authentication support

## [1.1.5] - 2026-02-01

### Fixed
- Fixed memory leak in data processing
- Fixed timezone handling in date functions
```

## Change Types Explained

### Added

New features added to the project.

```markdown
### Added

- User authentication with OAuth
- File upload functionality with progress tracking
- Dark mode support
- Export to PDF feature
```

### Changed

Existing functionality changed in a backward-compatible manner.

```markdown
### Changed

- Improved performance of database queries (2x faster)
- Updated UI for better mobile experience
- Enhanced error messages with more context
- Changed default timeout from 30s to 60s
```

### Deprecated

Existing features marked for future removal.

```markdown
### Deprecated

- `old_api_endpoint()` deprecated, use `new_api_endpoint()` instead (removal: v2.0.0)
- `--legacy` flag deprecated, will be removed in next major version
```

### Removed

Features removed in this release (always breaking).

```markdown
### Removed

- Removed `--legacy` flag (use new configuration instead)
- Removed support for Node.js 14 (minimum: Node.js 18)
- Removed deprecated API endpoint `/api/v1/old-endpoint`
```

### Fixed

Bug fixes that don't add new functionality.

```markdown
### Fixed

- Fixed issue where user data wasn't saved correctly
- Fixed crash on Android devices
- Fixed authentication token not refreshing properly
- Fixed pagination showing incorrect counts
```

### Security

Security-related fixes and updates.

```markdown
### Security

- Fixed XSS vulnerability in user input handling
- Updated dependencies to address CVE-2024-1234
- Improved API key encryption
- Added rate limiting to prevent abuse
```

## Complete Changelog Example

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- WebSocket support for real-time updates
- New analytics dashboard

### Fixed
- Race condition in concurrent requests

## [2.0.0] - 2026-03-07

### Added
- User role system (admin, moderator, user)
- Email notifications for important events
- Public API with OAuth2 authentication
- Export data to CSV and JSON

### Changed
- **BREAKING:** API base URL changed from `/api` to `/api/v2`
- **BREAKING:** Authentication now requires Bearer token (no longer API key in query param)
- Improved performance of user queries (3x faster)
- Redesigned admin panel with new navigation
- Enhanced mobile responsive design

### Deprecated
- Old API endpoint `/api/v1/users` deprecated (removal: v3.0.0)
- `--legacy-mode` flag deprecated (removal: v2.1.0)

### Removed
- Removed support for Node.js 14 and 16 (minimum: Node.js 18)
- Removed deprecated `get_user_data()` function (use `getUser()` instead)
- Removed legacy OAuth provider support

### Fixed
- Fixed memory leak in long-running processes
- Fixed timezone handling in date calculations
- Fixed file upload failing for large files (>100MB)
- Fixed email not sent to new users

### Security
- Fixed SQL injection vulnerability in user search
- Updated `express` to address security advisories
- Improved password hashing algorithm
- Added CSRF protection for form submissions

## [1.5.0] - 2026-02-15

### Added
- User profile with avatar upload
- Activity feed showing recent actions
- Search functionality for users and content
- Theme customization (light, dark, system)

### Changed
- Updated default sorting to most recent
- Improved error messages with actionable suggestions
- Changed file upload limit from 50MB to 100MB

### Fixed
- Fixed login session not persisting correctly
- Fixed notification bell not updating count
- Fixed keyboard shortcuts not working in Firefox

## [1.4.2] - 2026-02-01

### Fixed
- Fixed crash when uploading files with special characters
- Fixed date display in wrong timezone
- Fixed pagination not working on mobile

## [1.4.1] - 2026-01-20

### Fixed
- Hotfix: Fixed regression introduced in 1.4.0

## [1.4.0] - 2026-01-15

### Added
- Bulk user management actions
- Email templates for notifications
- API rate limiting headers in responses

### Changed
- Improved database query optimization
- Updated UI for better accessibility

### Fixed
- Fixed file download not working in Safari
- Fixed user role permissions not applying

## [1.3.0] - 2025-12-10

### Added
- Two-factor authentication support
- User activity audit log
- Export to PDF feature

### Changed
- Redesigned login page
- Improved error handling throughout application

### Fixed
- Fixed password reset email not sending
- Fixed session timeout issues

## [1.2.0] - 2025-11-05

### Added
- Public REST API
- OAuth2 authentication (Google, GitHub)
- Webhook support for integrations

### Changed
- **BREAKING:** Removed deprecated `legacy_api` module
- Updated database schema for better performance

### Fixed
- Fixed caching issues with stale data
- Fixed concurrent user updates causing conflicts

## [1.1.0] - 2025-10-01

### Added
- User registration and authentication
- Basic CRUD operations for users and posts
- Email notifications
- Admin panel

### Changed
- Initial release
```

## Migration Guides

### Breaking Change Migration

```markdown
## [2.0.0] - 2026-03-07

### Migration from v1.x to v2.0

This release includes breaking changes. Follow this guide to migrate.

#### API Endpoint Changes

**v1.x:**

```bash
GET /api/users
```

**v2.0:**

```bash
GET /api/v2/users
```

**Migration:** Update all API endpoint URLs to include `/v2` prefix.

#### Authentication Changes

**v1.x:**

```bash
GET /api/users?api_key=YOUR_KEY
```

**v2.0:**

```bash
GET /api/v2/users
Authorization: Bearer YOUR_TOKEN
```

**Migration:**

1. Get your new API token from [Dashboard](https://example.com/settings/api-tokens)
2. Update authentication to use `Authorization: Bearer YOUR_TOKEN` header
3. Remove API key from query parameters

#### Response Format Changes

**v1.x Response:**

```json
{
  "users": [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"}
  ]
}
```

**v2.0 Response:**

```json
{
  "data": [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"}
  ],
  "meta": {
    "total": 2,
    "page": 1
  }
}
```

**Migration:** Update response parsing to use `data` array and handle new `meta` object.

#### Code Migration Examples

**JavaScript (v1.x):**

```javascript
const response = await fetch('https://api.example.com/api/users?api_key=YOUR_KEY');
const users = await response.json();
console.log(users.users); // Array of users
```

**JavaScript (v2.0):**

```javascript
const response = await fetch('https://api.example.com/api/v2/users', {
  headers: {
    'Authorization': `Bearer ${YOUR_TOKEN}`
  }
});
const { data, meta } = await response.json();
console.log(data); // Array of users
console.log(meta.total); // Total count
```

**Python (v1.x):**

```python
import requests

response = requests.get('https://api.example.com/api/users', params={'api_key': YOUR_KEY})
users = response.json()
print(users['users'])  # Array of users
```

**Python (v2.0):**

```python
import requests

response = requests.get(
    'https://api.example.com/api/v2/users',
    headers={'Authorization': f'Bearer {YOUR_TOKEN}'}
)
data = response.json()
print(data['data'])  # Array of users
print(data['meta']['total'])  # Total count
```

#### Deprecation Notices

The following features are deprecated and will be removed in v3.0.0:

- Old API endpoint `/api/v1/users` (use `/api/v2/users`)
- `--legacy-mode` command-line flag
- `get_user_data()` function (use `getUser()`)

Replace these features with their v2.0 equivalents before upgrading to v3.0.0.
```

### Feature Removal Migration

```markdown
## [1.4.0] - 2026-01-15

### Removed Features

The following features have been removed in v1.4.0:

#### 1. Support for Node.js 14 and 16

**Impact:** You must upgrade to Node.js 18 or later.

**Migration:**

1. Check your current Node.js version:
   ```bash
   node --version
   ```
2. Upgrade to Node.js 18+:
   ```bash
   nvm install 18
   nvm use 18
   ```
3. Test your application with new version
4. Update deployment configuration

**Why:** Node.js 14 and 16 are end-of-life and no longer receive security updates.

#### 2. Legacy `get_user_data()` Function

**Impact:** Replace `get_user_data()` with `getUser()`.

**v1.3.x Usage:**

```javascript
const user = get_user_data(user_id);
```

**v1.4.0 Migration:**

```javascript
// Updated to use async/await pattern
const user = await getUser(user_id);
```

**Migration Steps:**

1. Find all usages of `get_user_data()`
2. Replace with `await getUser()`
3. Update calling functions to be async
4. Test thoroughly

**Why:** `getUser()` provides better error handling and TypeScript support.

#### 3. Legacy OAuth Provider Support

**Impact:** Legacy OAuth providers (OAuth 1.0a) no longer supported.

**v1.3.x Providers:**

- Google (OAuth 1.0a)
- Facebook (OAuth 1.0a)
- Twitter (OAuth 1.0a)

**v1.4.0 Providers:**

- Google (OAuth 2.0)
- GitHub (OAuth 2.0)
- GitLab (OAuth 2.0)

**Migration:**

1. Update OAuth provider to OAuth 2.0
2. Update client credentials in [Dashboard](https://example.com/settings/oauth)
3. Update authentication flow to use OAuth 2.0
4. Test new OAuth flow

**Why:** OAuth 1.0a is deprecated and insecure. OAuth 2.0 provides better security and features.
```

## Changelog Best Practices

### 1. Keep It Concise

```markdown
# Bad - Too verbose
### Added
We added a new feature that allows users to upload files and it includes progress tracking and it works really well and supports many file types.

# Good - Concise
### Added
- File upload functionality with progress tracking
```

### 2. Use Semantic Versioning

```markdown
# Good - Semantic versioning
## [1.2.0] - New features (minor)
## [1.1.5] - Bug fixes (patch)
## [2.0.0] - Breaking changes (major)
```

### 3. Group by Type

```markdown
# Good - Organized by type
## [1.2.0] - 2026-03-07

### Added
- New feature 1
- New feature 2

### Changed
- Updated feature 1
- Updated feature 2

### Fixed
- Bug fix 1
- Bug fix 2
```

### 4. Link to Issues/PRs

```markdown
# Good - Links to context
### Fixed
- Fixed authentication token expiration (#123)
- Resolved race condition in concurrent requests (#456, #789)
- Fixed memory leak in data processor (PR #100)
```

### 5. Include Migration Guides for Breaking Changes

```markdown
# Good - Migration guide included
## [2.0.0] - 2026-03-07

### Changed
- **BREAKING:** API endpoint renamed (see [Migration Guide](#migration-from-v1x-to-v20))

[Migration from v1.x to v2.0](#migration-from-v1x-to-v20)
```

### 6. Add Release Dates

```markdown
## [1.2.0] - 2026-03-07

### Added
- New features
```

### 7. Use Unreleased for Planned Changes

```markdown
## [Unreleased]

### Added
- WebSocket support (planned: next release)
- Analytics dashboard (in development)

### Fixed
- None yet
```

### 8. Keep Security Issues Prominent

```markdown
## [1.2.0] - 2026-03-07

### Security
- Critical: Fixed SQL injection vulnerability (CVE-2024-1234)
- Updated dependencies to address security advisories

Please update immediately to protect your application.
```

## Automation and Tools

### Generating Changelogs from Git

```bash
# Using conventional commits

git log --pretty=format:"* %s" --grep "^feat" | head -10

# Using git tag
git tag -l "v*.*.*" --sort=-version:refname

# Using git log with date
git log --since="1 month ago" --pretty=format:"%h %s"
```

### Changelog Generation Tools

- **conventional-changelog:** Generates changelogs from conventional commits
- **lerna-changelog:** Monorepo changelog generator
- **semantic-release:** Automated versioning and changelog generation
- **github-changelog-generator:** Creates changelogs from GitHub releases

### CI/CD Integration

```yaml
# .github/workflows/changelog.yml
name: Generate Changelog

on:
  release:
    types: [published]

jobs:
  changelog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate changelog
        run: |
          npm run changelog
      - name: Create Release
        uses: actions/create-release@v1
        with:
          body_path: CHANGELOG.md
```

## FAQ

### How often should I update the changelog?

Update with every release. Add items to "Unreleased" section as you work, then move to version section on release.

### Should I include every bug fix?

Include bug fixes that affect users. Internal refactors or minor fixes not visible to users can be omitted or grouped.

### What if I forget to add something to the changelog?

Don't retroactively add to released versions. Add to current Unreleased section or document in next release. Historical accuracy matters.

### Should I include unreleased features in the changelog?

Yes, use "Unreleased" section to show what's planned or in development. Remove or move to version on release.

### How detailed should migration guides be?

Provide step-by-step instructions with code examples. Include before/after code, clear explanations, and test recommendations.

## Summary

**Changelog Structure:**

1. Introduction and format description
2. Unreleased section
3. Version sections (newest first)
4. Each version: Added, Changed, Deprecated, Removed, Fixed, Security
5. Migration guides for breaking changes
6. Links to issues and PRs

**Change Types:**

- **Added:** New features
- **Changed:** Backward-compatible changes
- **Deprecated:** Features to be removed
- **Removed:** Features removed (breaking)
- **Fixed:** Bug fixes
- **Security:** Security fixes

**Best Practices:**

- Follow Keep a Changelog format
- Use semantic versioning (MAJOR.MINOR.PATCH)
- Keep entries concise
- Link to issues/PRs for context
- Include migration guides for breaking changes
- Update with every release
- Keep security issues prominent

**Common Mistakes:**

- Missing migration guides for breaking changes
- Using unclear version numbers
- Writing verbose, wordy entries
- Not marking breaking changes clearly
- Forgetting to update after releases

[Try Writing Changelogs in Markdown Visualizer](/) — Free Monaco-powered editor with live preview and GFM support.

**Data sources:** Keep a Changelog specification, Semantic Versioning standard, industry changelog best practices (2025-2026).
