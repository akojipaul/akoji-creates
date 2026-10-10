# Akoji Creates portfolio

Static website with 5 videos, 8 graphic designs, service descriptions, project filters, accessible project dialogs, and WhatsApp enquiries.

## Publish with GitHub Pages
Upload the contents of this folder to your GitHub repository so `index.html` is at the repository root. In repository Settings → Pages, choose deployment from a branch, select your branch and the root folder, and save. No npm installation or build step is needed. The site uses relative asset paths for repository-based hosting.

## Update your work
Edit `projects.js`. Add an object with `type`, `title`, `label`, and `description`. Videos need a YouTube `id`; images need an `image` path. Put new images in `assets/`. Use `video`, `design`, or `thumbnail` for the type. Copy an existing entry as a starting point.

## Contact and services
The email, WhatsApp number, service text, and About copy are in `index.html`. The WhatsApp enquiry destination is also in `app.js`. No messages are stored by the site; visitors review and send their brief in WhatsApp. A mailto link offers an email alternative.

## Notes
When opening index.html directly from disk, videos open on YouTube in a new tab. YouTube requires website identification for embedded players and may show Error 153 in a file:// preview. On an HTTP(S) website, the site uses embedded playback with an explicit referrer policy and a direct YouTube fallback link. Hosted playback still needs checking after deployment.

The SVG logo is a web adaptation of the approved concept. Google Fonts supplies optional typography with local sans-serif fallbacks. Video preview images and players load from YouTube; videos play only after a visitor clicks. YouTube may restrict embedded playback, so every video dialog includes a direct YouTube link. Internet connectivity is needed for these external resources.

No GitHub repository or live deployment has been created by this delivery. Project titles are portfolio descriptions based on supplied briefs, not verified YouTube titles. No client results, testimonials, or UGC partnerships have been invented.
