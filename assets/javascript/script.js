// Side Menu 
let isActive = false;
$('.menu-touch').on('click', function () {
  if (isActive) {
    $(this).removeClass('active');
    $('.drop-menu').removeClass('menu-open');
  } else {
    $(this).addClass('active');
    $('.drop-menu').addClass('menu-open');
  }
  isActive = !isActive;
});

$('.drop-menu .menu-content ul li.btn-clique').on('click', function () {
  if (isActive) {
    $('.menu-touch').removeClass('active');
    $('.drop-menu').removeClass('menu-open');
  } else {
    $('.menu-touch').addClass('active');
    $('.drop-menu').addClass('menu-open');
  }
  isActive = !isActive;
});

$('.drop-menu .menu-content ul li .submenu li').on('click', function () {
  $('.menu-touch').removeClass('active');
  $('.drop-menu').removeClass('menu-open');
});

// Dark Light Mode Toggle
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let sunIcon = document.getElementById("sunIcon");
  let moonIcon = document.getElementById("moonIcon");

  if (element.classList.contains("dark-mode")) {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    localStorage.setItem("mode", "dark");
  } else {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
    localStorage.setItem("mode", "light");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const storedMode = localStorage.getItem("mode");
  if (storedMode === "dark") {
    document.body.classList.add("dark-mode");
    let sunIcon = document.getElementById("sunIcon");
    let moonIcon = document.getElementById("moonIcon");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
});

// Circular Progress Bar
$(document).ready(function ($) {
  function animateElements() {
    $('.progressbar').each(function () {
      let elementPos = $(this).offset().top;
      let topOfWindow = $(window).scrollTop();
      let percent = $(this).find('.circle').attr('data-percent');
      let percentage = parseInt(percent, 10) / parseInt(100, 10);
      let animate = $(this).data('animate');
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true);
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 4,
          fill: {
            color: '#55E6A5',
          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(0) + "%");
        }).stop();
      }
    });
  }

  animateElements();
  $(window).scroll(animateElements);
});

// About counter
let counted = 0;
$(window).scroll(function () {
  let oTop = $('.counter').offset()?.top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }

        });
    });
    counted = 1;
  }
});


// Testimonial Card Slider
$(function () {
  $('.testimonials_card').slick({
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  });
});
// Testimonial Card Slider End

// cursor
let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('a,button,.js-open-popup,.trigger,.share,#close,.toggle,.icon-container,#youtube,#vimeo,.link');
let mouseX = 0;
let mouseY = 0;
gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      }
    })
  }
});
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
})
cursorScale.forEach(link => {
  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
    if (link.classList.contains('small')) {
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
});
// cursor End

// gallary code
window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".gallery img")) {
    i.onclick = () => i.classList.toggle("full");
  }
});
