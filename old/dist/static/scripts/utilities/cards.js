'use strict';

/* global $ */

if ($('.u-card').length) {
  var card = $('.u-card');
  for (var i = 0; i < card.length; i++) {
    if (i % 2 === 0) {
      // first item in each row.
      var thisCard = $(card[i]);
      var nextCard = $(card[i + 1]);
      var tCHeight = thisCard.outerHeight();
      var nCHeight = nextCard.outerHeight();
      if (tCHeight >= nCHeight) {
        thisCard.css('height', tCHeight + 'px');
        nextCard.css('height', tCHeight + 'px');
      } else {
        nextCard.css('height', nCHeight + 'px');
        thisCard.css('height', nCHeight + 'px');
      }
    }
  }
};