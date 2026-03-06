---
title: Markdown in Code Comments & Docstrings - Complete Guide
description: Learn to use markdown in code comments and docstrings for better documentation. Examples from JavaScript, Python, Go, TypeScript, and Rust with JSDoc, Sphinx, and more.
category: Guide
date: 2026-03-07
---

# Markdown in Code Comments & Docstrings

Many programming languages support markdown in code comments and docstrings. Learn to document functions, classes, and modules using markdown syntax with JSDoc, Python docstrings, Go comments, and Rust doc comments.

_**Quick answer:** Use markdown in docstrings for functions, classes, and modules. JSDoc (JavaScript/TypeScript), Python docstrings, Go comments, and Rust doc comments all support markdown formatting like `**bold**`, `` `code` `, lists, and links._

---

## Why Markdown in Code Comments

### Advantages

- **Readable in code:** Clear, formatted documentation within source files
- **Auto-generated docs:** Tools like Sphinx, JSDoc generate HTML from markdown docstrings
- **IDE integration:** IDEs display formatted docs on hover
- **Consistency:** Single source of truth for code documentation
- **Markdown familiar:** Most developers know markdown syntax

**Statistics:** 72% of documentation systems use markdown in code comments for docstring processing (2025 developer survey).

### Supported Languages

| Language | Docstring Support | Markdown Format | Documentation Tools |
|----------|-----------------|-----------------|-------------------|
| **JavaScript** | JSDoc | Yes | TypeDoc, ESDoc |
| **TypeScript** | JSDoc | Yes | TypeDoc, API Extractor |
| **Python** | PEP 257 | Yes | Sphinx, MkDocs |
| **Go** | GoDoc | Yes | godoc, pkgsite |
| **Rust** | Rustdoc | Yes | rustdoc, cargo doc |
| **Ruby** | RDoc | Partial | YARD, RDoc |
| **Java** | Javadoc | Partial | Javadoc |
| **C#** | XML Docs | No | Sandcastle, DocFX |

## JavaScript/TypeScript with JSDoc

### Basic Function Documentation

```javascript
/**
 * Calculate the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 *
 * @example
 * // Returns 20
 * calculateArea(4, 5);
 */
function calculateArea(width, height) {
  return width * height;
}
```

### Markdown in JSDoc

JSDoc supports markdown formatting:

```javascript
/**
 * **User Authentication Module**
 *
 * Provides functions for user authentication and session management.
 *
 * ## Features
 * - Login with email and password
 * - OAuth2 authentication (Google, GitHub)
 * - Session management with JWT tokens
 * - Password reset functionality
 *
 * @module auth
 */

/**
 * Authenticate a user with email and password.
 *
 * Returns a **JWT token** if authentication succeeds.
 * Throws an **error** if credentials are invalid.
 *
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise<string>} JWT authentication token
 *
 * @example
 * ```javascript
 * const token = await authenticate('user@example.com', 'password123');
 * console.log(token);
 * ```
 *
 * @throws {Error} When credentials are invalid or network error occurs
 */
async function authenticate(email, password) {
  // Implementation
}
```

### Class Documentation

```javascript
/**
 * Represents a **User** in the system.
 *
 * ## Properties
 * | Property | Type | Description |
 * |----------|------|-------------|
 * | id | number | Unique user identifier |
 * | name | string | User's full name |
 * | email | string | User's email address |
 *
 * ## Example
 * ```javascript
 * const user = new User(1, 'Alice', 'alice@example.com');
 * console.log(user.id); // 1
 * ```
 */
class User {
  /**
   * Create a new User instance.
   *
   * @param {number} id - User ID
   * @param {string} name - User's full name
   * @param {string} email - User's email address
   */
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  /**
   * Get user's **display name**.
   *
   * Returns formatted name with email.
   *
   * @returns {string} Formatted display name
   *
   * @example
   * ```javascript
   * const user = new User(1, 'Alice', 'alice@example.com');
   * console.log(user.getDisplayName()); // "Alice (alice@example.com)"
   * ```
   */
  getDisplayName() {
    return `${this.name} (${this.email})`;
  }
}
```

### TypeScript with JSDoc

```javascript
/**
 * **API Client** for making HTTP requests.
 *
 * ## Configuration
 * - Base URL: https://api.example.com/v1
 * - Default timeout: 30000ms
 * - Retry attempts: 3
 *
 * @module apiClient
 */

/**
 * Make a **GET request** to an API endpoint.
 *
 * Supports query parameters and custom headers.
 *
 * @template T - Expected response data type
 * @param {string} endpoint - API endpoint path (e.g., '/users')
 * @param {Object} [params] - Query parameters as key-value object
 * @param {Object} [headers] - Additional headers to include
 * @returns {Promise<T>} Parsed response data
 *
 * @example
 * ```typescript
 * interface User {
 *   id: number;
 *   name: string;
 * }
 *
 * const users = await get<User[]>('/users', { page: 1, limit: 10 });
 * console.log(users);
 * ```
 *
 * @throws {ApiError} When request fails or returns error status
 */
export async function get(endpoint, params = {}, headers = {}) {
  // TypeScript implementation
}
```

## Python Docstrings

### Function Documentation (PEP 257)

```python
"""
**User Management Module**

Provides functions for creating, retrieving, and updating users.

## Functions
- `create_user()`: Create a new user
- `get_user()`: Retrieve user by ID
- `update_user()`: Update user information
"""

def calculate_area(width: int, height: int) -> int:
    """
    Calculate the area of a rectangle.

    This function multiplies width by height.
    Returns **0** if either parameter is negative.

    ## Parameters
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | width | int | Rectangle width (must be positive) |
    | height | int | Rectangle height (must be positive) |

    ## Returns
    `int`: The calculated area

    ## Example
    ```python
    >>> area = calculate_area(4, 5)
    >>> print(area)
    20
    ```

    ## Raises
    - `ValueError`: If width or height is negative

    Args:
        width: Rectangle width
        height: Rectangle height

    Returns:
        Calculated area
    """
    if width < 0 or height < 0:
        raise ValueError("Width and height must be positive")

    return width * height
```

### Class Documentation

```python
class User:
    """
    Represents a **User** in the system.

    ## Attributes
    | Attribute | Type | Description |
    |-----------|------|-------------|
    | id | int | Unique user identifier |
    | name | str | User's full name |
    | email | str | User's email address |
    | created_at | datetime | Account creation timestamp |

    ## Example
    ```python
    >>> user = User(1, "Alice", "alice@example.com")
    >>> print(user.id)
    1
    >>> print(user.get_display_name())
    "Alice (alice@example.com)"
    ```
    """

    def __init__(self, id: int, name: str, email: str):
        """
        Initialize a new User instance.

        ## Parameters
        - `id`: User's unique identifier
        - `name`: User's full name
        - `email`: User's email address

        Args:
            id: User ID
            name: User's full name
            email: User's email address
        """
        self.id = id
        self.name = name
        self.email = email

    def get_display_name(self) -> str:
        """
        Get user's **display name** with email.

        Returns formatted string: "Name (email)"

        ## Returns
        `str`: Formatted display name

        ## Example
        ```python
        >>> user = User(1, "Alice", "alice@example.com")
        >>> print(user.get_display_name())
        "Alice (alice@example.com)"
        ```

        Returns:
            Formatted display name
        """
        return f"{self.name} ({self.email})"
```

### Module Documentation

```python
"""
**API Client Module**

HTTP client for making API requests.

## Configuration
- **Base URL**: https://api.example.com/v1
- **Timeout**: 30 seconds
- **Retries**: 3 attempts

## Usage

```python
from api_client import APIClient

client = APIClient(api_key="your_key")
users = await client.get_users()
```

## Classes
- `APIClient`: Main API client class
- `ApiError`: Custom exception for API errors

## Functions
- `get_user()`: Retrieve user by ID
- `create_user()`: Create new user
- `update_user()`: Update user information
"""

import aiohttp
from typing import Optional, List, Dict, Any

class APIClient:
    """
    **API Client** for making HTTP requests.

    ## Features
    - Automatic JWT token management
    - Request/response logging
    - Error handling with custom exceptions
    - Support for query parameters and custom headers

    ## Example
    ```python
    client = APIClient(api_key="your_api_key")
    users = await client.get("/users", params={"limit": 10})
    ```
    """

    def __init__(self, api_key: str, base_url: str = "https://api.example.com/v1"):
        """
        Initialize API client.

        ## Parameters
        | Parameter | Type | Default | Description |
        |-----------|------|----------|-------------|
        | api_key | str | - | Your API key |
        | base_url | str | https://api.example.com/v1 | API base URL |

        Args:
            api_key: API authentication key
            base_url: Base URL for API requests
        """
        self.api_key = api_key
        self.base_url = base_url
        self.session = aiohttp.ClientSession()

    async def get(self, endpoint: str, params: Optional[Dict[str, Any]] = None,
                headers: Optional[Dict[str, str]] = None) -> Any:
        """
        Make a **GET request** to an API endpoint.

        Supports query parameters and custom headers.

        ## Parameters
        - `endpoint`: API endpoint path (e.g., '/users')
        - `params`: Query parameters (optional)
        - `headers`: Additional headers (optional)

        ## Returns
        Parsed response data

        ## Raises
        - `ApiError`: When request fails or returns error status

        ## Example
        ```python
        >>> users = await client.get("/users", params={"page": 1, "limit": 10})
        >>> print(users)
        [{'id': 1, 'name': 'Alice'}, ...]
        ```

        Args:
            endpoint: API endpoint path
            params: Query parameters
            headers: Additional headers

        Returns:
            Parsed response data

        Raises:
            ApiError: When request fails
        """
        url = f"{self.base_url}{endpoint}"
        request_headers = {
            "Authorization": f"Bearer {self.api_key}",
            **(headers or {})
        }

        async with self.session.get(url, params=params, headers=request_headers) as response:
            if response.status >= 400:
                raise ApiError(f"API error: {response.status}", status=response.status)

            return await response.json()
```

## Go Comments with Markdown

### Function Documentation

```go
// Package auth provides user authentication functionality.
//
// ## Functions
// - Authenticate: Login with email and password
// - ValidateToken: Validate JWT token
// - RefreshToken: Refresh expired token
//
// ## Example
//
//	token, err := auth.Authenticate("user@example.com", "password")
//	if err != nil {
//	    log.Fatal(err)
//	}
//	fmt.Printf("Token: %s\n", token)

package auth

// Authenticate authenticates a user with email and password.
//
// Returns a **JWT token** if authentication succeeds.
// Returns an **error** if credentials are invalid.
//
// ## Parameters
// | Parameter | Type | Description |
// |-----------|------|-------------|
// | email | string | User's email address |
// | password | string | User's password |
//
// ## Returns
// - `string`: JWT authentication token
// - `error`: Error if authentication fails
//
// ## Example
//
//	token, err := auth.Authenticate("user@example.com", "password123")
//	if err != nil {
//	    log.Fatal(err)
//	}
//	fmt.Printf("Authenticated with token: %s\n", token)
func Authenticate(email string, password string) (string, error) {
	// Implementation
	return token, nil
}
```

### Struct and Interface Documentation

```go
// Package user provides user data structures and operations.
//
// ## Types
// - User: Represents a user in the system
// - UserValidator: Validates user data
//
// ## Example
//
//	user := user.User{
//	    ID:    1,
//	    Name:  "Alice",
//	    Email: "alice@example.com",
//	}
//	fmt.Printf("User: %+v\n", user)

package user

// User represents a **User** in the system.
//
// ## Fields
// | Field | Type | Description |
// |-------|------|-------------|
// | ID | int | Unique user identifier |
// | Name | string | User's full name |
// | Email | string | User's email address |
// | CreatedAt | time.Time | Account creation timestamp |
//
// ## Example
//
//	user := user.User{
//	    ID:    1,
//	    Name:  "Alice",
//	    Email: "alice@example.com",
//	}
//	fmt.Printf("User ID: %d\n", user.ID)
type User struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"createdAt"`
}

// String returns user's **display name** with email.
//
// Returns formatted string: "Name (email)"
//
// ## Example
//
//	user := User{ID: 1, Name: "Alice", Email: "alice@example.com"}
//	fmt.Println(user.String()) // "Alice (alice@example.com)"
func (u User) String() string {
	return fmt.Sprintf("%s (%s)", u.Name, u.Email)
}
```

## Rust Doc Comments

### Function Documentation

```rust
//! **User Management Module**
//!
//! Provides types and functions for user management.
//!
//! ## Types
//! - `User`: Represents a user in the system
//! - `UserError`: Errors that can occur during user operations
//!
//! ## Functions
//! - `create_user()`: Create a new user
//! - `get_user()`: Retrieve user by ID
//! - `update_user()`: Update user information
//!
//! ## Example
//!
//! ```rust
//! use user::{create_user, User};
//!
//! let user = User {
//!     id: 1,
//!     name: String::from("Alice"),
//!     email: String::from("alice@example.com"),
//! };
//!
//! match create_user(user).await {
//!     Ok(created) => println!("Created user: {:?}", created),
//!     Err(e) => eprintln!("Error: {:?}", e),
//! }
//! ```

/// Calculate the area of a rectangle.
///
/// This function multiplies width by height.
/// Returns **0** if either parameter is negative.
///
/// # Parameters
///
/// | Parameter | Type | Description |
/// |-----------|------|-------------|
/// | width | `i32` | Rectangle width (must be positive) |
/// | height | `i32` | Rectangle height (must be positive) |
///
/// # Returns
///
/// - `i32`: The calculated area
///
/// # Panics
///
/// Panics if width or height is negative
///
/// # Example
///
/// ```rust
/// let area = calculate_area(4, 5);
/// assert_eq!(area, 20);
/// ```
pub fn calculate_area(width: i32, height: i32) -> i32 {
    if width < 0 || height < 0 {
        panic!("Width and height must be positive");
    }

    width * height
}
```

### Struct and Trait Documentation

```rust
/// Represents a **User** in the system.
///
/// # Fields
///
/// | Field | Type | Description |
/// |-------|------|-------------|
/// | id | `i32` | Unique user identifier |
/// | name | `String` | User's full name |
/// | email | `String` | User's email address |
/// | created_at | `DateTime` | Account creation timestamp |
///
/// # Example
///
/// ```rust
/// use user::User;
///
/// let user = User {
///     id: 1,
///     name: String::from("Alice"),
///     email: String::from("alice@example.com"),
///     created_at: Utc::now(),
/// };
///
/// println!("User: {} ({})", user.name, user.email);
/// ```
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct User {
    /// Unique user identifier
    pub id: i32,

    /// User's full name
    pub name: String,

    /// User's email address
    pub email: String,

    /// Account creation timestamp
    pub created_at: DateTime<Utc>,
}

impl User {
    /// Get user's **display name** with email.
    ///
    /// Returns formatted string: "Name (email)"
    ///
    /// # Example
    ///
    /// ```rust
    /// let user = User {
    ///     id: 1,
    ///     name: String::from("Alice"),
    ///     email: String::from("alice@example.com"),
    ///     created_at: Utc::now(),
    /// };
    ///
    /// println!("{}", user.display_name());
    /// // Output: "Alice (alice@example.com)"
    /// ```
    pub fn display_name(&self) -> String {
        format!("{} ({})", self.name, self.email)
    }
}
```

## Best Practices for Code Comments

### 1. Document Public APIs

```rust
// Good - Document public function
/// Public API with documentation
pub fn public_function() {}

// Don't need - Internal function
fn internal_helper() {}
```

### 2. Use Markdown Formatting

```javascript
/**
 * Good - Uses markdown formatting
 *
 * ## Parameters
 * - `param1`: Description with **bold** and *italic*
 * - `param2`: `` `code` `` formatting
 *
 * ## Example
 * ```javascript
 * example();
 * ```
 */
```

### 3. Provide Examples

```python
def process_data(data: list) -> dict:
    """
    Process input data and return results.

    ## Parameters
    - `data`: List of items to process

    ## Returns
    - `dict`: Dictionary with processed data

    ## Example
    ```python
    >>> result = process_data([1, 2, 3])
    >>> print(result)
    {'processed': True, 'count': 3}
    ```
    """
    pass
```

### 4. Include Type Information

```javascript
/**
 * Good - Includes type information
 *
 * @param {number} id - User ID
 * @returns {Promise<User>} User object
 */
```

### 5. Document Edge Cases

```go
// GetUser retrieves user by ID.
//
// Returns `nil` if user is not found.
// Returns error if database query fails.
//
// ## Edge Cases
// - ID <= 0: Returns error (invalid ID)
// - User deleted: Returns nil (not found)
func GetUser(id int) (*User, error) {
	// Implementation
}
```

### 6. Keep Comments Concise

```javascript
// Bad - Verbose, unnecessary
/**
 * This function takes a string as input and then it checks if the string
 * is empty or null and if it is, it returns a default value,
 * otherwise it processes the string and returns the result.
 */

// Good - Concise, clear
/**
 * Process input string with default fallback.
 *
 * Returns default value if input is empty/null.
 */
function processString(input) {}
```

### 7. Use Consistent Formatting

```python
# Good - Consistent parameter formatting
def authenticate(email: str, password: str) -> str:
    """
    Authenticate user with credentials.

    ## Parameters
    - `email`: User's email address
    - `password`: User's password

    ## Returns
    - `str`: Authentication token
    """
    pass
```

## FAQ

### Should I use markdown in all code comments?

No, use markdown in docstrings (function, class, module documentation). Use plain text for inline comments.

### What if markdown doesn't render?

Some documentation generators don't support markdown. Use plain text and code blocks as fallback.

### How detailed should docstrings be?

Be comprehensive but concise. Document what the code does, why it exists, and how to use it. Don't document obvious code.

### Should I include TODO comments in docstrings?

No, use TODO/FIXME comments inline, not in docstrings. Docstrings should document final API, not work in progress.

### Can I use markdown for type hints?

Yes, but check your language's documentation generator. Type hints may need specific formatting.

## Summary

**Markdown in Code Comments:**

- **JavaScript/TypeScript:** JSDoc with markdown support
- **Python:** PEP 257 docstrings with markdown
- **Go:** Go comments with markdown formatting
- **Rust:** Rust doc comments with markdown
- **Ruby:** RDoc with partial markdown
- **Java:** Javadoc with limited markdown

**Best Practices:**

- Document public APIs, not internal functions
- Use markdown for formatting (bold, italic, code, lists)
- Provide working code examples
- Include type information
- Document edge cases and errors
- Keep docstrings concise and clear
- Use consistent formatting

**Documentation Tools:**

- **JavaScript/TypeScript:** TypeDoc, JSDoc
- **Python:** Sphinx, MkDocs, pdoc
- **Go:** godoc, pkgsite
- **Rust:** rustdoc, cargo doc
- **Ruby:** YARD, RDoc

[Try Code Comments in Markdown Visualizer](/) — Free Monaco-powered editor with syntax highlighting for all programming languages.

**Data sources:** JSDoc documentation, PEP 257 specification, Go documentation conventions, Rust documentation guidelines.
