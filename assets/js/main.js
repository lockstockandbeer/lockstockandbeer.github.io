function scroll_to_top() {
  window.scrollTo(0, 0);
}

/* curator-feed-default-layout */
(function() {
  galleryStart();
})();

function galleryStart() {
  var i,
    e,
    d = document,
    s = "script";
  i = d.createElement("script");
  i.async = 1;
  i.src =
    "https://cdn.curator.io/published/bd01b920-94db-41f2-a5f7-75158ec15ce6.js";
  e = d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
}

function fixModalStuff() {
  $('#foodMenu').remove();
  $('#drinksMenu').remove();
  $('.modal-backdrop').remove();
  $('body').removeClass('modal-open');
}