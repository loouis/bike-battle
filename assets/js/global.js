(function($){
  var $contactBtn = $('.contact-btn'),
      $contactDetails = $(".contact-details");

  $contactBtn.on("click", function(){
    console.log("clicked");
    $(this).toggleClass("contact-btn--active");
    $contactDetails.toggleClass("contact-details--visible");
  });

  // Vide button animation
  var $hero = $("hero");

    setInterval(function(){
      $(".hero").toggleClass("hero--animate");
    }, 860);

  // Fancybox
  $("[data-fancybox]").fancybox({
		// Options will go here
	});
})(jQuery);
