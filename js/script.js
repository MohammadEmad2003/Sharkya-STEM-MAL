/// <reference path="../@types/animejs/index.d.ts" />
/// <reference path="../@types/jquery/index.d.ts" />

$(function() {

    //========================================================================= START: CustomNav

    // function responsivecustomnavbar(mediaQuery) {
    //     if (mediaQuery.matches) {
    //         $('.togglenavbar').css('display', 'block');
    //     } else {

    //     }
    // }

    // var mediaQuery = window.matchMedia('(max-width: 767.98px)');
    // responsivecustomnavbar(mediaQuery);
    // mediaQuery.addListener(myFunresponsivecustomnavbarction);


    $(window).on('resize', function() {
        if ($(this).width() < 991.98) {
            $('.togglenavbar').css('display', 'block');
            $('.navbar_container').css('display', 'none');
            $('.customnavbar').css({ 'height': '70px', 'padding-right': '0', 'flex-direction': 'column' });
        } else {
            $('.togglenavbar').css('display', 'none');
            $('.navbar_container').css('display', 'flex');
            $('.customnavbar').css({ 'height': '100vh', 'padding-right': '20px', 'background': 'background: rgb(255,255,255)', 'flex-direction': 'row' });
        }
    });

    $(window).resize();

    $('.togglenavbar').on('click', function() {
        if ($(this).hasClass('iscollapsed')) {
            $(this).removeClass('iscollapsed');
            $(this).css({ 'transform': 'rotate(180deg)' });
            $('.customnavbar').css({ 'height': '100vh', 'background': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 95%, rgba(255,255,255,0) 100%)', 'flex-direction': 'column' });
            $('.navbar_container').css({ 'display': 'flex', 'flex-direction': 'column' });
        } else {
            $(this).addClass('iscollapsed');
            $(this).css({ 'transform': 'rotate(0deg)' });
            $('.customnavbar').css({ 'height': '70px', 'background': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)', 'flex-direction': 'row' });
            $('.navbar_container').css({ 'display': 'none', 'flex-direction': 'row' });
        }
    });



    //========================================================================= END: CustomNav



});