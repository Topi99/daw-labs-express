const express = require('express');
const router = express.Router();

router.get('/lab11', (req, res, next) => {
  res.render('lab11/index.pug');
})

module.exports = router;