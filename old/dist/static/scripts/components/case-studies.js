'use strict';

/* global $ */

if ($('.c-case-studies').length) {
  var container = $('.c-case-studies__container');

  var _loop = function _loop() {
    var el = container[i];
    el.classList.add('hidden');
    var toggleBtn = document.createElement('span');
    toggleBtn.classList.add('js-toggle-btn');
    el.appendChild(toggleBtn);
    $(toggleBtn).on('click', function () {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  };

  for (var i = 0; i < container.length; i++) {
    _loop();
  }
}