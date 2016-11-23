// I'm not convinved jQuery is still the best way to do this sort of thing anymore
// however it will have to do until I've got time to look into a suitable replacement.

if ($('.c-video-player__lightbox').length) {
  // a video player has been found
  $('.c-video-player__lightbox').each(function() {
    let thisel = $(this);
    let body = $('body');
    let src = $(this).find('img').attr('data-youtube');
    let box = $('<div class="u-lightbox u-lightbox--video"><iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/'+src+'?autoplay=1" frameborder="0"></iframe><div>');
    let close = $('<i class="fa fa-window-close" aria-hidden="true"></i>');
    thisel.on('click', function(e) {
      e.preventDefault();
      box.appendTo(body);
      close.appendTo(box);
      box.on('click', '.fa-window-close' , function() {
        box.remove();
      })
      $(document).keyup(function(e) {
        if (e.keyCode === 27) {
          box.remove();
        }
      });
    })
  })
}
