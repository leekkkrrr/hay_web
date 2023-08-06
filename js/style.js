// scroll
$(window).scroll(function () {
  let Cscroll = $(this).scrollTop();
  $(".scroll").text(Cscroll);

  if (Cscroll >= $("section:nth-child(1)").offset().top - 120) {
    $(".best_rank ").addClass("show").siblings().removeClass("show");
  }
});

$(window).scroll(function () {
  let Cscroll = $(this).scrollTop();
  $(".scroll").text(Cscroll);

  if (Cscroll >= $("section:nth-child(2)").offset().top - 150) {
    $(".product>div").addClass("show").siblings().removeClass("show");
  }
});
