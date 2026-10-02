(function () {
  var btn = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  var icon = btn.querySelector("i");
  var label = btn.querySelector(".menu-label");

  function setOpen(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
    menu.classList.toggle("hidden", !open);
    if (icon) {
      icon.classList.toggle("fa-bars", !open);
      icon.classList.toggle("fa-xmark", open);
    }
    if (label) label.textContent = open ? "Close" : "Menu";
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      btn.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024 && btn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
    }
  });
})();
