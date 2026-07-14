# Portfolio Update — What's Inside & How to Use It

## Files
- `index.html` — redesigned homepage (professional / resume-style theme)
- `style.css` — new design system (navy + brass palette, serif + mono type)
- `script.js` — unchanged logic (sticky nav, typing effect, carousel) — untouched, still works with the new markup
- `project.html`, `project1.html`, `project2.html`, `project3.html`, `project4.html` — redesigned case-study pages, one per project
- `projects-data.js` — **the only file you need to edit** to add each project's PDF and YouTube link
- `project-resources.js` — reads `projects-data.js` and builds the "View PDF" / "Watch demo" buttons automatically

## How to add your PDFs and YouTube links
Open `projects-data.js`. You'll see one entry per project:

```js
vcrush: {
    pdf: "",
    video: ""
},
```

- **pdf**: paste a link to a PDF. Easiest option — upload the PDF into your GitHub repo (e.g. in a new `assets/` folder) and reference it like `"assets/vcrush-report.pdf"`. You can also link an external PDF URL.
- **video**: paste the full YouTube URL, e.g. `"https://www.youtube.com/watch?v=abcd1234XYZ"`.

Leave either field as `""` and that project page will simply show a "coming soon" button instead of breaking — so you can fill these in gradually, project by project.

The project keys already match your eight current projects:
| Key | Project |
|---|---|
| `vcrush` | V-Crush Oil website |
| `crm` | CRM for Marwadi University |
| `chatapp` | Chat application |
| `mooc` | MOOC Android app |
| `musicplayer` | Speech-based music player |
| `omds` | Online Medical Diagnosis System |
| `lungdisease` | Lung Disease Detection from X-Ray Images |
| `olp` | OLP-forStudents (WordPress learning platform) |

## New: OLP-forStudents
Added as `project7.html`, with a homepage card. This project came with a project-review PDF and a demo
**video file** rather than a YouTube link, so:
- **`assets/OLP-forStudents-Project-Review.pdf`** — wired up as the "View project PDF" button.
- **`assets/olp-forstudents-demo.mp4`** — your recorded demo, embedded directly on the page using a
  native HTML5 video player (with its own play/pause/fullscreen controls), and the "Watch demo video"
  button opens the same file.

**Note on the video file:** at ~70 MB, it's within GitHub's per-file limit (100 MB) so it will upload and work
fine, but it will make your repo heavier and may load a little slowly for visitors on slower connections.
If you'd rather keep things lightweight, uploading it to YouTube (unlisted is fine) and pasting that link
into `projects-data.js` instead works exactly the same way — the system supports both a YouTube link
or a local video file in the same `video` field, and picks the right player automatically.

## New: Lung Disease Detection from X-Ray Images
Added as `project6.html`, with a homepage card. This one already had both a PDF and a YouTube link:
- **`assets/Lung-Disease-Detection-Research-Review.pdf`** — your research paper review, wired up as
  the "View project PDF" button.
- **Video** — your YouTube link is already set in `projects-data.js`, so the demo video is embedded
  directly on the page as well as linked via the "Watch demo" button.

## New: Online Medical Diagnosis System (OMDS)
This project has been added as `project5.html`, with a card on the homepage carousel. Since you had
your project report PDF but no YouTube video yet:
- **`assets/OMDS-Project-Report.pdf`** — your uploaded project report, already wired up as the "View
  project PDF" button on `project5.html` (set in `projects-data.js`).
- **`images/omds-flowchart.png`** and **`images/omds-sequence-diagram.png`** — the two diagrams from
  your report, embedded directly on the page to illustrate how the system works.
- The video button will automatically show "Demo video coming soon" until you add a YouTube link for
  `omds` in `projects-data.js` — no page edits needed later, just that one line.

Make sure to upload the new `assets/` and the two new `images/` files into your repo alongside the rest.

## Deploying to your existing GitHub Pages repo
1. Replace the old `index.html`, `style.css`, `script.js`, and `project*.html` files in your `Portfolio` repo with these new versions (now including `project5.html` for OMDS).
2. Add the two new script files, `projects-data.js` and `project-resources.js`, to the repo root (same folder as `index.html`).
3. Your existing `images/` folder doesn't need to change for the first five projects — those pages still reference `images/Pratham.jpeg` and `images/Pratham.jpg`, which you already have live. For OMDS, add the two new files from the `images/` folder in this download (`omds-flowchart.png`, `omds-sequence-diagram.png`) into your repo's `images/` folder.
4. Add a new `assets/` folder to your repo root and upload `OMDS-Project-Report.pdf`, `Lung-Disease-Detection-Research-Review.pdf`, `OLP-forStudents-Project-Review.pdf`, and `olp-forstudents-demo.mp4` into it.
5. Commit and push — GitHub Pages will rebuild automatically at your existing link:
   https://pratham161000.github.io/Portfolio/

## What changed in the design
- New palette: deep navy + warm brass accent, warm paper background — a subtler, more "CV/letterhead" feel than the old crimson theme.
- Typography: a serif display face (headings) paired with a clean sans body face and a monospace utility face for labels — evokes a printed résumé.
- New hero: a letterhead-style profile card next to your name/title, with quick contact rows (email, phone, LinkedIn, location).
- Section headers now use small-caps "eyebrow" labels with a hairline rule, like document section headers.
- Skills section redesigned as a slim two-column proficiency chart.
- Every project page now has a consistent structure: title + tags, description, an optional embedded video preview, and PDF/video resource buttons.

## Next step
Send me the PDFs (project reports, documentation, etc.) and YouTube links whenever you have them, and I'll drop them straight into `projects-data.js` for you — or you can add them yourself following the steps above.
