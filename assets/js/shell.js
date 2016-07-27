$(function() {
 var nav = $('#nav');
 var navWrap = $('#navWrap');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                left: '50%',
                });
            navWrap.css({
                position: 'fixed',
                top: 0,
                width: '100%'
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            navWrap.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
