
$(document).on('click', '.navigation-button', function () {
    $('.menu-mobile-item').css('display','none');
    $('.mobile-menu').css('display','block');
    $('.mobile-menu').animate({'height':'250px'},500);
});

$(document).on('click', '.mobile-menu ul li a', function (event) {
    event.preventDefault();
    var item = $(this).text();
    $('.menu-mobile-item').text(item);
    $('.mobile-menu').animate({'height':'50px'},500, function () {
        $('.mobile-menu').css('display','none');
        $('.menu-mobile-item').css('display','block');
    });
});

$(document).on('click', 'body', function () {
    if( $('.mobile-menu').css('height')=='250px') {
        $('.mobile-menu').animate({'height': '50px'}, 500, function () {
            $('.mobile-menu').css('display', 'none');
            $('.menu-mobile-item').css('display','block');
        });
    };
});

$(window).on('resize', function () {
    if( $(window).width()>767 ) {
	$('.menu-mobile-item').css('display','none');
	}
    else {
	$('.menu-mobile-item').css('display','block');
    };
});