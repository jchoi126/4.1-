(function($){
  $(function(){
  "use strict";

// $('.subject').on('click', function(){
//   event.preventDefault();
//   $(this).children('li').hide();
// });

$('.subject').hide();
 
$( ".toggle" ).click(function(event) {
  event.preventDefault()
  if($(this).children('ul').is(':visible')){
    ($(this).children('ul').slideUp())
  } else {
    $(this).children('ul').slideDown();
    $(this).siblings().children('ul').slideUp();
  }
});

$(document).ready(function() {
  // event.preventDefault()
   $('.toggle').hover(
      function () {
         $(this).css({"background-color":"#8CA135"});
      },
      function () {
         $(this).css({"background-color":"grey"});
      }
   ); 
});

// $('#closemenu div').on('click', function() {
//   if ($(this).find('ul').is(':visible')) {
//     $(this).find('ul').show()
//   } else {
//     $(this).find('div').hide()
//     $(this).find('ul').show()
//   }
// });

// $('.toggle').click(function(event){
//   event.preventDefault();
//   var $pannelHeading = $(this);
//   var $openPanel = $('.panel-collapse.in');
//
//   $openPanel.slideUp(function(){
//     $openPanel.removeClass('in');
//   });
//   $pannelHeading
//     .parents('.panel-group')
// })


// $(".subject").hover(function() {
//   event.preventDefault();
//   $(this).addClass("blue");
// }, function() {
//   $(this).removeClass("blue");
// });



  });
}(jQuery));
