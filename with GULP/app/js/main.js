$(function(){

   $('.partner__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 2,
           }
         },
         {
            breakpoint: 630,
            settings: {
              slidesToShow: 1,
            }
         }
      ]
    });


    $('input[type="checkbox"]').styler();

});