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

    // thumbnail animations
    let thumbnail = $('.thumbnail');
    thumbnail.each(function(i) {
        if(wScroll > thumbnail.eq(i).offset().top - ($(window).height() / 1.3)) {
            setTimeout(function() {
                $('.thumbnail').eq(i).addClass('showing');
            }, 200 * (i+1));
        }
    });
});

$(function() {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
});