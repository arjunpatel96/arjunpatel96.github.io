# arjunpatel96.github.io (GitHub Pages)

One-page, modern tech-clean personal site for:
- CV (condensed on-page + full PDF download)
- Publications (full list)
- Consulting / independent contracting services
- Links to COBRAme.org + dissertation + profiles

## Quick start

1. Create a repo named **arjunpatel96.github.io** (public).
2. Upload the contents of this folder to the repo root.
3. In GitHub: **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / root
4. Your site will appear at:
   - https://arjunpatel96.github.io

## Point arjunpatel.io (Squarespace domains) to GitHub Pages

In your domain DNS settings, add:

### Apex domain via A records
Set **A** records for `@` to:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Set **CNAME** for `www` to:
- `arjunpatel96.github.io`

### GitHub Pages Custom Domain
In GitHub: **Settings → Pages → Custom domain**
- enter `arjunpatel.io`
- enable **Enforce HTTPS** once it becomes available

## Updating your CV
Replace:
- `assets/Arjun_Patel_CV.pdf`

Keep the filename the same so links don’t break.

## Editing content
Main content:
- `index.html`

Styling:
- `styles.css`
