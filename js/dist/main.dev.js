"use strict";

AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  //autohide navbar on scroll
  el_autohide = document.querySelector('.autohide');
  navbar_height = document.querySelector('.navbar').offsetHeight;

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      var scroll_top = window.scrollY;

      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove('scrolled-down');
        el_autohide.classList.add('scrolled-up');
      } else {
        el_autohide.classList.remove('scrolled-up');
        el_autohide.classList.add('scrolled-down');
      }

      last_scroll_top = scroll_top;
    });
  } //navbar toggler 


  var bars = document.querySelector(".bars");
  var navMenu = document.querySelector(".nav-menu");
  bars.addEventListener("click", function (e) {
    navMenu.classList.toggle('active');
    bars.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(function (n) {
    return n.addEventListener('click', function () {
      bars.classList.remove('active');
      navMenu.classList.remove('active');
    });
  }); //hide sidenav on screen touch for mobile/tablet

  document.querySelector('.hero-sec').addEventListener('click', function () {
    hideNavMenu();
  });

  function hideNavMenu() {
    bars.classList.remove('active');
    navMenu.classList.remove('active');
  }

  window.addEventListener('scroll', function () {
    bars.classList.remove('active');
    navMenu.classList.remove('active');
  }); //show active nav-link while active

  var navLink = navMenu.getElementsByClassName("nav-link"); // Loop through the buttons and add the active class to the current/clicked button

  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  } //testimonial carasoul


  var msg = document.getElementById('msgbox');
  var div = document.querySelectorAll('#msgbox div');
  var idx = 0;

  function run() {
    idx++;

    if (idx > div.length - 1) {
      idx = 0;
    }

    msg.style.transform = "translateX(".concat(-idx * 500, "px)");
  }

  setInterval(run, 5000);
}); //subtitle typing animation

function setupTypewriter(t) {
  var HTML = t.innerHTML;
  t.innerHTML = "";
  var cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = 100,
      tempTypeSpeed = 0;

  var type = function type() {
    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;

      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }

    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }

    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
        tempTypeSpeed = 0;
      } else {
        tempTypeSpeed = Math.random() * typeSpeed + 50;
      }

      t.innerHTML += HTML[cursorPosition];
    }

    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = Math.random() * typeSpeed + 50;
      writingTag = false;

      if (tagOpen) {
        var newSpan = document.createElement("span");
        t.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }

    cursorPosition += 1;

    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
    }
  };

  return {
    type: type
  };
}

var typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();