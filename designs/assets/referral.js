(function () {
  function applyReferral() {
    var referralId = window.promotekit_referral;
    if (!referralId) return false;
    document.querySelectorAll('a[href^="https://buy.stripe.com/"]').forEach(function (link) {
      var url = link.getAttribute("href");
      if (!url.includes("client_reference_id")) {
        link.setAttribute("href", url + (url.includes("?") ? "&" : "?") + "client_reference_id=" + referralId);
      }
    });
    return true;
  }
  var attempts = 0;
  var poll = setInterval(function () {
    attempts++;
    if (applyReferral() || attempts >= 40) clearInterval(poll);
  }, 500);
})();
