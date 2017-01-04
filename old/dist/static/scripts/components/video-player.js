'use strict';

// I'm not convinved jQuery is still the best way to do this sort of thing anymore
// however it will have to do until I've got time to look into a suitable replacement.
// Either way, I should refactor it to not use each.

/* global $ */
var lightbox = $('.c-video-player__lightbox');
if (lightbox.length) {
  var _loop = function _loop() {
    var thisel = $(lightbox[i]);
    var body = $('body');
    var src = thisel.find('img').attr('data-youtube');
    var box = $('<div class="u-lightbox u-lightbox--video"><iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/' + src + '?autoplay=1" frameborder="0"></iframe><div>');
    var close = $('<i class="fa fa-window-close" aria-hidden="true"></i>');
    thisel.on('click', function (e) {
      e.preventDefault();
      box.appendTo(body);
      close.appendTo(box);
      box.on('click', '.fa-window-close', function () {
        box.remove();
      });
    });
    $(document).keyup(function (e) {
      if (e.keyCode === 27) {
        box.remove();
      }
    });
  };

  // a video player has been found
  for (var i = 0; i < lightbox.length; i++) {
    _loop();
  }
}