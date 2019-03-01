const express = require('express');
const router = express.Router();
const Product = require('../../models/index').Product;

router.get('/', (req, res) => {
  // Product.create({
  //   name:'Nuevo Producto con otro nombre'
  // }); 
  res.render('home/index.pug');
});

module.exports = router;