$(document).ready(function() {


    //TOP BAR SHRINK ON SCROLL
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('#top').addClass("top-bar-shrink");
        $('#logo').addClass("top-logo-shrink");
      }
      else{
        $('#top').removeClass("top-bar-shrink");
        $('#logo').removeClass("top-logo-shrink");
      }
    });

    // WHEN background-size: cover NOT SUPPORTED
    if (!Modernizr.backgroundsize) {
        $('.main-bg').addClass("bg-cover-shiv");
    }


});
