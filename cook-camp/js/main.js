// $('.slick-area').slick({
//   arrows: false,
//   slidesToShow: 4,
//   centerMode: true,
//   responsive: [
//   {
//   breakpoint: 768,
//   settings: {
//   centerPadding: '50px',
//   slidesToShow: 1
//   }
//   }
//   ]
//   });
$(function(){
  $('.slick-area').slick({
    arrows: false,
    autoplay:true,
    pauseOnFocus: false,
    centerMode: true,
    slidesToShow: 3,
    autoplaySpeed: 1500,
    responsive: [
        {
        breakpoint: 400,
        settings: {
        slidesToShow: 2
        }
        }
        ]
  });
});