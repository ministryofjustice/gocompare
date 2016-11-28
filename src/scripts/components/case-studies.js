/* global $ */

if ($('.c-case-studies').length) {
  let container = $('.c-case-studies__container');
  for (var i = 0; i < container.length; i++) {
    let el = container[i];
    el.classList.add('hidden');
    let toggleBtn = document.createElement('span');
    toggleBtn.classList.add('js-toggle-btn');
    el.appendChild(toggleBtn);
    $(toggleBtn).on('click', function() {
      if(el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    })
  }
}
