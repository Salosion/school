$(function () {

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__box').toggleClass('header__box--active');
  });

  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.reviews__items').slick({
    slidesToShow: 2.9,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: '<img class="next-arrow" src="images/icons/next-arrow.svg">',
    prevArrow: '<img class="prev-arrow" src="images/icons/prev-arrow.svg">',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
        }
      }
    ]
  });

});