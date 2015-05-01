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
        $('#projects').animatescroll({padding:0});
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

    $('.opacity-effect').hover(function() {
        $(this).find("img").addClass('opacity-return');
    }, function() {
        $(this).find("img").removeClass('opacity-return');
    });

    $('#bottom-logo').click(function() {
        $('html').animatescroll();
        return false;
    });


    var nav = responsiveNav(".nav-collapse", {animate: true});


});
