// Shared focus-visible ring treatment. DESIGN.md §4 Inputs and forms: "Focus
// must be unmistakable" — this is the one non-atmospheric use of the glow.
// Navbar.tsx and Footer.tsx each defined an identical local `FOCUS_RING`
// constant; OnsaleRow.tsx inlined the same pattern with a different
// ring-offset colour. Centralised here so new call sites reuse it rather
// than hand-copying a third version.
//
// Navbar.tsx keeps its own local literal rather than importing this:
// scripts/check-design.mjs greps Navbar.tsx's own source text for
// `focus-visible:ring-brand`, so re-exporting through an import would make
// that assertion blind to a real regression there. Footer.tsx, OnsaleRow.tsx
// and the app-surface pages are not checked that way and import from here.
//
// Two variants because the offset colour has to match the ground the
// focused element sits directly on top of (a visible ring gap needs to
// blend into what's behind it, not into whatever's nested inside the
// element itself):
// - FOCUS_RING_ON_NAVY: for elements on Concourse Navy (Navbar, Footer).
// - FOCUS_RING_ON_DEEP_VOID: for elements on the Deep Void page ground —
//   the app surface pages (dashboard, watchlist, event detail) and
//   OnsaleRow, which sits directly on that ground with no wrapping border.
// These carry NO border-radius of their own, deliberately. An unconditional
// `rounded-sm` here silently overrode every element that declared its own
// radius: Tailwind v4 emits `.rounded-sm` after `.rounded-[6px]` in the
// stylesheet, and at equal specificity the later rule wins — so elements
// mandated at 6px rendered at 4px permanently, not just while focused.
// Elements with no radius of their own add `rounded-sm` at the call site.
export const FOCUS_RING_ON_NAVY =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy';

export const FOCUS_RING_ON_DEEP_VOID =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-deep-void';
