const express = require('express');
const router = express.Router();

router.get('/lab11', (req, res, next) => {
  res.send('hola lab11');
})

module.exports = router;