$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#navWrap');
    var navHomeY = $('#navWrap').offset().top - parseFloat($('#navWrap').css('marginTop').replace(/auto/, 100));
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            $('#navWrap').addClass('fixed');

            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
/*

//TEST
$(document).ready(function () {  
  var top = $('#navWrap').offset().top - parseFloat($('#navWrap').css('marginTop').replace(/auto/, 100));
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top) {
      $('#navWrap').addClass('fixed');
    } else {
      $('#navWrap').removeClass('fixed');
    }
  });
});
*/
