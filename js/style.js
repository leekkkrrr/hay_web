// scroll
// $(window).scroll(function () {
//   let Cscroll = $(this).scrollTop();
//   $(".scroll").text(Cscroll);

//   if (Cscroll >= $("section:nth-child(1)").offset().top - 120) {
//     $(".best_rank ").addClass("show").siblings().removeClass("show");
//   }
// });

function scrollHandler() {
  let Cscroll = $(window).scrollTop();
  $(".scroll").text(Cscroll);

  if (window.matchMedia("(max-width: 420px)").matches) {
    if (Cscroll >= $(".best").offset().top - 80) {
      $(".best_rank").addClass("show").siblings().removeClass("show");
    }
  } else {
    if (Cscroll >= $(".best").offset().top - 120) {
      $(".best_rank").addClass("show").siblings().removeClass("show");
    }
  }

  if (window.matchMedia("(max-width: 420px)").matches) {
    if (Cscroll >= $("section:nth-child(2)").offset().top - 130) {
      $(".product>div").addClass("show").siblings().removeClass("show");
    }
  } else {
    if (Cscroll >= $("section:nth-child(2)").offset().top - 150) {
      $(".product>div").addClass("show").siblings().removeClass("show");
    }
  }
}

$(window).scroll(scrollHandler);
