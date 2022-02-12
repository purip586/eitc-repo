"use strict";

//hide sidenav on screen touch
window.onload = function () {
  $(".hero-sec")(function (e) {
    if ($("body").hasClass("layout-fullwidth offcanvas-active")) {
      $("body").removeClass("layout-fullwidth offcanvas-active");
      $("body").toggleClass("undefined");
    }
  });
};