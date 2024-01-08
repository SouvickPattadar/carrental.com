// JavaScript Document

(function($){
 "use strict";
	
	$(window).scroll(function(){
    if($(this).scrollTop() > 300){
    	$(".go-top").addClass('show').removeClass('hide')
    }
    else{
    	$(".go-top").addClass('hide').removeClass('show')
    }

	});

   
   	$(document).ready(function(){
   	// Back to top 
     $(".go-top").on('click' , function(){
     $('html , body').animate({
       scrollTop : 0
     }, 500);
     return false;
	});
     // clock picker

     $('.clockpicker').clockpicker();

     // date picker
      $('.datepickr').datepicker({
        timepicker: false,
        minDate: new Date()
      });
	
   	});

   	$(window).scroll(function(){
     if($(this).scrollTop() > 200) {
      $('.header').addClass('header-fixed');
     }
     else{
     	$('.header').removeClass('header-fixed');
     }


   	});

    // preloader preloader

    $(document).ready(function(){
     setTimeout(function(){
     $('.preloader').delay(50).css({ 'opacity': '0' });
      $('.preloader').delay(1000).fadeOut(500);
     },5000);
    
    // Counter up 

    // animated number counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 4000,
        easing:"swing"  
      });

     // Destination Slider

    $(".destination-slider").owlCarousel({
      loop : true ,
       margin: 10,
      autoplay: true,
      responsiveClass: true,
      smartSpeed: 1200,
      items : 3,
      navText: [
        '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        576: {
          items: 2,
          nav: true,
        },
        992: {
          items: 3,
          nav: true,
          loop: true,
          margin: 20,
        },
      },

    });


     // Review Slider

    $(".review-slider").owlCarousel({
      loop : true ,
       margin: 10,
        center: true,
        dots : true,
      autoplay: true,
      responsiveClass: true,
      smartSpeed: 1200,
      items : 3,
      responsive: {
        0: {
          items: 1,
          
        },
        576: {
          items: 1,
         
        },
        992: {
          items:3 ,
          margin: 20,
        },
      },

    });


  

   $('.banner-slider').slick({
   arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
    dots: false,
  adaptiveHeight: true,
    cssEase: 'linear',
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
         dots: true
        
      }
    }
    ]
 
});

 $(".nav-link").on("click" , function(){
   
   $(".nav-link").removeClass("active");
   $(this).addClass("active");

  });
  

// document.addEventListener("contextmenu", (event) => {
       //  event.preventDefault();
     // });

 // $('img').on('dragstart', function(event) { event.preventDefault(); });

     });



	
	
})(jQuery); 


