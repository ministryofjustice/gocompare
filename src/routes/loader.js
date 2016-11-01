var express = require('express');
var router = express.Router();
var pages = require('../json/pages.json');

router.get('/', (req, res) => {
    res.render(
      'index',
      {
        title: 'Welcome'
      }
    )
});

router.get('/:slug', (req, res) => {
    var slug = req.params.slug;
    pages.forEach(function(page) {
      if(page.slug === slug) {
        res.render(
          'detail', page
        )
      }
    });
});

router.get('*', (req, res) => {
  res.send('<h1>404 not found</h1>');
});

module.exports = router;
