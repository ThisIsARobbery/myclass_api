module.exports = app => {
  const studentController = require('../controllers/students.controller');

  const router = require('express').Router();

  router.get('/', studentController.findAll);

  app.use('/students', router);
}