const studentsService = require('../services/students.service');

module.exports = {
  findAll: async (req, res) => {
    return res.send(await studentsService.findAll());
  }
}