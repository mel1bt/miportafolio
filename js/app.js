
// PARA LA TRANSCION DEL FONDO 
$(function() {

    $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
/*
 $('#acerca').vegas({
        slides: [
            { src: 'img/fondo/fondo1.jpg' },
            { src: 'img/fondo/fondo3.jpg' },
        
        ],
    transition: 'fade',
     overlay:  'dist/vegas/overlays/07.png'
    });

*/

    $('header2').vegas({
        slides: [
            { src: 'img/fondo/fondo1.jpg' },
            { src: 'img/fondo/fondo2.jpg' },
            { src: 'img/fondo/fondo3.jpg', 
            	video: {
                src: [
                    'img/fondo/clip.mp4',
                ],
                loop: false,
                mute: true
            }
        }
        ],
    transition: 'fade',
     overlay:  'dist/vegas/overlays/02.png'
    });


 $('.progress .progress-bar').progressbar({display_text: 'fill'});


  var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});


$('.navbar-collapse ul li a').click(function() {
   $('.navbar-toggle:visible').click();
});
