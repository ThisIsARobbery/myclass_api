module.exports = app => {
  const teachersController = require('../controllers/teachers.controller');

  const router = require('express').Router();

  router.get('/', teachersController.findAll);

  app.use('/teachers', router);
}