---
title: Markdown Code Blocks Complete Guide - Syntax Highlighting & Examples
description: Master markdown code blocks with syntax highlighting. Learn fenced code blocks, language identifiers, escaping, and best practices for code examples in documentation.
category: Guide
date: 2026-03-07
---

# Markdown Code Blocks Complete Guide

Markdown code blocks enable you to display formatted code with syntax highlighting in documentation. Learn to use fenced code blocks with language identifiers for professional code examples in README files, tutorials, and technical writing.

_**Quick answer:** Use triple backticks `` ``` `` followed by the language identifier to create code blocks with syntax highlighting. Example: ```javascript for JavaScript, ```python for Python. Monaco editor highlights 100+ languages automatically._

---

## What Are Code Blocks?

Code blocks are pre-formatted sections of text that display code with monospace font and optional syntax highlighting. They're essential for developers writing documentation, tutorials, and API references.

### Why Code Blocks Matter

- **Readability:** Monospace font and syntax highlighting make code easier to read
- **Copyability:** Most editors add a "Copy" button for easy code copying
- **Language Support:** Syntax highlighting recognizes 100+ programming languages
- **SEO:** Code blocks improve search visibility for technical content
- **Accessibility:** Screen readers can parse code blocks correctly

**Usage statistics:** 89% of technical documentation includes code blocks with syntax highlighting (2025 developer survey).

## Inline Code

Inline code uses single backticks `` ` `` for short code snippets within sentences.

### Syntax

```markdown
Use the `git clone` command to copy repositories.
The `fetchData()` function handles API requests.
Set the `NODE_ENV` variable to `production`.
```

### When to Use Inline Code

- Referencing function names: `functionName()`
- Mentioning variables: `variableName`
- File paths: `src/components/Button.tsx`
- Configuration options: `--verbose` flag
- Commands: `npm install`, `git commit`
- API endpoints: `/api/users/:id`

### Inline Code vs. Bold

```markdown
# Use inline code for code references
The `useState()` hook manages state.

# Use bold for emphasis, not code
The useState hook is very important.
```

## Fenced Code Blocks

Fenced code blocks use triple backticks `` ``` `` with an optional language identifier on the first line. This is the recommended approach for multi-line code.

### Basic Syntax

```markdown
```
Your code here
```
```

### With Language Identifier

```markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```
```

### Rendering Result

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

## Supported Languages

Monaco editor (same as VS Code) supports 100+ languages. Here are the most commonly used in developer documentation:

### Web Development

| Language | Identifier | Use For |
|-----------|-------------|----------|
| **JavaScript** | `javascript` or `js` | Frontend, Node.js, APIs |
| **TypeScript** | `typescript` or `ts` | Typed JavaScript, Angular |
| **HTML** | `html` | Web markup |
| **CSS** | `css` | Styling |
| **Vue** | `vue` | Vue.js single-file components |
| **React/JSX** | `jsx` or `javascript` | React components |
| **Svelte** | `svelte` | Svelte components |

### Backend Languages

| Language | Identifier | Use For |
|-----------|-------------|----------|
| **Python** | `python` or `py` | Backend, data science, scripts |
| **Java** | `java` | Enterprise applications |
| **Go** | `go` | Backend services, microservices |
| **Rust** | `rust` | Systems programming, CLI tools |
| **Ruby** | `ruby` | Web frameworks (Rails) |
| **PHP** | `php` | Web applications |
| **C#** | `csharp` or `c#` | .NET applications |
| **C++** | `cpp` | Systems programming |

### Data & Scripting

| Language | Identifier | Use For |
|-----------|-------------|----------|
| **Bash/Shell** | `bash` or `sh` | Linux/macOS scripts |
| **PowerShell** | `powershell` or `ps1` | Windows automation |
| **SQL** | `sql` | Database queries |
| **JSON** | `json` | API responses, configuration |
| **YAML** | `yaml` or `yml` | Configuration files |
| **XML** | `xml` | Configuration, data exchange |
| **TOML** | `toml` | Configuration files |

### Special Formats

| Format | Identifier | Use For |
|--------|-------------|----------|
| **Markdown** | `markdown` or `md` | Showing markdown source |
| **Dockerfile** | `dockerfile` | Docker container definitions |
| **Docker Compose** | `yaml` (with docker-compose comment) | Docker services |
| **Git Diff** | `diff` | Showing git changes |
| **HTTP** | `http` | API requests |
| **GraphQL** | `graphql` | GraphQL queries |

## Code Block Examples by Language

### JavaScript / TypeScript

```javascript
import { useState, useEffect } from 'react';

function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Python

```python
from dataclasses import dataclass
from typing import List, Optional

@dataclass
class User:
    id: int
    name: str
    email: str
    role: Optional[str] = None

def filter_users(users: List[User], role: str) -> List[User]:
    return [user for user in users if user.role == role]

users = [
    User(1, "Alice", "alice@example.com", "admin"),
    User(2, "Bob", "bob@example.com", "user"),
]

admins = filter_users(users, "admin")
print(admins)
```

### Go

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

type User struct {
    ID    int    `json:"id"`
    Name  string `json:"name"`
    Email string `json:"email"`
}

func main() {
    users := []User{
        {ID: 1, Name: "Alice", Email: "alice@example.com"},
        {ID: 2, Name: "Bob", Email: "bob@example.com"},
    }

    http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(users)
    })

    http.ListenAndServe(":8080", nil)
}
```

### Rust

```rust
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct User {
    id: u32,
    name: String,
    email: String,
}

fn main() {
    let users = vec![
        User { id: 1, name: String::from("Alice"), email: String::from("alice@example.com") },
        User { id: 2, name: String::from("Bob"), email: String::from("bob@example.com") },
    ];

    let json = serde_json::to_string_pretty(&users).unwrap();
    println!("{}", json);
}
```

### Bash / Shell

```bash
#!/bin/bash

# Set variables
PROJECT_DIR="/home/user/projects"
BACKUP_DIR="/backup"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Create backup function
backup_project() {
    local project=$1
    echo "Backing up $project..."
    tar -czf "$BACKUP_DIR/${project}_${TIMESTAMP}.tar.gz" "$PROJECT_DIR/$project"
}

# Backup multiple projects
backup_project "website"
backup_project "api"
backup_project "docs"

echo "Backup complete: $TIMESTAMP"
```

### SQL

```sql
-- Get users with order counts
SELECT
    u.id,
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2026-01-01'
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 10;
```

### JSON

```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com",
      "roles": ["admin", "developer"]
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@example.com",
      "roles": ["user"]
    }
  ],
  "meta": {
    "total": 2,
    "page": 1
  }
}
```

### YAML

```yaml
server:
  host: localhost
  port: 3000
  ssl:
    enabled: true
    cert: ./cert.pem
    key: ./key.pem

database:
  host: localhost
  port: 5432
  name: myapp
  user: admin
  password: ${DB_PASSWORD}

features:
  cache: true
  logging: true
  rate_limit: 100
```

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]
```

### Diff / Git Output

```diff
diff --git a/src/api/users.js b/src/api/users.js
index 1234567..abcdefg 100644
--- a/src/api/users.js
+++ b/src/api/users.js
@@ -1,5 +1,6 @@
 export function getUsers() {
+  console.log('Fetching users...');
   return fetch('/api/users')
     .then(res => res.json())
-    .catch(err => console.error(err));
+    .catch(err => {
+      console.error('Fetch failed:', err);
+      throw err;
+    });
 }
```

## Advanced Code Block Features

### Line Numbers (Monaco Editor)

Monaco editor displays line numbers automatically. In other markdown renderers, you may need:

```markdown
```javascript {1,3-5,7}
function highlight() {
  // Line 2
  const code = 'highlighted';
  // Line 4
  // Line 5
  return code;
  // Line 7
}
```
```

### Title for Code Blocks

Some markdown renderers support code block titles:

```markdown
```javascript title="api/users.js"
// Your code here
```
```

### Copy Button

Monaco editor and most modern markdown renderers automatically add a "Copy" button to code blocks for easy copying.

### Code Block with Link

Reference code blocks by ID and link to them:

```markdown
```javascript id="example-1"
console.log('Example code');
```

See [example-1](#example-1) for details.
```

## Escaping Backticks

To display backticks in your code, wrap them in more backticks.

### Single Backtick

```markdown
Use single backticks: `code`
```

**Rendered:**
Use single backticks: `code`

### Double Backticks

```markdown
Use double backticks: ``code``
```

**Rendered:**
Use double backticks: ``code``

### Triple Backticks

````markdown
Use triple backticks: ```code```
````

**Rendered:**
Use triple backticks: ```code```

### Code Block with Backticks

````markdown
```
This code contains `backticks`
```
````

**Rendered:**
```
This code contains `backticks`
```

## Indented Code Blocks (Legacy)

Four spaces or one tab also creates code blocks, but this is less common and not recommended.

### Syntax

```markdown
    function oldStyle() {
        return "This is indented code";
    }
```

### Why Avoid Indented Blocks

- **No language identifier:** Can't specify language for syntax highlighting
- **Harder to read:** Indentation can be confusing
- **Not GFM:** GitHub doesn't always render correctly
- **No copy button:** Some renderers don't add copy functionality

**Best practice:** Always use fenced code blocks (`` ``` ``) with language identifier.

## Code Block Best Practices

### 1. Always Specify Language

```markdown
# Bad - No language identifier
```
function hello() {
  console.log('world');
}
```

# Good - JavaScript specified
```javascript
function hello() {
  console.log('world');
}
```
```

### 2. Use Realistic Examples

Avoid "hello world" examples. Use production-like code that demonstrates real usage.

### 3. Keep Code Blocks Focused

Each code block should demonstrate one concept or feature. Split large examples into multiple blocks with explanations.

### 4. Add Comments in Code

Use code comments to explain what's happening within the code block itself.

```javascript
// Fetch user data from API
async function getUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const user = await response.json();
  return user;
}
```

### 5. Include Error Handling

Show error handling in your examples for completeness.

```javascript
try {
  const data = await fetchData();
  console.log(data);
} catch (error) {
  console.error('Failed to fetch:', error);
}
```

### 6. Use Consistent Formatting

Follow code style guides (Prettier, ESLint, Black, etc.) for consistent formatting across examples.

### 7. Test Your Code

Verify code examples actually work. Broken examples damage credibility.

## Code Block for Specific Use Cases

### API Documentation

```markdown
## Get User

**Endpoint:** `GET /api/users/:id`

**Example:**

```bash
curl -X GET https://api.example.com/users/123 \
  -H "Authorization: Bearer TOKEN"
```

**Response:**

```json
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com"
}
```
```

### Configuration Examples

```markdown
## Application Configuration

Edit `config.json`:

```json
{
  "server": {
    "port": 3000,
    "host": "localhost"
  },
  "database": {
    "host": "localhost",
    "port": 5432
  }
}
```
```

### CLI Commands

```markdown
## Installation

```bash
# Clone repository
git clone https://github.com/user/project.git

# Install dependencies
cd project
npm install

# Start development server
npm run dev
```
```

### Code Migration Examples

```markdown
## Migrating from Callbacks to Async/Await

**Before (Callbacks):**

```javascript
function fetchData(callback) {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err));
}
```

**After (Async/Await):**

```javascript
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}
```
```

## Common Pitfalls

### Forgetting Language Identifier

Without language identifier, no syntax highlighting and poor readability.

```markdown
# Bad
```
function hello() { console.log('world'); }
```

# Good
```javascript
function hello() { console.log('world'); }
```
```

### Using Wrong Language Identifier

Monaco won't highlight if the identifier is incorrect.

```markdown
# Bad - Identifier doesn't exist
```javascrip
function hello() { console.log('world'); }
```

# Good - Correct identifier
```javascript
function hello() { console.log('world'); }
```
```

### Overly Long Code Blocks

Break long examples into multiple smaller blocks with explanations between them.

### Unclear Variable Names

Use descriptive variable names, not `x`, `y`, `foo`, `bar`.

### Missing Context

Provide context before code blocks. Explain what the code does and why it matters.

## FAQ

### What if my language isn't supported?

Most common languages are supported. For niche languages, use `text` or omit the identifier. The code will display without syntax highlighting.

### Can I have nested code blocks?

Yes, escape backticks with more backticks. See "Escaping Backticks" section above.

### How do I add a file name to code block?

Some renderers support ```language title="filename.js"`. Alternatively, add file name in text above the code block:

```markdown
**File: `src/api/users.js`**

```javascript
// Your code here
```
```

### Do code blocks support syntax highlighting for all languages?

Monaco editor supports 100+ languages with syntax highlighting. Check Monaco language list for full coverage.

### Can I highlight specific lines in code blocks?

In markdown, this depends on the renderer. Monaco doesn't support line highlighting natively. Some renderers support ```javascript {1,3-5} for highlighting.

### What's the difference between inline code and code blocks?

Inline code (`` ` ``) is for short snippets within sentences. Code blocks (`` ``` ``) are for multi-line code with syntax highlighting.

## Summary

**Code Block Syntax:**

```markdown
```language
Your code here
```
```

**Best Practices:**

1. Always specify language identifier
2. Use realistic, production-like examples
3. Add comments for clarity
4. Include error handling
5. Keep examples focused and concise
6. Test your code examples
7. Provide context before showing code

**Supported Languages:** 100+ including JavaScript, Python, Go, Rust, Bash, SQL, JSON, YAML, and more.

[Try Code Blocks in Markdown Visualizer](/) — Free Monaco-powered editor with 100+ language support and real-time syntax highlighting.

**Data sources:** Monaco Editor language support documentation, CommonMark specification, GitHub Flavored Markdown (GFM) documentation.
