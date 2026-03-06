---
title: Monaco Editor for Markdown - Configuration & Customization
description: Learn to configure Monaco Editor for markdown editing with VS Code-compatible features, syntax highlighting, themes, and optimization. Complete guide for Monaco integration.
category: Guide
date: 2026-03-07
---

# Monaco Editor for Markdown

Monaco Editor powers VS Code and provides professional-grade editing for markdown. Learn to configure, customize, and optimize Monaco for markdown editing with syntax highlighting, themes, keyboard shortcuts, and performance tuning.

_**Quick answer:** Monaco Editor is the same editor that powers VS Code. Configure Monaco with `defaultLanguage: 'markdown'`, `minimap: true`, and `lineNumbers: 'on'` for professional markdown editing. Use Monaco's API for custom themes, shortcuts, and advanced features._

---

## What is Monaco Editor?

### Overview

Monaco Editor is Microsoft's code editor that powers:

- **Visual Studio Code** - Most popular code editor
- **Azure DevOps** - Microsoft's development platform
- **GitHub Codespaces** - Cloud-based development environment
- **StackBlitz** - Online code editor
- **Markdown Visualizer** - Online markdown editor

**Key Features:**

- Intelligent syntax highlighting (100+ languages)
- Auto-indentation and bracket matching
- Multi-cursor editing
- Minimap navigation
- Find and replace with regex
- Keyboard shortcuts (VS Code-compatible)
- Theme support
- Extensible architecture

**Statistics:** VS Code uses Monaco and has 78% market share among developers (2025 developer survey).

### Monaco vs Other Editors

| Feature | Monaco | CodeMirror | Ace |
|--------|---------|-----------|-----|
| **Syntax highlighting** | 100+ languages | 120+ languages | 100+ languages |
| **VS Code compatibility** | Yes (native) | No | No |
| **Keyboard shortcuts** | VS Code-compatible | Custom | Custom |
| **Minimap** | Yes | Plugin | Plugin |
| **Multi-cursor** | Yes | Plugin | Yes |
| **TypeScript support** | Excellent | Good | Good |
| **Performance** | Excellent | Good | Good |
| **Bundle size** | Large | Medium | Medium |

## Monaco Editor Setup

### Basic Configuration

```javascript
import * as monaco from 'monaco-editor';

// Create editor instance
const editor = monaco.editor.create(document.getElementById('editor'), {
  value: '# Hello World\n\nThis is **markdown** content.',
  language: 'markdown',
  theme: 'vs-dark',
  fontSize: 14,
  fontFamily: 'Geist Mono, monospace',
  lineNumbers: 'on',
  minimap: { enabled: true },
  wordWrap: 'on',
  automaticLayout: true,
  scrollBeyondLastLine: false,
  folding: true,
  foldingStrategy: 'indentation',
  showFoldingControls: 'always',
  bracketPairColorization: { enabled: true },
});

// Focus editor
editor.focus();
```

### Markdown-Specific Configuration

```javascript
const editor = monaco.editor.create(container, {
  // Language
  language: 'markdown',

  // Fonts
  fontSize: 12,
  fontFamily: 'Geist Mono, "Fira Code", monospace',
  fontWeight: '400',

  // Layout
  wordWrap: 'on',
  lineNumbers: 'on',
  minimap: { enabled: true },
  lineDecorationsWidth: 10,

  // Folding
  folding: true,
  foldingStrategy: 'indentation',
  showFoldingControls: 'always',

  // Editing
  autoClosingBrackets: 'always',
  autoClosingQuotes: 'always',
  autoSurround: 'languageDefined',

  // Scrolling
  scrollBeyondLastLine: false,
  smoothScrolling: true,

  // Appearance
  renderWhitespace: 'selection',
  renderLineHighlight: 'all',
  cursorBlinking: 'smooth',

  // Brackets
  bracketPairColorization: { enabled: true },

  // Performance
  automaticLayout: true,
  glyphMargin: true,
});
```

## Monaco Markdown Features

### Syntax Highlighting

Monaco provides intelligent markdown syntax highlighting:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold** and *italic* and ~~strikethrough~~

`Inline code`

```
Fenced code block with language
```

- [x] Task list
- [ ] Another task

| Table | Header |
|--------|--------|
| Cell   | Data   |

> Blockquote with multiple
> lines
```

**Highlighted elements:**

- **Headings:** Different colors by level (H1-H6)
- **Bold/Italic:** Distinct styling for emphasis
- **Code:** Monospace font with different color
- **Links:** Underlined with link color
- **Task lists:** Checkbox styling
- **Tables:** Header and cell highlighting
- **Blockquotes:** Italic with border

### Auto-Indentation

Monaco automatically indents markdown content:

```markdown
# Main Heading

## Section

- Item 1
- Item 2
  - Nested item  ← Auto-indented
- Item 3

> Blockquote with
> Multiple lines
> ← Auto-continued
```

**Auto-indented elements:**

- **Lists:** New items auto-indent
- **Code blocks:** Maintains indentation
- **Blockquotes:** Continues on Enter
- **Nested structures:** Smart indentation

### Bracket Matching

Monaco highlights matching brackets:

```markdown
# Example with brackets

- [x] Task list ← Brackets matched
- Code with {brackets} ← Brackets highlighted
- Links: [text](url) ← Parentheses matched

\`\`\`javascript
function hello() {  ← Curly braces matched
  return "World";
}
\`\`\`
```

### Code Folding

Monaco allows folding markdown sections:

```markdown
# Section 1  ← Click ▶ to fold
Content here...

## Subsection  ← Click ▶ to fold
More content...

# Section 2
Content...
```

**Foldable elements:**

- **Headings:** Fold all content under heading
- **Code blocks:** Fold code content
- **Lists:** Fold nested items
- **Blockquotes:** Fold multi-line quotes

### Minimap Navigation

Monaco's minimap shows document overview:

```
┌─────────────────────┐
│ H1 Main Heading   │  ← Minimap overview
│ H2 Section 1     │
│   Paragraph        │
│ H2 Section 2     │
│   List            │
│     Item 1        │
│     Item 2        │
└─────────────────────┘
```

**Features:**

- **Click to navigate:** Jump to any location
- **Current view indicator:** Shows visible area
- **Configurable:** Can be disabled if not needed

## Monaco Editor Customization

### Custom Themes

```javascript
// Define custom markdown theme
monaco.editor.defineTheme('custom-dark', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: '', background: '1e1e1e', foreground: 'd4d4d4' },
    { token: 'tag', foreground: '569cd6' },  // Headings
    { token: 'keyword', foreground: 'c678dd' },  // **bold**
    { token: 'string', foreground: '98c379' },  // `code`
    { token: 'comment', foreground: '7f848e' },  // > blockquote
  ],
  colors: {
    'editor.background': '#1e1e1e',
    'editor.foreground': '#d4d4d4',
    'editor.lineHighlightBackground': '#2a2d2e',
    'editor.selectionBackground': '#264f78',
    'editor.inactiveSelectionBackground': '#3a3d41',
  },
});

// Use custom theme
const editor = monaco.editor.create(container, {
  theme: 'custom-dark',
  language: 'markdown',
});
```

### Custom Font Configuration

```javascript
const editor = monaco.editor.create(container, {
  // Font settings
  fontSize: 14,
  fontFamily: 'Geist Mono, "Fira Code", monospace',
  fontWeight: '500',
  letterSpacing: 0,

  // Line height
  lineHeight: 24,

  // Font features
  fontLigatures: true,
  fontVariations: false,
});
```

### Custom Keyboard Shortcuts

```javascript
// Add custom keybinding
monaco.editor.addKeybindingRule({
  keybinding: monaco.KeyCode.KeyB | monaco.KeyMod.CtrlCmd,
  command: 'editor.action.insertSnippet',
  when: 'editorTextFocus && !editorReadonly',
});

// Register command
monaco.editor.registerCommand('editor.action.insertSnippet', {
  run: (ed) => {
    const position = ed.getPosition();
    const text = '**bold**';
    ed.executeEdits('insert-snippet', [
      {
        range: new monaco.Range(
          position.lineNumber,
          position.column,
          position.lineNumber,
          position.column
        ),
        text: text,
      },
    ]);
  },
});
```

## Monaco API for Markdown

### Editor Methods

```javascript
// Get editor value
const content = editor.getValue();

// Set editor value
editor.setValue('# New Content\n\nMore content here.');

// Get selected text
const selectedText = editor.getSelection();

// Insert text at cursor
editor.trigger('keyboard', 'type', { text: '**bold**' });

// Replace selected text
editor.executeEdits('replace', [
  {
    range: editor.getSelection(),
    text: 'new text',
  },
]);

// Get cursor position
const position = editor.getPosition();

// Jump to specific line
editor.revealLineInCenter(10);

// Focus editor
editor.focus();
```

### Event Listeners

```javascript
// Listen to content changes
editor.onDidChangeModelContent((event) => {
  console.log('Content changed:', event);
  // Save to storage, trigger preview update, etc.
});

// Listen to cursor position changes
editor.onDidChangeCursorPosition((event) => {
  console.log('Cursor moved:', event.position);
  // Update line number, status bar, etc.
});

// Listen to selection changes
editor.onDidChangeCursorSelection((event) => {
  console.log('Selection changed:', event.selection);
});

// Listen to focus/blur
editor.onDidFocusEditor(() => {
  console.log('Editor focused');
});

editor.onDidBlurEditor(() => {
  console.log('Editor blurred');
  // Auto-save on blur
});
```

### Model and View

```javascript
// Get editor model
const model = editor.getModel();

// Get line count
const lineCount = model.getLineCount();

// Get line content
const lineContent = model.getLineContent(10);

// Modify content programmatically
model.applyEdits([
  {
    range: new monaco.Range(0, 0, 0, 0),
    text: '# Title\n\n',
  },
]);

// Get view configuration
const options = editor.getOptions();

// Update options
editor.updateOptions({
  fontSize: 16,
  theme: 'vs-light',
});
```

## Monaco Performance Optimization

### Virtual Scrolling

Monaco uses virtual scrolling by default:

```javascript
const editor = monaco.editor.create(container, {
  // Enable virtual scrolling (default)
  smoothScrolling: true,

  // Optimize for large files
  scrollBeyondLastLine: false,

  // Disable minimap if not needed (improves performance)
  minimap: { enabled: false },
});
```

**Benefits:**

- Handles files with 10,000+ lines smoothly
- Only renders visible lines
- Reduced memory usage
- Faster scrolling and navigation

### Lazy Loading

```javascript
// Lazy load Monaco on demand
import * as monaco from 'monaco-editor';

// Load Monaco when editor container is mounted
function loadMonaco() {
  return new Promise((resolve) => {
    require(['vs/editor/editor.main'], function () {
      monaco.editor.create(document.getElementById('editor'), {
        language: 'markdown',
        // ... other options
      });
      resolve();
    });
  });
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
  loadMonaco().then(() => {
    console.log('Monaco loaded');
  });
});
```

### Optimization Options

```javascript
const editor = monaco.editor.create(container, {
  // Performance optimizations
  automaticLayout: true,        // Auto-resize on content changes
  glyphMargin: true,            // Show line numbers
  folding: true,                // Enable code folding
  lineNumbersMinChars: 4,        // Only show line numbers for long files

  // Disable unnecessary features for performance
  minimap: { enabled: false },    // Disable minimap
  renderWhitespace: 'none',       // Don't render whitespace
  scrollBeyondLastLine: false,  // No empty space at end

  // Editor behavior
  wordWrap: 'off',              // Disable word wrap for performance
  lineNumbers: 'off',           // Disable line numbers for performance
});
```

## Monaco with React Integration

### Using @monaco-editor/react

```javascript
import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

function MarkdownEditor({ value, onChange }) {
  const editorRef = useRef(null);

  const handleEditorChange = (value) => {
    onChange(value);
  };

  return (
    <Editor
      height="500px"
      defaultLanguage="markdown"
      defaultValue={value}
      onChange={handleEditorChange}
      theme="vs-dark"
      options={{
        minimap: { enabled: true },
        fontSize: 14,
        lineNumbers: 'on',
        wordWrap: 'on',
        automaticLayout: true,
      }}
      onMount={(editor) => {
        editorRef.current = editor;

        // Custom commands
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
          console.log('Save command triggered');
        });
      }}
    />
  );
}

export default MarkdownEditor;
```

### Using Monaco Editor Directly

```javascript
import React, { useEffect, useRef } from 'react';

function MonacoEditor({ value, onChange }) {
  const containerRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize Monaco
      const editor = monaco.editor.create(containerRef.current, {
        value: value,
        language: 'markdown',
        theme: 'vs-dark',
        options: {
          minimap: { enabled: true },
          fontSize: 14,
          lineNumbers: 'on',
          wordWrap: 'on',
        },
      });

      editorRef.current = editor;

      // Listen to changes
      editor.onDidChangeModelContent(() => {
        onChange(editor.getValue());
      });

      // Cleanup
      return () => {
        editor.dispose();
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: '500px', width: '100%' }}
    />
  );
}

export default MonacoEditor;
```

## Monaco Keyboard Shortcuts

### VS Code-Compatible Shortcuts

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| **Save** | `Ctrl+S` | `Cmd+S` |
| **Undo** | `Ctrl+Z` | `Cmd+Z` |
| **Redo** | `Ctrl+Y` | `Cmd+Shift+Z` |
| **Find** | `Ctrl+F` | `Cmd+F` |
| **Replace** | `Ctrl+H` | `Cmd+Shift+H` |
| **Go to Line** | `Ctrl+G` | `Ctrl+G` |
| **Toggle Comment** | `Ctrl+/` | `Cmd+/` |
| **Format Document** | `Shift+Alt+F` | `Shift+Opt+F` |

### Markdown-Specific Shortcuts

| Action | Shortcut | Notes |
|--------|----------|-------|
| **Toggle Bold** | `Ctrl/Cmd+B` | Wrap selection in `**` |
| **Toggle Italic** | `Ctrl/Cmd+I` | Wrap selection in `*` |
| **Toggle Code** | `Ctrl/Cmd+`` | Wrap selection in `` ` `` |
| **Insert Link** | `Ctrl/Cmd+K` | Insert `[text](url)` |
| **Toggle Heading** | `Ctrl/Cmd+1-6` | Insert `#` heading |

## FAQ

### Is Monaco Editor free?

Yes, Monaco Editor is open source under MIT license and free to use in any project.

### What languages does Monaco support?

Monaco supports 100+ languages including JavaScript, TypeScript, Python, Go, Rust, and many more. Full list available in Monaco documentation.

### Can I customize Monaco for markdown?

Yes, Monaco is highly customizable. You can configure themes, fonts, keyboard shortcuts, and implement custom markdown-specific features.

### How does Monaco compare to other editors?

Monaco is the editor that powers VS Code, providing professional-grade features. It's more powerful than CodeMirror and Ace, with better TypeScript support and VS Code compatibility.

### Is Monaco suitable for mobile browsers?

Monaco works in mobile browsers but is optimized for desktop. For mobile markdown editing, consider using simplified editors or touch-optimized interfaces.

### Can I use Monaco without React?

Yes, Monaco Editor works with vanilla JavaScript, React, Vue, Angular, and any framework. Provide a container element and Monaco initializes the editor.

## Summary

**Monaco Editor Features:**

- **VS Code-powered:** Same editor as most popular code editor
- **100+ languages:** Syntax highlighting for all major languages
- **Professional features:** Auto-indentation, bracket matching, multi-cursor
- **Customizable:** Themes, fonts, keyboard shortcuts
- **Extensible:** API for custom commands and behaviors

**Best Practices:**

- Configure `language: 'markdown'` for markdown files
- Enable `minimap` for navigation in long documents
- Use `automaticLayout: true` for responsive behavior
- Disable unnecessary features for performance
- Implement auto-save with `onDidChangeModelContent`
- Use `wordWrap: 'on'` for better readability

**Monaco in Products:**

- **Visual Studio Code** (Microsoft)
- **Azure DevOps** (Microsoft)
- **GitHub Codespaces** (GitHub)
- **StackBlitz** (Online editor)
- **Markdown Visualizer** (Online markdown editor)

[Try Monaco Editor in Markdown Visualizer](/) — Free online editor using Monaco with VS Code-compatible features and markdown optimization.

**Data sources:** Monaco Editor documentation, VS Code architecture, Microsoft developer resources.
