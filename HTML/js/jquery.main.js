$(function(){
  $(".nav-link").click(function(){
    $(".border-bottom").removeClass("link-active");
    $(this).children().addClass("link-active");
  })
});