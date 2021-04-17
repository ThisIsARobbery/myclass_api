const teachersService = require('../services/teachers.service');

module.exports = {
  findAll: async (req, res) => {
    return res.send(await teachersService.findAll());
  }
}