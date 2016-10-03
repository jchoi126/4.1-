(function($){
  $(function(){
  "use strict";

// $('.subject').on('click', function(){
//   event.preventDefault();
//   $(this).children('li').hide();
// });

$( ".subject" ).click(function() {
  $(this).children('li').slideToggle ("slow");
});

$(document).ready(function() {
   $('.subject').hover(
      function () {
         $(this).css({"background-color":"grey"});
      },
      function () {
         $(this).css({"background-color":"white"});
      }
   );
});


// $(".subject").hover(function() {
//   event.preventDefault();
//   $(this).addClass("blue");
// }, function() {
//   $(this).removeClass("blue");
// });



  });
}(jQuery));
