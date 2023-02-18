$(".img").on("mouseenter", function () {
  $("img").effect("shake", "slow");
});
// $(".img").draggable({
//   start: function () {},
//   drag: function () {},
//   stop: () => $(".img").remove(),
// });

$(".img").draggable({
  start: function () {},
  drag: function () {},
  stop: function () {},
});
$(".blackHole").droppable({
  drop: function () {
    $(".img").remove();
  },
});
