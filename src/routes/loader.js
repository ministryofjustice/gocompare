var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render(
      'index',
      {
        title: 'Welcome to Go-Compare'
      }
    )
})

router.get('*', (req, res) => {
  res.send('404 not found')
})

module.exports = router;
