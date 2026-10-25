(function () {
  var DEMO_TEL = "tel:07888867893";

  function normalizeTel(href) {
    if (!href) return "";
    return href.replace(/\s/g, "").toLowerCase();
  }

  document.addEventListener("click", function (e) {
    if (typeof window.fbq !== "function") return;
    var link = e.target.closest("a[href]");
    if (!link) return;
    var href = link.getAttribute("href");
    if (normalizeTel(href) === DEMO_TEL) {
      fbq("track", "Contact");
      return;
    }
    var text = (link.textContent || "").replace(/\s+/g, " ").trim();
    if (text === "Start 30 days free") {
      fbq("track", "Lead");
    }
  });
})();
