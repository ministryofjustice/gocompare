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
      } else {
        res.render('error', {
          type: 'error',
          page: {
            code: '404',
            title: 'Error 404: No page found matching \'' + slug + '\'',
            message : 'You seem to have to hit his page in error.'
          }
        })
      }
    });
});

// if the user hits a non-existing route, then show a 404 error on the utility template.
router.get('*', (req, res) => {
  res.render('error', {
    type: 'error',
    page: {
      code: '404',
      title: 'Error 404: Page not found',
      message : 'You seem to have to hit his page in error.'
    }
  })
});

module.exports = router;
