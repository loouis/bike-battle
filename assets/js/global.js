(function($){
  var $contactBtn = $('.contact-btn'),
      $contactDetails = $(".contact-details");

  $contactBtn.on("click", function(){
    console.log("clicked");
    $(this).toggleClass("contact-btn--active");
    $contactDetails.toggleClass("contact-details--visible");
  });

  // Scroll to ticket section
  $('.buy-tickets-btn').on("click", function(){
    $('html, body').animate({
      scrollTop: $('.buy-tickets').offset().top
    }, 600);
  });

})(jQuery);
