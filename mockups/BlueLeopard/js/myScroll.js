$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }

    $('body').scrollspy({
        target: '#top',
        offset: 160
    });
});