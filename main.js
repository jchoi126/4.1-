(function($){
  $(function(){
  "use strict";

// $('.subject').on('click', function(){
//   event.preventDefault();
//   $(this).children('li').hide();
// });

$( ".grey ul" ).click(function(event) {
  event.preventDefault()
  $(this).children('li').slideToggle ("slow");
});

$(document).ready(function() {
  // event.preventDefault()
   $('.subject').hover(
      function () {
         $(this).css({"background-color":"#8CA135"});
      },
      function () {
         $(this).css({"background-color":"grey"});
      }
   );
});

$(.grey ul).click(function(event){
  event.preventDefault();
  var$pannelHeading = $(this);
  var$openPanel = $('.panel-collapse.in');

  $openPanel.slideUp(function(){
    $openPanel.removeClass('in');
  });

  $pannelHeading
    .parents('.panel-group')


})


// $(".subject").hover(function() {
//   event.preventDefault();
//   $(this).addClass("blue");
// }, function() {
//   $(this).removeClass("blue");
// });



  });
}(jQuery));
