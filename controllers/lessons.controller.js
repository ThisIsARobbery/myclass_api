const lessonsService = require('../services/lessons.service');

module.exports = {
  findAll: async (req, res) => {
    return res.send(await lessonsService.findAll());
  },
  find: async (req, res) => {
    try {
      const findResults = await lessonsService.find(req.body);
      return res.send(findResults);
    } catch (ex) {
      if (ex instanceof Error) {
        return res.status(400).send(ex.message);
      }
    }
  }
}