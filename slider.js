$(function () {
  console.log("hi");
  let slider = setInterval(swapImages, 1000);
  function swapImages() {
    var active = $(".active");
    var next =
      $(".active").next().length > 0
        ? $(".active").next()
        : $(".slider-container div:first");
    active.removeClass("active");
    next.addClass("active");
  }
  $(".stop-btn").on("click", () => {
    clearInterval(slider);
  });

  $(".task2").on("click", (e) => {
    if (e.target.classList.contains("img")) {
      $(e.target).next(".content").slideToggle("slow");
    }
  });
});
