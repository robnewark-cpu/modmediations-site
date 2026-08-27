(function () {
  var btn = document.getElementById("mobile-menu-btn");
  var menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    var open = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", open);
    btn.setAttribute("aria-expanded", open ? "false" : "true");
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !btn.contains(e.target) && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();
