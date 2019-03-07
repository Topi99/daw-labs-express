const express = require('express');
const router = express.Router();
const striptags = require('striptags');

router.get('/', (req, res) => {
  // Lab.create({
  //   name:'Lab 11: Manejo de formas con php y modelo de capas',
  //   desc: 'En esta actividad veremos cómo manejar las formas html con php, y haremos una pequeña introducción al modelo de capas.',
  //   photoURL: 'https://firebasestorage.googleapis.com/v0/b/imgages-86e51.appspot.com/o/1551116917054.jpg?alt=media&token=a9c73e45-115d-4438-b000-45cc5795f346'
  // }); 
  res.render('home/index.pug', {nombre} = req.app.locals );
});

router.post('/login', (req, res) => {
  req.app.locals.name = req.body.name;
  req.app.locals.loged = true;

  res.redirect(req.body.to);
});

router.get('/logout', (req, res) => {
  req.app.locals.name = undefined;
  req.app.locals.loged = false;

  res.redirect('/');
});

module.exports = router;