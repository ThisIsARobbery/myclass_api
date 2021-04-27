module.exports = app => {
  const lessonsController = require('../controllers/lessons.controller');

  const router = require('express').Router();

  router.get('/all', lessonsController.findAll);

  router.post('/find', lessonsController.find);

  app.use('/lessons', router);
}