$(document).ready(function(){
  /*maskedinput*/
  /* jQuery(function($){
    $.mask.definitions["h"] = "[А-Яа-я]";
    //$.mask.definitions['g'] = "[A-Fa-f0-9А-Яа-я]";
    $(".phone").mask("+7 (999) 999-99-99", {autoclear: false});
    $(".name").mask("hhh?hhhhhh", {placeholder: ""});
    $(".email").mask("***?@****?.**?", {placeholder: ""});
}); */

/*initialisation slider*/
$('.popup-btn').on('click', function (e) {
  e.preventDefault();
  $('.popup').toggleClass('open');
});
$('.popup-close').on('click', function (e) {
 e.preventDefault();
 $('.popup').toggleClass('open');
});
$('.popup-ok_close').on('click', function (e) {
  e.preventDefault();
  $('.popup-ok').toggleClass('open');
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
/*Modal form*/
$('.modal_form').validate({
    errorClass: "input-error",
    rules: {
      // simple rule, converted to {required:true}
      modal_username: "required",
      modal_userphone: "required"
        },
    messages: {
         modal_username: "*Напишите ваше имя",
         modal_userphone: "*В этом поле укажите ваш телефон в формате: +7(XXX)XXX-XX-XX",
         modal_usertext: "*В этом поле напишите ваше сообщение"
        },
      submitHandler: function(form) {
        var formData = form;
        var formData = new FormData(formData);
        $.ajax({
        url: "./php/modal.php",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (msg) {
                  $(form)[0].reset(),
                  console.log(msg);
                  $('.popup').toggleClass('open');
                  $('.popup-ok').toggleClass('open');
        } 
      });
      return false;
    }
  });
$('.value_form').validate({
    errorClass: "input-error",
    rules: {
      // simple rule, converted to {required:true}
      value_username: "required",
      value_userphone: "required"
        },
        messages: {
          value_username:"*Напишите ваше имя",
          value_userphone:"*В этом поле укажите ваш телефон в формате: +7(XXX)XXX-XX-XX"
        },
      submitHandler: function(form) {
        var formData = form;
        var formData = new FormData(formData);
        $.ajax({
        url: "./php/value.php",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (msg) {
                  $(form)[0].reset(),
                  console.log(msg);
                  $('.popup-ok').toggleClass('open');
        } 
      });
      return false;
    }
  });
$('.feedback_form').validate({
    errorClass: "input-error",
    rules: {
      // simple rule, converted to {required:true}
      feedback_username: "required",
      feedback_userphone: "required"
        },
    messages: {
      feedback_username: "*Напишите ваше имя",
      feedback_userphone: "*В этом поле укажите ваш телефон в формате: +7(XXX)XXX-XX-XX"
        },
      submitHandler: function(form) {
        var formData = form;
        var formData = new FormData(formData);
        $.ajax({
        url: "./php/feedback.php",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (msg) {
                  $(form)[0].reset(),
                  console.log(msg);
                  $('.popup-ok').toggleClass('open');
        } 
      });
      return false;
    }
  });
$('.tour_form').validate({
    errorClass: "input-error",
    rules: {
      // simple rule, converted to {required:true}
      tour_username: "required",
      tour_userphone: "required"
        },
    messages: {
      tour_username: "*Напишите ваше имя",
      tour_userphone: "*В этом поле укажите ваш телефон в формате: +7(XXX)XXX-XX-XX"
        },
      submitHandler: function(form) {
        var formData = form;
        var formData = new FormData(formData);
        $.ajax({
        url: "./php/tour.php",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (msg) {
                  $(form)[0].reset(),
                  console.log(msg);
                  $('.popup-ok').toggleClass('open');
        } 
      });
      return false;
    }
  });
$('.contacts_form').validate({
    errorClass: "input-error",
    rules: {
      // simple rule, converted to {required:true}
      contacts_username: "required",
      contacts_userphone: "required"
        },
    messages: {
      contacts_username: "*Напишите ваше имя",
      contacts_userphone: "*В этом поле укажите ваш телефон в формате: +7(XXX)XXX-XX-XX"
        },
      submitHandler: function(form) {
        var formData = form;
        var formData = new FormData(formData);
        $.ajax({
        url: "./php/contacts.php",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (msg) {
                  $(form)[0].reset(),
                  console.log(msg);
                  $('.popup-ok').toggleClass('open');
        } 
      });
      return false;
    }
  });
});