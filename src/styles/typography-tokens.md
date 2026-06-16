# Editorial Typography Tokens

Shared typography utilities for all service-page templates. Defined as
Tailwind v4 `@utility` classes in `src/styles.css`. Use these instead of
ad-hoc `font-display text-3xl leading-[1.15] …` combos so every service
page stays visually consistent.

| Class         | Role                                  | Family   | Size              | Line  | Tracking | Weight |
| ------------- | ------------------------------------- | -------- | ----------------- | ----- | -------- | ------ |
| `t-h1`        | Hero title                            | display  | 40 → 72 (fluid)   | 1.05  | -0.02em  | 400    |
| `t-h2`        | Section heading                       | display  | 30 → 36 (fluid)   | 1.15  | -0.015em | 400    |
| `t-h3`        | Card / sub-section heading            | display  | 20                | 1.35  | -0.005em | 400    |
| `t-italic`    | Accent italic inside H1/H2 or quotes  | display  | inherit           | inh.  | -0.005em | 400    |
| `t-quote`     | Pull-quote (blockquote `<p>`)         | display  | 24 → 32 (fluid)   | 1.25  | -0.005em | 400 i  |
| `t-numeral`   | Decorative 01/02/03 numerals          | display  | inherit           | 1     | —        | 400 i  |
| `t-lead`      | Lead paragraph under heading          | serif    | 18                | 1.75  | —        | 400    |
| `t-body`      | Standard paragraph                    | serif    | 16                | 1.75  | —        | 400    |
| `t-body-sm`   | Card / list paragraph                 | serif    | 14                | 1.7   | —        | 400    |
| `t-eyebrow`   | Mono uppercase label above heading    | mono     | 11.2              | 1.4   | 0.28em   | 500    |
| `t-cta`       | Button / link label (uppercase)       | sans     | 14                | 1     | 0.22em   | 500    |
| `t-meta`      | Caption / fine-print                  | serif    | 12                | 1.6   | —        | 400    |

## Rules

- Colors stay separate — pair tokens with semantic color classes
  (`text-foreground`, `text-muted-foreground`, `text-brand-red-ink`, …).
- Layout/spacing stays separate — apply margins (`mt-*`, `mb-*`) on the
  element, never bake them into the token.
- Do **not** override `font-size` / `line-height` / `letter-spacing` on a
  token. If a screen needs a different scale, create a new token.
- For accent italic inside a heading wrap only the italic words:
  `<h2 className="t-h2">… <span className="t-italic text-brand-red-ink">accent.</span></h2>`.

## Examples

```tsx
<p className="t-eyebrow text-muted-foreground/70">TAF · Est. 2010</p>

<h1 className="t-h1 text-foreground">
  Dịch vụ{" "}
  <span className="t-italic text-brand-red-ink">kiểm toán nội bộ.</span>
</h1>

<p className="t-lead mt-8 text-muted-foreground">…</p>

<blockquote className="border-l-2 border-brand-red pl-6">
  <p className="t-quote text-foreground">Kiểm toán nội bộ là gì?</p>
  <p className="t-body mt-5 text-muted-foreground">…</p>
</blockquote>

<span className="t-numeral text-4xl text-accent-foreground/35">01</span>

<span className="t-cta text-brand-red">Xem chi tiết</span>
```
