if (typeof jQuery === 'undefined') {
    throw new Error('Script requires jQuery');
}
+function ($) {

    'use strict';

    function MobileNav() {
        var Trigger = '#MainNav button';
        var Target = '#MainNav .Navigation';
        $(document).on('click', Trigger, function (e) {
            e.preventDefault();
            if ($(this).hasClass('Active')) {
                $(this).removeClass('Active');
                $(Target).removeClass('Active');
            } else {
                $(this).addClass('Active');
                $(Target).addClass('Active');
            }
            return false;
        });
        $(document).on('click', function (e) {
            if (!$(e.target).parents(Target).length) {
                $(Trigger).removeClass('Active');
                $(Target).removeClass('Active');
            }
        });

    }
    function MobileSubmenuNav() {
        var Trigger = '.ToogleSubmenu';
        $(document).on('click', Trigger, function (e) {
            e.preventDefault();
            var Target = $(this).parents('li');
            $(Target).toggleClass('Active');
            return false;
        });
    }

    $(document).ready(function () {

        var Triggers = '#MainNav button';
        var Targets = '#MainNav .Navigation';
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            $(Triggers).removeClass('Active');
            $(Targets).removeClass('Active');
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 70)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        MobileNav();
        if ($(window).width() < 992) {
            MobileSubmenuNav();
        }

        setTimeout(function () {
            var Intro = '.IntroHush';
            var BodyHidden = 'body';
            $(Intro).addClass('Inactive');
            setTimeout(function () {
                $(Intro).addClass('Hidden');
                $(BodyHidden).removeClass('OverflowHidden');
            }, 500);
        }, 3000);

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });

    });

}(jQuery);

