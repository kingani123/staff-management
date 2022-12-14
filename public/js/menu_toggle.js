$(document).ready(function(){
  $(".body_left_push").click(function(){
    $(".body_left").toggleClass("active");
    $(".body_left_push").toggleClass("menu_open");
  });
});