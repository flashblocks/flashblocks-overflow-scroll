# Flashblocks Overflow Scroll

A WordPress block that wraps any content in a horizontal scroll container. When inner content exceeds the container width, it becomes scrollable with optional left/right arrow indicators.

## Block Info

- **Name:** `flashblocks/overflow-scroll`
- **Category:** Layout
- **Plugin path:** `wp-content/mu-plugins/flashblocks-overflow-scroll`
- **Build:** `npm run build` (uses `wp-scripts build --blocks-manifest`)
- **Dev:** `npm start`

## Architecture

This is a **static block** (save.js, no render.php). All markup is stored in post content.

### File Structure

```
src/flashblocks-overflow-scroll/
  block.json    — Block metadata and attributes
  index.js      — Block registration
  edit.js       — Editor component (InnerBlocks container)
  save.js       — Frontend markup (InnerBlocks + arrow buttons)
  view.js       — Frontend JS (overflow detection, arrow click-to-scroll)
  style.scss    — Shared styles (frontend + editor)
  editor.scss   — Editor-only styles
```

### Rendered HTML Structure

```html
<div class="wp-block-flashblocks-overflow-scroll">
  <button class="...overflow-scroll__arrow ...overflow-scroll__arrow--left" />
  <div class="...overflow-scroll__content" style="min-width: {minWidth}">
    <!-- InnerBlocks content here -->
  </div>
  <button class="...overflow-scroll__arrow ...overflow-scroll__arrow--right" />
</div>
```

### JS State Classes (applied to outer div by view.js)

| Class          | Meaning                                    |
|----------------|--------------------------------------------|
| `.has-overflow` | Content is wider than container — arrows visible |
| `.is-at-start`  | Scrolled to left edge — left arrow hidden  |
| `.is-at-end`    | Scrolled to right edge — right arrow hidden |

## Attributes

| Attribute  | Type   | Default | Description |
|------------|--------|---------|-------------|
| `minWidth` | string | `""`    | CSS min-width on the `__content` div (e.g. `800px`, `60rem`). Prevents inner content from shrinking below this width, ensuring overflow scroll activates. |

## Block Supports

- Alignment: wide, full
- Color: background, gradients, text
- Spacing: padding, margin (top/bottom)

## Theme Customization

Arrow appearance is fully controlled via CSS custom properties. Override these in your theme:

```css
:root {
  /* Arrow icons — data URI SVGs applied via mask-image */
  --fos-arrow-left: url("data:image/svg+xml,...");
  --fos-arrow-right: url("data:image/svg+xml,...");

  /* Arrow styling */
  --fos-arrow-size: 32px;
  --fos-arrow-color: currentColor;
  --fos-arrow-bg: rgba(255, 255, 255, 0.9);
  --fos-arrow-bg-hover: rgba(255, 255, 255, 1);
  --fos-arrow-offset: 8px;
  --fos-arrow-border-radius: 50%;
  --fos-arrow-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}
```

Arrow icons use `mask-image` so `--fos-arrow-color` controls the icon fill color. To swap icons, set `--fos-arrow-left` / `--fos-arrow-right` to your own encoded SVG `url()` values.

## Dev Notes

- Arrows are `<button>` elements rendered in save.js — they exist in saved post content
- view.js runs on DOMContentLoaded, queries all instances, attaches scroll/resize listeners
- Click-to-scroll amount is 75% of the visible container width, with smooth scrolling
- Scrollbar is hidden via `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`
- Since this is a static block, changing the save markup requires block recovery in the editor for existing instances
