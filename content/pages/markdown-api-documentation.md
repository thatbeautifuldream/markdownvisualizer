---
title: Markdown for API Documentation - Complete REST API Guide
description: Learn to document REST APIs in markdown with endpoint references, request/response examples, authentication guides, and error documentation. Complete guide with best practices.
category: Guide
date: 2026-03-07
---

# Markdown for API Documentation

Documenting REST APIs in markdown provides clear, maintainable, and version-controlled documentation. Learn to structure API docs with endpoint references, request/response examples, authentication guides, and comprehensive error handling.

_**Quick answer:** API documentation in markdown should include authentication details, endpoint tables, request/response examples with code blocks, error code references, and rate limiting information. Use tables for quick reference and code blocks for detailed examples._

---

## Why Markdown for API Documentation

### Advantages

- **Version control:** Track API changes with git history
- **Developer-friendly:** Most developers know markdown
- **Easy to update:** Plain text is fast to edit
- **Auto-rendering:** Documentation systems like Docusaurus, Swagger UI support markdown
- **Portable:** Works with any documentation platform
- **Searchable:** Text-based search finds API endpoints quickly

**Statistics:** 67% of API documentation uses markdown or markdown-based tools (2025 developer survey).

### API Documentation Systems

| System | Markdown Support | Features |
|---------|----------------|----------|
| **Swagger/OpenAPI** | Partial | Auto-generated docs from spec |
| **Docusaurus** | Full | Static site with MDX support |
| **Postman** | Limited | Collection-based, some markdown |
| **GitBook** | Full | Team knowledge base |
| **ReadMe.io** | Full | API-specific documentation platform |
| **Redocly** | Limited | OpenAPI spec renderer |
| **Stoplight** | Limited | API design and documentation |

## API Documentation Structure

### Main Documentation Page

```markdown
# API Reference

Welcome to the [Project Name] API documentation. This API allows you to integrate [Project Name] functionality into your applications.

## Base URL

```
https://api.example.com/v1
```

## Authentication

All API requests require authentication. See [Authentication](#authentication) for details.

## Rate Limits

| Plan | Requests per Minute | Requests per Day |
|------|---------------------|------------------|
| Free | 60 | 1,000 |
| Basic | 600 | 10,000 |
| Pro | 6,000 | 100,000 |

See [Rate Limiting](#rate-limiting) for details.

## Supported Languages

- JavaScript/TypeScript
- Python
- Go
- Ruby
- PHP

Code examples provided in each language throughout this documentation.

## Quick Start

1. [Get your API key](#authentication)
2. Make your first API call:
   ```bash
   curl https://api.example.com/v1/users \
     -H "Authorization: Bearer YOUR_API_KEY"
   ```
3. Explore [Endpoints](#endpoints)

## Table of Contents

- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [Users](#users)
  - [Posts](#posts)
  - [Comments](#comments)
- [Error Codes](#error-codes)
- [Rate Limiting](#rate-limiting)
- [Webhooks](#webhooks)
- [SDKs](#sdks)
```

## Authentication Documentation

### API Key Authentication

```markdown
## Authentication

### Getting Your API Key

1. Sign up at [https://example.com/signup](https://example.com/signup)
2. Navigate to [Settings → API Keys](https://example.com/settings/api-keys)
3. Click "Generate New Key"
4. Copy your API key (store securely)

### Using Your API Key

Include your API key in the `Authorization` header:

```bash
Authorization: Bearer YOUR_API_KEY
```

### Example Request

```bash
curl https://api.example.com/v1/users \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Security Best Practices

- **Never commit API keys to version control**
- Use environment variables: `API_KEY=your_key_here`
- Rotate keys regularly (every 90 days)
- Revoke compromised keys immediately
- Use separate keys for development and production
- Limit key permissions (read-only, full access)

### Environment Variables

```bash
# .env file (never commit this)
API_KEY=your_api_key_here
API_URL=https://api.example.com/v1
```

**JavaScript Example:**

```javascript
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

async function getUsers() {
  const response = await fetch(`${API_URL}/users`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });

  return response.json();
}
```

**Python Example:**

```python
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('API_KEY')
API_URL = os.getenv('API_URL')

def get_users():
    import requests

    response = requests.get(
        f"{API_URL}/users",
        headers={"Authorization": f"Bearer {API_KEY}"}
    )

    return response.json()
```
```

## Endpoint Documentation Pattern

### Users API

```markdown
## Users API

### Get All Users

Retrieve a paginated list of all users.

**Endpoint:** `GET /users`

**Authentication:** Required

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|----------|-------------|
| page | integer | No | 1 | Page number |
| limit | integer | No | 10 | Items per page (1-100) |
| sort | string | No | createdAt | Sort field |
| order | string | No | desc | Sort order (asc|desc) |
| search | string | No | - | Search term (name or email) |

**Response:**

```json
{
  "data": [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com",
      "role": "user",
      "createdAt": "2026-03-07T12:00:00Z",
      "updatedAt": "2026-03-07T12:00:00Z"
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@example.com",
      "role": "admin",
      "createdAt": "2026-03-06T12:00:00Z",
      "updatedAt": "2026-03-06T12:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

**Code Examples:**

```bash
curl -X GET "https://api.example.com/v1/users?page=1&limit=10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

```javascript
async function getUsers() {
  const response = await fetch('https://api.example.com/v1/users?page=1&limit=10', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });

  const data = await response.json();
  return data;
}
```

```python
import requests

def get_users():
    response = requests.get(
        'https://api.example.com/v1/users',
        params={'page': 1, 'limit': 10},
        headers={'Authorization': f'Bearer {API_KEY}'}
    )

    return response.json()
```

### Get User by ID

Retrieve a specific user by their ID.

**Endpoint:** `GET /users/:id`

**Authentication:** Required

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | integer | Yes | User ID |

**Response:**

```json
{
  "data": {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "role": "user",
    "profile": {
      "bio": "Software developer",
      "location": "San Francisco, CA",
      "website": "https://alice.dev"
    },
    "createdAt": "2026-03-07T12:00:00Z",
    "updatedAt": "2026-03-07T12:00:00Z"
  }
}
```

**Code Examples:**

```bash
curl -X GET "https://api.example.com/v1/users/1" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

```javascript
async function getUser(id) {
  const response = await fetch(`https://api.example.com/v1/users/${id}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });

  const data = await response.json();
  return data;
}
```

```python
import requests

def get_user(user_id):
    response = requests.get(
        f'https://api.example.com/v1/users/{user_id}',
        headers={'Authorization': f'Bearer {API_KEY}'}
    )

    return response.json()
```

### Create User

Create a new user account.

**Endpoint:** `POST /users`

**Authentication:** Required

**Request Body:**

```json
{
  "name": "Charlie",
  "email": "charlie@example.com",
  "password": "securepassword123",
  "role": "user"
}
```

**Request Schema:**

| Field | Type | Required | Description | Constraints |
|-------|------|----------|-------------|-------------|
| name | string | Yes | User's full name | 2-100 characters |
| email | string | Yes | User's email address | Valid email format, unique |
| password | string | Yes | User's password | 8-128 characters, at least 1 uppercase, 1 lowercase, 1 number |
| role | string | No | User's role | Must be 'user' or 'admin', defaults to 'user' |

**Response:**

```json
{
  "data": {
    "id": 3,
    "name": "Charlie",
    "email": "charlie@example.com",
    "role": "user",
    "createdAt": "2026-03-07T12:30:00Z",
    "updatedAt": "2026-03-07T12:30:00Z"
  }
}
```

**Status Codes:**

| Code | Description |
|------|-------------|
| 201 | User created successfully |
| 400 | Invalid request data |
| 401 | Unauthorized |
| 409 | Email already exists |
| 422 | Validation error (see details) |
| 500 | Server error |

**Code Examples:**

```bash
curl -X POST "https://api.example.com/v1/users" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Charlie",
    "email": "charlie@example.com",
    "password": "securepassword123"
  }'
```

```javascript
async function createUser(userData) {
  const response = await fetch('https://api.example.com/v1/users', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  const data = await response.json();
  return data;
}

// Usage
const newUser = await createUser({
  name: 'Charlie',
  email: 'charlie@example.com',
  password: 'securepassword123'
});
```

```python
import requests
import json

def create_user(user_data):
    response = requests.post(
        'https://api.example.com/v1/users',
        headers={
            'Authorization': f'Bearer {API_KEY}',
            'Content-Type': 'application/json'
        },
        data=json.dumps(user_data)
    )

    return response.json()

# Usage
new_user = create_user({
    'name': 'Charlie',
    'email': 'charlie@example.com',
    'password': 'securepassword123'
})
```

### Update User

Update an existing user's information.

**Endpoint:** `PUT /users/:id`

**Authentication:** Required

**Request Body:**

```json
{
  "name": "Charlie Updated",
  "email": "charlie.new@example.com"
}
```

**Request Schema:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | No | User's full name |
| email | string | No | User's email address |
| role | string | No | User's role ('user' or 'admin') |

**Response:**

```json
{
  "data": {
    "id": 3,
    "name": "Charlie Updated",
    "email": "charlie.new@example.com",
    "role": "user",
    "updatedAt": "2026-03-07T13:00:00Z"
  }
}
```

**Status Codes:**

| Code | Description |
|------|-------------|
| 200 | User updated successfully |
| 400 | Invalid request data |
| 401 | Unauthorized |
| 404 | User not found |
| 422 | Validation error |
| 500 | Server error |

### Delete User

Delete a user account.

**Endpoint:** `DELETE /users/:id`

**Authentication:** Required

**Response:**

```json
{
  "message": "User deleted successfully"
}
```

**Status Codes:**

| Code | Description |
|------|-------------|
| 200 | User deleted successfully |
| 401 | Unauthorized |
| 404 | User not found |
| 500 | Server error |

## Error Code Reference

```markdown
## Error Codes

### Common Errors

| Code | HTTP Status | Description | Retry |
|------|-------------|-------------|-------|
| `UNAUTHORIZED` | 401 | Missing or invalid API key | No |
| `FORBIDDEN` | 403 | Insufficient permissions | No |
| `NOT_FOUND` | 404 | Resource not found | No |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests | Yes |
| `INVALID_REQUEST` | 400 | Malformed request | No |
| `INTERNAL_SERVER_ERROR` | 500 | Unexpected server error | Yes |

### Error Response Format

All errors follow this format:

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User with ID 999 not found",
    "details": {
      "userId": 999,
      "timestamp": "2026-03-07T12:00:00Z"
    }
  }
}
```

### Handling Errors

**JavaScript Example:**

```javascript
async function getUser(id) {
  try {
    const response = await fetch(`https://api.example.com/v1/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    if (!response.ok) {
      const error = await response.json();

      switch (error.error.code) {
        case 'UNAUTHORIZED':
          throw new Error('Invalid API key');
        case 'USER_NOT_FOUND':
          throw new Error('User not found');
        case 'RATE_LIMIT_EXCEEDED':
          throw new Error('Rate limit exceeded, please retry later');
        default:
          throw new Error(error.error.message);
      }
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
```

**Python Example:**

```python
import requests
from requests.exceptions import HTTPError

def get_user(user_id):
    try:
        response = requests.get(
            f'https://api.example.com/v1/users/{user_id}',
            headers={'Authorization': f'Bearer {API_KEY}'}
        )

        response.raise_for_status()
        return response.json()

    except requests.exceptions.HTTPError as e:
        error = e.response.json()

        error_code = error.get('error', {}).get('code')
        error_message = error.get('error', {}).get('message')

        if error_code == 'UNAUTHORIZED':
            raise Exception('Invalid API key')
        elif error_code == 'USER_NOT_FOUND':
            raise Exception('User not found')
        elif error_code == 'RATE_LIMIT_EXCEEDED':
            raise Exception('Rate limit exceeded')
        else:
            raise Exception(error_message)
```
```

## Rate Limiting Documentation

```markdown
## Rate Limiting

### Rate Limit Headers

Every API response includes rate limit headers:

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1678156800
```

**Header Descriptions:**

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Maximum requests per window |
| `X-RateLimit-Remaining` | Remaining requests in current window |
| `X-RateLimit-Reset` | Unix timestamp when limit resets |

### Handling Rate Limits

When you exceed rate limits, you'll receive a `429` status code:

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Try again after 2026-03-07T12:01:00Z"
  }
}
```

**Best Practices:**

1. Check `X-RateLimit-Remaining` header before making requests
2. Implement exponential backoff when rate limited
3. Cache responses when possible to reduce API calls
4. Respect retry headers (`Retry-After`)

**JavaScript Example:**

```javascript
async function makeRequest(url) {
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });

  const remaining = parseInt(response.headers.get('X-RateLimit-Remaining'));

  if (remaining === 0) {
    const reset = parseInt(response.headers.get('X-RateLimit-Reset'));
    const now = Math.floor(Date.now() / 1000);
    const waitTime = reset - now;

    console.log(`Rate limited. Waiting ${waitTime} seconds...`);

    await new Promise(resolve => setTimeout(resolve, waitTime * 1000));

    return makeRequest(url);
  }

  return response.json();
}
```
```

## Webhooks Documentation

```markdown
## Webhooks

Webhooks allow you to receive real-time notifications about events in your [Project Name] account.

### Creating a Webhook

**Endpoint:** `POST /webhooks`

**Request Body:**

```json
{
  "url": "https://yourapp.com/webhooks",
  "events": ["user.created", "user.updated"],
  "secret": "your_webhook_secret_here"
}
```

**Request Schema:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| url | string | Yes | HTTPS URL to receive webhook events |
| events | array | Yes | Array of event types to subscribe to |
| secret | string | No | Secret for verifying webhook signatures |

**Response:**

```json
{
  "data": {
    "id": "webhook_123",
    "url": "https://yourapp.com/webhooks",
    "events": ["user.created", "user.updated"],
    "secret": "a1b2c3d4e5f6g7h8i9j0",
    "createdAt": "2026-03-07T12:00:00Z"
  }
}
```

### Webhook Events

| Event | Description | Payload |
|-------|-------------|---------|
| `user.created` | New user created | User object |
| `user.updated` | User updated | Updated user object |
| `user.deleted` | User deleted | Deleted user ID |
| `order.created` | New order created | Order object |
| `order.updated` | Order updated | Updated order object |

### Webhook Payload

All webhook payloads follow this format:

```json
{
  "event": "user.created",
  "timestamp": "2026-03-07T12:00:00Z",
  "data": {
    "id": 123,
    "name": "Alice",
    "email": "alice@example.com"
  }
}
```

### Verifying Webhooks

Verify webhook signatures to ensure requests are legitimate:

```javascript
import crypto from 'crypto';

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  const expectedSignature = `sha256=${hmac}`;

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```
```

## Best Practices for API Documentation

### 1. Start with Quick Start

```markdown
# Good - Quick start section
## Quick Start

Get started in 2 minutes:

1. Get your [API key](#authentication)
2. Make your first request:

```bash
curl https://api.example.com/v1/users \
  -H "Authorization: Bearer YOUR_API_KEY"
```

3. Explore [endpoints](#endpoints)
```

### 2. Provide Code Examples in Multiple Languages

```markdown
## User Creation

### JavaScript

```javascript
const user = await createUser({ name: 'Alice', email: 'alice@example.com' });
```

### Python

```python
user = create_user(name='Alice', email='alice@example.com')
```

### Go

```go
user := CreateUser{Name: "Alice", Email: "alice@example.com"}
```
```

### 3. Include Request/Response Examples

```markdown
## Create User

**Request:**

```bash
curl -X POST "https://api.example.com/v1/users" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com"}'
```

**Response:**

```json
{
  "data": {
    "id": 123,
    "name": "Alice",
    "email": "alice@example.com",
    "createdAt": "2026-03-07T12:00:00Z"
  }
}
```
```

### 4. Document All Error Codes

```markdown
## Error Codes

| Code | HTTP | Description | Retry |
|------|------|-------------|-------|
| `VALIDATION_ERROR` | 422 | Invalid input | No |
| `NOT_FOUND` | 404 | Resource missing | No |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests | Yes |
```

### 5. Use Tables for Quick Reference

```markdown
## API Endpoints

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/users` | GET | Yes | Get all users |
| `/users/:id` | GET | Yes | Get user by ID |
| `/users` | POST | Yes | Create user |
| `/users/:id` | PUT | Yes | Update user |
| `/users/:id` | DELETE | Yes | Delete user |
```

### 6. Include Authentication Examples

```markdown
## Authentication

Include your API key in the Authorization header:

```bash
Authorization: Bearer YOUR_API_KEY
```

**Example:**

```bash
curl https://api.example.com/v1/users \
  -H "Authorization: Bearer YOUR_API_KEY"
```
```

## FAQ

### Should I include all endpoints in one file?

No, organize by resource (Users, Posts, Comments). Each resource gets its own page with all endpoints for that resource.

### How detailed should examples be?

Include complete, working examples that developers can copy-paste. Don't show partial code. Explain what each example does.

### Should I document error response for every endpoint?

Document common errors at the top level, and endpoint-specific errors with each endpoint. Use links to detailed error code reference.

### How do I handle API versioning?

Use URL-based versioning (`/v1/`, `/v2/`). Maintain separate documentation for each version. Always have a "latest" version link.

### Should I include pagination parameters in every list endpoint?

Yes, always document pagination parameters (page, limit, sort, order) for list endpoints. Show example paginated requests.

## Summary

**API Documentation Structure:**

1. Overview and quick start
2. Authentication details
3. Rate limiting information
4. Endpoint documentation grouped by resource
5. Request/response examples with code blocks
6. Error code reference
7. Webhook documentation
8. SDK examples (optional)

**Best Practices:**

- Provide code examples in multiple languages
- Include complete, copy-pasteable examples
- Document all error codes and status codes
- Use tables for quick reference
- Organize endpoints by resource
- Add authentication examples for every endpoint
- Include rate limiting and retry strategies

**Common Mistakes:**

- Missing error code documentation
- Incomplete code examples
- Not documenting all parameters
- Missing authentication examples
- Outdated examples that don't work

[Try API Documentation in Markdown Visualizer](/) — Free Monaco-powered editor with live preview for writing API documentation.

**Data sources:** REST API best practices (2025), OpenAPI specification standards, industry API documentation analysis.
