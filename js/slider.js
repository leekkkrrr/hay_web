var swiper = new Swiper(".newSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  freeMOdeSticky: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  observer: true
  mousewheel: true,
});

var swiper = new Swiper(".productSwiper", {
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar-horizontal",
    draggable: true,
  },
  mousewheel: true,
});



