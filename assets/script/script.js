$(document).ready(function() {
    $("#showMoreButton").click(function() {
      $(".shorts-content-cover").removeClass("hidden");
      $(this).addClass("hidden");
      $("#hideMoreButton").removeClass("hidden");
    });
    $(document).ready(function() {
      $('#toggleButton').click(function() {
        $('body').toggleClass('open');
      });
    });
    $("#hideMoreButton").click(function() {
      var allContent = $(".shorts-content-cover");
      var hiddenContent = allContent.slice(6);
      hiddenContent.addClass("hidden");
      $(this).addClass("hidden");
      $("#showMoreButton").removeClass("hidden"); 
    });

  });
  
  
  
  
  
  