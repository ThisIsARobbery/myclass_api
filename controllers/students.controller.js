const { JSON } = require('sequelize');
const db = require('../db')
const studentsService = require('../services/students.service');

module.exports = {
  findAll: async (req, res) => {
    const students = await studentsService.findAll();
    return res.send(students);
  }
}