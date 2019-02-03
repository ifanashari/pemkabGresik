var myVideo = document.getElementById("explore");

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    }
  }
});

var navCaunter = 0;
$(".menu").on("click", () => {
  if ($(window).width() < 768) {
    if (navCaunter < 1) {
      $(".nav-content").css({
        display: "flex"
      });
      navCaunter = 1;
    } else {
      $(".nav-content").css({
        display: "none"
      });
      navCaunter = 0;
    }
  }
});

$(window).scroll(() => {
  if ($(window).width() > 768) {
    if ($(window).scrollTop() > 0) {
      $(".navigation-container").css({
        top: "0"
      });
    } else {
      $(".navigation-container").css({
        top: "5vh"
      });
    }
  }
});

var wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
});
wow.init();
