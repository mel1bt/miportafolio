// PARA LA TRANSCION DEL FONDO 
$(function() {

 $('#acerca').vegas({
        slides: [
            { src: 'img/fondo/fondo1.jpg' },
            { src: 'img/fondo/fondo3.jpg' },
        
        ],
    transition: 'fade',
     overlay:  'dist/vegas/overlays/07.png'
    });


/*
    $('body').vegas({
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
     overlay:  'dist/vegas/overlays/07.png'
    });

*/
$('.wodryRX').wodry({
    animation: 'rotateY',
    delay: 2000,
    animationDuration: 800
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
