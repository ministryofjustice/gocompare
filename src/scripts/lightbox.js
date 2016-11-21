// I'm not convinved jQuery is still the best way to do this sort of thing anymore
// however it will have to do until I've got time to look into a suitable replacement.

if ($('.c-lightbox'.length)) {
  // a lightbox has been found
  $('.c-lightbox').each(function() {
    let thisel = $(this);
    let body = $('body');
    let src = $(this).attr('href');
    let box = $('<div class="u-lightbox"><img src="'+src+'" alt="large version of process chart" /><div>');
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
