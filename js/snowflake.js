$(window).on('scroll', function() {
  $(".snowflake").css("transform", "rotate(" + $(window).scrollTop()/3 + "deg)");
});
