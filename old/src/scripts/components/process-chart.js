// I'm not convinved jQuery is still the best way to do this sort of thing anymore
// however it will have to do until I've got time to look into a suitable replacement.
// Either way, I should refactor it to not use each.

/* global $ */
let lightbox = $('.c-process-chart__lightbox')
if (lightbox.length) {
  // a process chart has been found
  for (var i = 0; i < lightbox.length; i++) {
    let thisel = $(lightbox[i]);
    let body = $('body');
    let src = thisel.attr('href');
    let box = $('<div class="u-lightbox"><img src="'+src+'" alt="large version of process chart" /><div>');
    let close = $('<i class="fa fa-window-close" aria-hidden="true"></i>');
    thisel.on('click', function(e) {
      e.preventDefault();
      box.appendTo(body);
      close.appendTo(box);
      box.on('click', '.fa-window-close' , function() {
        box.remove();
      })
    })
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        box.remove();
      }
    });
  }
}
