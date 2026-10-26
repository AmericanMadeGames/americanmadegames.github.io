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
    date: "Oct 26, 2026",
    tag: "Gathered",
    title: "The Gathered beta is open",
    body: "Small group leaders can now try Gathered on iPhone through TestFlight, Apple's free app for testing new apps. <a href=\"https://testflight.apple.com/join/HFZzsk5j\" target=\"_blank\" rel=\"noopener\">Join the beta here</a>. We'd love your feedback as we get ready for the App Store."
  },
  {
    date: "Oct 23, 2026",
    tag: "Highway Trivia",
    title: "Highway Trivia's biggest update yet is almost here",
    body: "Version 1.3 gives Highway Trivia a cleaner, brighter design that follows your phone's Light and Dark Mode, with categories styled like green highway signs. A little yellow car now drives you into each round and pulls up to your results, answers react with new animations, and your score counts up at the end. It also adds new ways to go back over the questions you missed. The update will be on the App Store shortly."
  },
  {
    date: "Oct 22, 2026",
    tag: "Gathered",
    title: "Gathered beta on iOS is coming soon",
    body: "Gathered is our new free app for church small group leaders, with openers, Bible games, study notes, and prayer requests in one place. No ads, no accounts, no data collected. The iOS beta opens soon through TestFlight. <a href=\"index.html#apps\">Sign up for beta testing</a> to get an invite."
  },
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
