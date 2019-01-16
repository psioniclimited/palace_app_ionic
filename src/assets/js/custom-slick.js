$(document).on('ready', function() {
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '65px',
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});
