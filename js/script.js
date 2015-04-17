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

    $('#logo').click(function() {
        $('html').animatescroll();
        return false;
    });

    $('#portfolio-button').click(function() {
        $('#portfolio').animatescroll({padding:0});
        return false;
    });


    $('#about-button').click(function() {
        $('#about').animatescroll({padding:0});
        return false;
    });

    $('#contact-button').click(function() {
        $('#contact').animatescroll({padding:0});
        return false;
    });  

    // WHEN background-size: cover NOT SUPPORTED
    if (!Modernizr.backgroundsize) {
        $('.main-bg').addClass("bg-cover-shiv");
    }

    var nav = responsiveNav(".nav-collapse", {animate: true});


});
