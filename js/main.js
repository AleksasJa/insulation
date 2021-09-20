$(document).ready(function(){
  /*maskedinput*/
  jQuery(function($){
    $.mask.definitions["h"] = "[А-Яа-я]";
    $(".phone").mask("+7 (999) 999-99-99", {autoclear: false});
    $(".name").mask("hhh?hhhhhh", {placeholder: ""});
});

/*initialisation slider*/
$('.popup-btn').on('click', function (e) {
  e.preventDefault();
  $('.popup').show('slow');
});
$('.popup-close').on('click', function (e) {
 e.preventDefault();
 $('.popup').hide();
});
/*Feedback slider*/
$('.feedback-slider').slick({
  prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="./img/feedback/prevArrow.png"/></button>',
  nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="./img/feedback/nextArrow.png"/></button>',
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
     {
         breakpoint: 991,
          settings: {
           slidesToShow: 2,
           prevArrow: '<button class="prev arrow"></button>',
           nextArrow: '<button class="next arrow"></button>',
           slidesToScroll: 2
     }
     },
     {
         breakpoint: 767,
         settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="prev arrow"></button>',
          nextArrow: '<button class="next arrow"></button>'
     }
    }
 ]
});
/*Features slider*/
$('.features-slider').slick({
 infinite: true,
 slidesToShow: 4,
 slidesToScroll: 1,
 responsive: [
 {
     breakpoint: 991,
     settings: {
         slidesToShow: 2,
         prevArrow: '<button class="prev arrow"></button>',
         nextArrow: '<button class="next arrow"></button>',
         slidesToScroll: 2
 }
 },
 {
     breakpoint: 767,
     settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow: '<button class="prev arrow"></button>',
         nextArrow: '<button class="next arrow"></button>'
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
/*Certificate slider*/
$('.certificate-slider').slick({

  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
  {
      breakpoint: 991,
      settings: {
          slidesToShow: 2,
          prevArrow: '<button class="prev arrow"></button>',
          nextArrow: '<button class="next arrow"></button>',
          slidesToScroll: 2
      }
  },
  {
      breakpoint: 767,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="prev arrow"></button>',
          nextArrow: '<button class="next arrow"></button>'
      }
  }
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
});