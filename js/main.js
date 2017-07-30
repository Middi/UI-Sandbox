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

                $('#menu').slideUp( "slow", function() {
                $('#menu').addClass('hidden');
                
                });
                return false;
            }
        }
    });      
});