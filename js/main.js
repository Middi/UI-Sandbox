$(document).ready(function () {
        

    // ===========================
    // Mobile Nav
    // ===========================

    $('#open').click(function () {
        $(this).css('opacity', '0');
        $('.menu').addClass('show');
    });
    
    $('#close').click(function () {
        $('.menu').removeClass('show');
        $('#open').css('opacity', '0.7');
    });

          
    // ===========================
    // Smooth Scrolling
    // ===========================

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                // Close Menu
                $('.menu').removeClass('show');
                $('#open').css('opacity', '0.7');

                return false;
            }
        }
    });      


    // ===========================
    // Parralax Scrolling
    // ===========================

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        $('.logo').css({
            'transform' : 'translate(0px, ' + wScroll /2.4 +'%)'
        });
        
    });
});