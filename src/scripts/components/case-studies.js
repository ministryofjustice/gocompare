/* global $ */

// I'm not convinved jQuery is still the best way to do this sort of thing anymore
// however it will have to do until I've got time to look into a suitable replacement.
// Either way, I should refactor it to not use each.

if ($('.c-case-studies').length) {
  $('.c-case-studies__container').each(function() {
    let el = $(this);
    el.addClass('hidden');
    let toggleBtn = $('<span class="js-toggle-btn"></span>').appendTo(el);
    toggleBtn.on('click', function() {
      if(el.hasClass('hidden')) {
        el.removeClass('hidden');
      } else {
        el.addClass('hidden');
      }
    })
  })
}
