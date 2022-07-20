function scroll_to_top() {
  window.scrollTo(0, 0);
}

/* curator-feed-default-layout */
(function () {
  galleryStart();
})();

function galleryStart() {
  var i,
    e,
    d = document,
    s = "script";
  i = d.createElement("script");
  i.async = 1;
  i.charset = "UTF-8";
  i.src =
    "https://cdn.curator.io/published/bb728121-1504-47b3-9000-f068f2ee32dc.js";
  e = d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
}

function fixModalStuff() {
  $("#foodMenu").modal("hide");
  $("#drinksMenu").modal("hide");
  $("body").removeClass("modal-open");
  $(".modal-backdrop").remove();
}

document.onload = function () {
  $(".barba-container").css("visibility", "visible");
};
