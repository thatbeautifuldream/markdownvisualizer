---
title: Math & LaTeX in Markdown - Complete Guide
description: Learn to write mathematical notation in markdown using LaTeX syntax. From basic equations to complex formulas with examples and best practices for technical documentation.
category: Guide
date: 2026-03-07
---

# Math & LaTeX in Markdown

Mathematical notation in markdown uses LaTeX syntax for rendering equations, formulas, and scientific notation. Learn to write inline math, display equations, and complex mathematical expressions in markdown for technical documentation.

_**Quick answer:** Use single dollar signs `$equation$` for inline math and double dollar signs `$$equation$$` for display math. Example: $E = mc^2$ renders as inline equation, `$$\sum_{i=1}^{n} x_i$$` renders as display equation._

---

## Why Math in Markdown

### Use Cases

- **Technical documentation:** Mathematical formulas in software docs
- **Scientific papers:** Research papers and academic writing
- **Educational content:** Tutorials and explanations
- **Data science:** Statistical formulas and expressions
- **Engineering:** Calculations and specifications

**Statistics:** 35% of technical documentation includes mathematical equations (2025 developer documentation survey).

### Advantages of LaTeX in Markdown

- **Plain text:** Version control friendly, diffable
- **Widely supported:** Most markdown renderers support math
- **Professional:** High-quality rendered equations
- **Accessible:** Screen readers can read math notation
- **Flexible:** Simple to complex equations supported

## Basic Math Syntax

### Inline Math

```markdown
The formula for kinetic energy is $E = \frac{1}{2}mv^2$.

The Pythagorean theorem states $a^2 + b^2 = c^2$.

Value of $\pi$ is approximately 3.14159.
```

**Rendering:**

The formula for kinetic energy is $E = \frac{1}{2}mv^2$.

The Pythagorean theorem states $a^2 + b^2 = c^2$.

Value of $\pi$ is approximately 3.14159.

### Display Math

```markdown
The quadratic formula:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

The Gaussian integral:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Rendering:**

The quadratic formula:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

The Gaussian integral:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## Common Math Operations

### Arithmetic

```markdown
Addition: $a + b = c$

Subtraction: $a - b = c$

Multiplication: $a \times b = c$

Division: $\frac{a}{b} = c$

Exponentiation: $a^b = c$
```

**Examples:**

```markdown
Basic operations:
- $2 + 3 = 5$
- $10 - 4 = 6$
- $5 \times 6 = 30$
- $\frac{12}{4} = 3$
- $2^3 = 8$
```

### Algebra

```markdown
Variables: $x, y, z$

Equation: $ax + by + c = 0$

Solution: $x = \frac{-c}{a}$ (when $y = 0$)

Inequality: $x > 0 \land y < 10$
```

### Greek Letters

```markdown
Common Greek letters:
- $\alpha, \beta, \gamma, \delta$
- $\pi, \sigma, \theta, \lambda$
- $\Omega, \Sigma, \Gamma, \Delta$

Uppercase:
- $\Alpha, \Beta, \Gamma, \Delta$
- $\Pi, \Sigma, \Theta, \Lambda$
```

## Advanced Math Syntax

### Fractions

```markdown
Simple fraction: $\frac{a}{b}$

Complex fraction: $\frac{\frac{a}{b}}{\frac{c}{d}}$

Mixed number: $2\frac{1}{2}$

Partial fraction: $\frac{A}{B} + \frac{C}{D}$
```

### Summation

```markdown
Simple sum: $\sum_{i=1}^{n} x_i$

Finite sum: $\sum_{i=1}^{10} i^2$

Infinite sum: $\sum_{n=1}^{\infty} \frac{1}{n^2}$

Double sum: $\sum_{i=1}^{n} \sum_{j=1}^{m} a_{ij}$
```

### Integration

```markdown
Definite integral: $\int_{a}^{b} f(x) dx$

Indefinite integral: $\int f(x) dx$

Multiple integral: $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^2+y^2)} dx dy$

Differential: $df(x) = f'(x) dx$
```

### Limits

```markdown
Limit: $\lim_{x \to a} f(x) = L$

One-sided limit: $\lim_{x \to a^+} f(x) = L$

Infinite limit: $\lim_{x \to \infty} f(x) = L$

Derivative limit: $\lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = f'(x)$
```

### Matrices

```markdown
Column vector: $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix}$

Row vector: $\mathbf{u} = \begin{bmatrix} u_1 & u_2 & u_3 \end{bmatrix}$

Matrix: $\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}$

Matrix multiplication: $\mathbf{A}\mathbf{B} = \mathbf{C}$
```

### Statistics

```markdown
Mean: $\mu = \frac{1}{n}\sum_{i=1}^{n} x_i$

Standard deviation: $\sigma = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - \mu)^2}$

Variance: $\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \mu)^2$

Correlation: $\rho = \frac{\text{cov}(X,Y)}{\sigma_X \sigma_Y}$
```

## Mathematical Symbols

### Common Operators

```markdown
Equality: $=$

Inequality: $\neq, <, >, \leq, \geq$

Approximation: $\approx, \sim, \simeq$

Plus-minus: $\pm, \mp$

Proportional: $\propto$

Therefore: $\therefore$

Because: $\because$
```

### Set Theory

```markdown

Element: $\in$

Not element: $\notin$

Union: $\cup$

Intersection: $\cap$

Empty set: $\emptyset$

Subset: $\subset$

Proper subset: \subsetneq

Universal set: $\forall$

Existential: $\exists$
```

### Logic Symbols

```markdown

Logical AND: $\land$

Logical OR: $\lor$

Logical NOT: $\lnot$

Implies: $\implies$

If and only if: $\iff$

For all: $\forall$

There exists: $\exists$

Unique: $\exists!$
```

## Complex Equations

### Physics Equations

```markdown
Kinetic energy: $E = \frac{1}{2}mv^2$

Potential energy: $PE = mgh$

Force: $F = ma$

Work: $W = Fd \cos \theta$

Power: $P = \frac{W}{t} = Fv$
```

### Computer Science

```markdown

Big O notation: $O(n \log n)$

Big Theta: $\Theta(n)$

Logarithm: $\log_2 n$

Exponential: $e^{nx}$

Recurrence: $T(n) = 2T(n/2) + O(n)$
```

### Chemistry

```markdown
Chemical equation: $\ce{2H2 + O2 -> 2H2O}$

Equilibrium: $H_2 + I_2 \rightleftharpoons 2HI$

State symbols: $^{14}_{6}C$ (Carbon-14)

Concentration: $[A] = \frac{n_A}{V}$
```

## Math Formatting

### Grouping and Parentheses

```markdown
Parentheses: $(a + b)$

Brackets: $[a, b, c]$

Curly braces: $\{a, b, c\}$

Absolute value: $|x|$

Floor: $\lfloor x \rfloor$

Ceiling: $\lceil x \rceil$

Fraction: $\frac{a}{b+c}$
```

### Spacing and Layout

```markdown
Add spacing: $a + b$

Thin space: $a \; b$

Medium space: $a \quad b$

Large space: $a \qquad b$

No space: $ab$

Line break: $$a \\ b$$
```

### Text in Math

```markdown

Text in math: $\text{where } x > 0$

Mixed text and math: $f(x) = x^2 \text{ for } x \in \mathbb{R}$

Subscript text: $x_{\text{min}}$

Superscript text: $x^{\text{max}}$
```

## Math in Code Blocks

### Using Code Blocks

```markdown
```math
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
```
```

**Rendering (if math code block supported):**

$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### Markdown Math in Code

```markdown
To display math symbols in code, escape dollar signs:

Use `$E = mc^2$` for inline math.
Use `$$\sum_{i=1}^{n} x_i$$` for display math.
```

## Math Platforms and Renderers

### KaTeX

Fast, web-based math renderer.

```html
<!-- KaTeX CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>

<!-- Inline math -->
The formula is $E = mc^2$.

<!-- Display math -->
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Features:**

- Fast rendering
- No dependencies
- Good accessibility
- LaTeX support

### MathJax

Most popular math renderer.

```html
<!-- MathJax CDN -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<!-- Inline math -->
The formula is $E = mc^2$.

<!-- Display math -->
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Configuration:**

```html
<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
  },
};
</script>
```

## Best Practices

### 1. Choose Right Math Type

```markdown
# Good - Appropriate math type

Inline for simple equations: $E = mc^2$

Display for complex formulas:
$$
\int_{a}^{b} f(x) dx = F(b) - F(a)
$$
```

### 2. Keep Equations Simple

```markdown
# Good - Clear and simple
Solve: $x = \frac{-b}{2a}$

# Bad - Overly complex
Solve using quadratic formula:
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### 3. Add Explanations

```markdown
## Quadratic Formula

The quadratic formula solves $ax^2 + bx + c = 0$:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

**Example:**
For $x^2 - 5x + 6 = 0$ (where $a=1, b=-5, c=6$):

$$
x = \frac{5 \pm \sqrt{25 - 24}}{2} = \frac{5 \pm 1}{2}$$

So $x = 3$ or $x = 2$.
```

### 4. Use Consistent Notation

```markdown
# Good - Consistent notation
Let $f(x)$ be a function, then $f'(x)$ is its derivative.

# Bad - Inconsistent notation
Let $f(x)$ be a function, then $g(x)$ is its derivative.
```

### 5. Test Rendering

```markdown
# Test on different platforms
Equation: $E = mc^2$

# Check for rendering issues
- Test on GitHub, GitLab, your documentation platform
- Verify accessibility with screen readers
- Check mobile rendering
```

## Common Math Mistakes

### Syntax Errors

```markdown
# Bad - Unclosed braces
$\frac{a}{b$

# Good - Proper syntax
$\frac{a}{b}$
```

### Ambiguous Parentheses

```markdown
# Bad - Unclear grouping
$\frac{a + b}{c + d}$

# Good - Clear grouping
$\frac{a+b}{c+d}$
```

### Missing Dolar Signs

```markdown
# Bad - Not rendered as math
E = mc^2

# Good - Proper dollar signs
$E = mc^2$
```

## FAQ

### What platforms support LaTeX in markdown?

GitHub, GitLab, Obsidian, Notion, and most documentation platforms support math. Some require specific delimiters like `$` or `$$`.

### Should I use inline or display math?

Use inline math for short equations in sentences. Use display math for complex formulas, integrals, or equations that need to stand alone.

### Can I mix math and text in markdown?

Yes, you can use inline math within sentences: "The formula $E = mc^2$ describes energy conversion."

### What's the difference between `$` and `$$` delimiters?

Single dollar signs `$equation$` render inline math within paragraphs. Double dollar signs `$$equation$$` render display math centered on its own line.

### How do I escape dollar signs in markdown?

To display dollar signs literally, use backticks: `` `$10`` renders as $10.

### Can I use custom math macros?

Yes, you can define custom macros using `ewcommand` in MathJax or custom functions in your math renderer configuration.

## Summary

**Math in Markdown:**

- **Inline math:** `$equation$` for simple equations
- **Display math:** `$$equation$$` for complex formulas
- **LaTeX syntax:** Comprehensive mathematical notation
- **Supported platforms:** GitHub, GitLab, Obsidian, Notion

**Common Operations:**

- **Arithmetic:** $+, -, \times, /, ^$
- **Fractions:** $\frac{a}{b}$
- **Summation:** $\sum_{i=1}^{n} x_i$
- **Integration:** $\int f(x) dx$
- **Matrices:** $\begin{bmatrix} \end{bmatrix}$

**Best Practices:**

- Choose appropriate math type (inline vs display)
- Keep equations simple and clear
- Add explanations and examples
- Use consistent notation
- Test rendering on target platforms
- Use proper spacing and grouping

**Math Renderers:**

- **KaTeX:** Fast, lightweight, web-based
- **MathJax:** Feature-rich, widely supported
- **Platform-specific:** GitHub Math, GitLab Math

[Try Math in Markdown Visualizer](/) — Free editor with math/LaTeX support and live preview.

**Data sources:** KaTeX documentation, MathJax documentation, LaTeX math notation guide, industry math documentation best practices (2025-2026).
