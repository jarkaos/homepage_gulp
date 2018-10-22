jQuery(document).ready(function($) {
    var fade_in_videos = $('.fade-in-video');

    for (let i = 0; i < fade_in_videos.length; i++) {
        fade_in_videos[i].addEventListener("playing", function() {
            this.className += ' is-playing';
        });
    }
});

$(window).scroll(function() {
    let wScroll = $(this).scrollTop();
    let fromLeft = $('.from-left');
    let fromRight = $('.from-right');
    let media = $('.media');

    //Header animations
    let header = $('.main-header');
    let footer = $('footer');

    /* header.each(function(i) {
        if (wScroll > header.eq(i).offset().top - ($(window).height() / 1.2)) {
            header.eq(i).addClass('show');
        }
    }); */

    /* if (wScroll > footer.offset().top - ($(window).height() / 1.47)) {
        media.addClass('fade-in');

    } */

    //Sideway animations
    fromLeft.each(function(i) {
            if(wScroll > fromLeft.eq(i).offset().top - ($(window).height() / 1.2)) {
                fromLeft.eq(i).addClass('slide-in');
            }
    });

    fromRight.each(function(i) {
        if(wScroll > fromRight.eq(i).offset().top - ($(window).height() / 1.2)) {
            fromRight.eq(i).addClass('slide-in');
        }
    });

    // Bar animations
    if(wScroll > $('#skills').offset().top - ($(window).height() / 2)) {
        var item = $('.bar .level');
        item.each(function(i) {
           setTimeout(function() {
              item.eq(i).addClass('start'); 
           }, 150 * (i+1)); 
        });
    }
});