var express = require('express');
var router = express.Router();
var index = require('../json/index.json');
var pages = require('../json/pages.json');

router.get('/', (req, res) => {
    res.render('index', {
      type: 'index',
      content: index,
      pages: pages
    })
});

router.get('/:slug', (req, res) => {
    var slug = req.params.slug;
    pages.forEach(function(page) {
      if(page.slug === slug) {
        res.render(
          'detail', {
            type: 'detail',
            page: page
          }
        )
      }
    });
});

router.get('*', (req, res) => {
  res.send('<h1>404 not found</h1>');
});

module.exports = router;
