/* ============================================================
   AMERICAN MADE GAMES — NEWS & UPDATES
   This one file feeds both the homepage and the News page.

   To post an update: copy one { ... } block, paste it at the
   TOP of the list (newest first), and change the text.
     date:  shown as written, e.g. "Oct 22, 2026"
     tag:   a short label, e.g. "Highway Trivia", "Torchlight", "Studio"
     title: one line
     body:  a sentence or two (simple HTML like <a href="...">links</a> is fine)

   The homepage shows the newest 3. The News page shows everything.
   ============================================================ */
const NEWS = [
  {
    date: "Oct 22, 2026",
    tag: "Studio",
    title: "Games and apps now have their own sections",
    body: "With more projects on the way, the site now lists games and apps separately. Torchlight has moved to the new American Made Apps section."
  },
  {
    date: "Oct 21, 2026",
    tag: "Highway Trivia",
    title: "No Android version is planned",
    body: "Google's new identity verification requirement for app developers conflicts with how this studio works, so Highway Trivia will stay on iOS unless those rules change."
  },
  {
    date: "Oct 20, 2026",
    tag: "Torchlight",
    title: "Torchlight is live",
    body: "A Dungeon World character sheet that runs right in your browser. <a href=\"https://torchlight.americanmadegames.com\" target=\"_blank\" rel=\"noopener\">Try it here</a>. An iOS version is coming soon."
  }
];

/* ---------- No need to edit below this line ---------- */
function renderNews(containerId, limit) {
  const feed = document.getElementById(containerId);
  if (!feed) return;
  const items = typeof limit === "number" ? NEWS.slice(0, limit) : NEWS;
  items.forEach(function (item) {
    const el = document.createElement("article");
    el.className = "news-item";
    el.innerHTML =
      '<div class="news-meta"><span class="news-tag">' + item.tag + "</span><span>" + item.date + "</span></div>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + item.body + "</p>";
    feed.appendChild(el);
  });
}
