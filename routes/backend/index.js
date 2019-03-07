const express = require('express');
const router = express.Router();
const Image = require('../../models/index').Image;

router.get('/backend', (req, res, next) => {
  res.render('backend/index.pug');
});

router.get('/backend/lab11', (req, res) => {
  res.render('backend/lab11.pug');
});

router.post('/backend/lab11', (req, res) => {
  let msg = 'Perfecto';
  let className = 'ok';
  
  if(req.body.pwd1.length < 10 || req.body.pwd1 !== req.body.pwd2) {
    msg = 'Ingresaste una contraseña inválida o no fue la misma en los dos casos';
    className = 'err';
  }
  
  res.render('backend/lab11.pug', {msg, className});
});

router.get('/backend/lab13', async (req, res) => {
  let { loged } = req.app.locals;
  
  const images = await Image.findAll();

  res.render('backend/lab13.pug', { loged, images });
});

router.post('/backend/lab13', async (req, res) => {
  let { loged } = req.app.locals;
  let { name } = req.app.locals;
  let photoURL = req.body.photoURL;

  console.log(name, photoURL);
  
  await Image.create({
    name,
    photoURL
  })

  const images = await Image.findAll();
  
  res.render('backend/lab13.pug', { loged, images });
});

module.exports = router;