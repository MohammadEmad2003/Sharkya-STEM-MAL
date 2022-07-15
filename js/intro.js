/// <reference path="../@types/animejs/index.d.ts" />
/// <reference path="../@types/jquery/index.d.ts" />

$(function() {

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    var myFS = $('.hero .hero_title').css('font-size');
    var myFW = $('.hero .hero_title').css('font-weight');
    var time_ms = 10;

    $('.introtext2').css('line-height', $('.hero_title').css('line-height'));

    // if ($(window).width() < 767.98) {
    //     myFS = '1.5rem';
    // } else {
    //     myFS = '1.8rem';
    // }

    var intro_timeline = anime.timeline({
        easing: 'easeInOutQuad',
    });

    intro_timeline.add({
        targets: '.introtext1',
        opacity: 1,
        marginBottom: '1rem',
        duration: 750,
        delay: time_ms,
    });

    intro_timeline.add({
        targets: '.introtext2',
        width: [String(100 / 35 * -1) + '%', '100%'],
        easing: 'steps(35)',
    });

    intro_timeline.add({
        targets: '.introtext1',
        opacity: 0,
        duration: 750,
        delay: time_ms,
    });

    intro_timeline.add({
        targets: '.introtext2 span.intro_disappearing',
        opacity: 0,
        duration: 500,
    }, '-=' + time_ms.toString());

    intro_timeline.add({
        targets: '.introtext2 span.intro_disappearing',
        width: 0,
        duration: 500,
        complete: function() {
            $('.intro_disappearing').css('display', 'none');
            // $('.introtext2-container').css({ position: 'fixed', left: '50%', transform: 'translateX(-50%)' });
            $('.introtext2-container').css({ position: 'fixed', left: String($(window).width() - $('.introtext2-container').outerWidth() / 2) + 'px', transform: 'translateX(-50%)' });
            $('.introtext1').css('display', 'none');
            // $('.intro-container').css('position', 'relative');
        }
    });

    intro_timeline.add({
        targets: '.introtext2-container',
        duration: 600,
        top: [String($(window).height() * 0.5) + 'px', String($('.hero_title').offset().top) + 'px'],
        // translateX: '0%',
        left: [String($(window).width() * 0.5) + 'px', String($('.hero_title span').offset().left + $('.hero_title span').outerWidth() / 2) + 'px'],
    });

    intro_timeline.add({
        targets: '.introtext2',
        // fontSize: '1.8rem',
        fontSize: myFS,
        fontWeight: myFW,
        duration: 600,
    }, '-=600');

    intro_timeline.add({
        targets: '.intro-container',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        zIndex: '1',
        duration: 200,
        complete: function() {
            $('.intro-container').css({ width: '0', height: '0' });
        }
    }, '-=' + time_ms.toString());

    intro_timeline.add({
        targets: '.introtext2-container',
        opacity: 0,
        duration: 200,
        complete: function() {
            $('.intro-container').css('display', 'none');
        }
    });

    intro_timeline.add({
        targets: '.page-content',
        opacity: 1,
        complete: function() {
            $('body').css('overflow-y', 'visible');
        },
    }, '-=500');

});