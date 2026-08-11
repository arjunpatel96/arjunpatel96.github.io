# arjunpatel96.github.io → [arjun.live](https://arjun.live)

One-page personal site: condensed CV + full PDF, complete publication list,
consulting services, and links to COBRAme.org / dissertation / profiles.

**Plain static HTML — no Jekyll, no build step, no JavaScript.** Edit the files,
commit, push; GitHub Pages serves them directly. There is nothing to compile.

## Layout

```
index.html            all page content (every section is an in-page anchor)
styles.css            all styling, incl. @font-face for the self-hosted fonts
404.html              custom not-found page
robots.txt            allows everything, points at the sitemap
sitemap.xml           single-URL sitemap
CNAME                 arjun.live
assets/
  Arjun_Patel_CV.pdf  the downloadable CV
  arjun.jpg           headshot, 420x420 (displayed at 140px, 3x DPR)
  og-image.png        1200x630 social preview card
  og-template.html    source for og-image.png — see "Regenerating" below
  favicon.svg
  fonts/              self-hosted IBM Plex Sans (variable) + Mono woff2
```

## Deployment

GitHub Pages, **Settings → Pages**: Source `Deploy from a branch`, branch
**`master`** / root. Custom domain `arjun.live` with *Enforce HTTPS* enabled.

DNS for the apex domain — **A** records for `@`:

```
185.199.108.153   185.199.109.153   185.199.110.153   185.199.111.153
```

and a **CNAME** for `www` → `arjunpatel96.github.io`.

## Previewing locally

```bash
python3 -m http.server 8000
# then open http://127.0.0.1:8000/
```

`http.server` sends no `Cache-Control`, so browsers will happily reuse a cached
`styles.css` and the page looks unchanged after an edit. **Hard-refresh**
(`Ctrl+Shift+R`), or keep DevTools open with *Disable cache* ticked. The same
applies to arjun.live right after a push.

## Common edits

**Update the CV** — replace `assets/Arjun_Patel_CV.pdf`, keeping the filename so
the two download links keep working.

**Change a nav link** — the nav exists twice, in `index.html` and `404.html`
(the 404 copy uses absolute `/#…` hrefs). Edit both or they drift apart.

Below 900px the links collapse behind a hamburger, driven purely by CSS
`:target` — no JavaScript. The two 0×0 `.menu-anchor` elements at the top of
`<header>` are the toggle targets: the ☰ link points at `#menu` (which opens
the menu via `#menu:target ~ .nav .navlinks`) and the ✕ points at
`#menu-closed`, which is styled by nothing and so just closes it. Both anchors
are `position:fixed` on purpose — a target in normal flow makes the browser
scroll the page out from under the reader. Tapping any nav link changes the
hash to `#about`/`#cv`/etc., which un-targets `#menu`, so the menu closes
itself.

**Add a publication** — publications are inline HTML in `index.html` under
`<div class="pubs">`. Copy an existing `<li>` and fill in the four parts:

```html
<li><span class="pub-authors">Author A; <strong>Patel A</strong>; …</span>
<span class="pub-title"><a class="pub-link" href="https://doi.org/10.…"
  target="_blank" rel="noopener noreferrer">Title.</a></span>
<span class="pub-venue"><strong>Journal</strong> vol(issue), pages.</span></li>
```

Every title links to its DOI — keep that up.

**Adding a new year** also needs a colour stop in `styles.css`. The publication
rail is a gradient that runs orange (recent) to blue (older), and each
`#pub-YYYY` heading has a matching colour. A new year without one renders full
orange and breaks the gradient.

## Regenerating the social card

`assets/og-image.png` is what LinkedIn/Slack/X show when the site is shared. It
is rendered from `assets/og-template.html` so it stays in sync with the site's
fonts and palette:

```bash
python3 -m http.server 8000
google-chrome --headless --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --virtual-time-budget=7000 \
  --screenshot=assets/og-image.png \
  http://localhost:8000/assets/og-template.html
```

## Design notes

Committed dark theme — there is deliberately no light mode. The palette is a
flux map: warm near-black ground, **orange** (`#ff7a1a`) as the primary/hot pole,
**blue** (`#35a9ff`) as the cold pole. Blue is reserved for the `↗` glyph, which
marks links that leave the site. Type is IBM Plex Sans + Mono, self-hosted, with
mono carrying years and citation metadata.
