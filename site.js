/* ============================================================
   AMERICAN MADE GAMES — SHARED SCRIPTS
   Loaded at the end of every page.
   ============================================================ */

/* ---------- Copy-to-clipboard ----------
   <button class="copy-btn" data-copy="text to copy">Copy</button>
   placed inside a .copy-email box next to a .copy-email__addr. */
document.querySelectorAll('.copy-btn').forEach(function (btn) {
  const text = btn.dataset.copy;

  function showResult(ok) {
    btn.textContent = ok ? 'Copied!' : 'Select & copy';
    if (!ok) {
      // Copying failed: highlight the address so it can be copied by hand
      const addr = btn.parentNode.querySelector('.copy-email__addr');
      const range = document.createRange();
      range.selectNodeContents(addr);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
    setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
  }

  // For older browsers and non-HTTPS pages without navigator.clipboard
  function legacyCopy() {
    try {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(area);
      showResult(ok);
    } catch (e) {
      showResult(false);
    }
  }

  btn.addEventListener('click', function () {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { showResult(true); }, legacyCopy);
    } else {
      legacyCopy();
    }
  });
});

/* ---------- Popup dialogs ----------
   <button data-open-dialog="some-id">  opens <dialog id="some-id">
   <button data-close-dialog>           closes the dialog it sits in
   Clicking the dimmed area outside a dialog also closes it. */
document.querySelectorAll('[data-open-dialog]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.getElementById(btn.dataset.openDialog).showModal();
  });
});

document.querySelectorAll('[data-close-dialog]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('dialog').close();
  });
});

document.querySelectorAll('dialog').forEach(function (dialog) {
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });
});
