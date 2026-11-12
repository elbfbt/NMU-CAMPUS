# Upload this folder's CONTENTS to the ROOT of your GitHub repo

This is the already-built static PWA. Do NOT upload the source project for this method.

## GitHub repo root should look like:

index.html
manifest.webmanifest
sw.js
_headers
_redirects
assets/
data/
icons/

## Render Static Site settings

Build Command:      (leave empty)
Publish Directory:  .

If Render asks for a directory, use a single dot: .

Do NOT use dist for this method. There is no dist folder here; the built files are already at the root.

## Important

- The repo root must contain index.html directly, not inside nmu-campus/ or dist/.
- Keep the folders assets/, data/, and icons/ intact.
- After deploying, open /data/campus.json and /sw.js on your Render URL to verify.
