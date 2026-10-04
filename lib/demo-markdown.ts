export const demoMarkdown = `# Markdown Visualizer Demo

A quick tour of what renders here. Edit anything on the left and watch the preview update.

## Text

**Bold**, *italic*, ~~strikethrough~~, \`inline code\`, and [links](https://github.com).

> Blockquotes work too.

## Lists

- Unordered item
- Another item
  - Nested item

1. First
2. Second
3. Third

- [x] Task done
- [ ] Task pending

## Table

| Feature  | Supported |
| -------- | :-------: |
| GFM      |    Yes    |
| Code     |    Yes    |
| Mermaid  |    Yes    |

## Code

\`\`\`ts
function greet(name: string) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Mermaid

\`\`\`mermaid
flowchart LR
  A[Write] --> B[Preview]
  B --> C{Happy?}
  C -- Yes --> D[Copy]
  C -- No --> A
\`\`\`

---

Clear the editor to start your own document.
`;
