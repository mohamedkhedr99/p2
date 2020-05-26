$(function(){
'use strict';
 var myHeader = $('.header');

myHeader.height($(window).height());
$(window).resize(function () {

    myHeader.height($(window).height());

   

});

$('.links li').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active')
});



$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 10000
  });


  $('.links li a').click(function() {
      $('html, body').animate({

          scrollTop: $('#' + $(this).data('value')).offset().top 

      }, 1000);
  });

  (function autoslider (){
$('.slider .active').each(function(){
if(!$(this).is(':last-child')){
    $(this).delay(3000).fadeOut(1000, function(){
        $(this).removeClass('active').next().addClass('active').fadeIn();

        autoslider();

    });

} else {
    $(this).delay(3000).fadeOut(1000, function(){
        $(this).removeClass('active');
        $('.slider div').eq(0).addClass('active').fadeIn();
        autoslider();
    });
}



});

  }());

  $('#Container').mixItUp();



  $('.shuffle li').click(function(){
      $(this).addClass('selected').siblings().removeClass('selected');
  });

  $("body").niceScroll();


});