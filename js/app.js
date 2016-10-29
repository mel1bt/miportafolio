// PARA LA TRANSCION DEL FONDO 
$(function() {

 $('body').vegas({
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



});
