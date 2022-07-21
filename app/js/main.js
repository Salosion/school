$(function () {

  $('.reviews__items').slick({
    centerMode: true,
    centerPadding: '125px',
    slidesToShow: 2.3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: '<img class="next-arrow" src="images/icons/next-arrow.svg">',
    prevArrow: '<img class="prev-arrow" src="images/icons/prev-arrow.svg">',
  //   responsive: [
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         centerPadding: '10px',
  //       }
  //     }
  // ]
  });

});