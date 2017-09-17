$(function() {
    var $elements = $('.animateBlock.notAnimated');
    var $window = $(window);
    $window.on('scroll',function(e) {
        $elements.each(function(i, elem){
            if($(this).hasClass('animated'))
                return;
            animateMe($(this));
        });
    });
});

function animateMe(elem) {
    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    if((elemBottom <= winBottom) && (elemTop >= winTop)) {
        $(elem).removeClass('notAnimated').addClass('animated');
    }
}