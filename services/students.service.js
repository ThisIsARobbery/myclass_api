const { Promise } = require('sequelize');
const db = require('../db')
const Student = db.students;

module.exports = {
  findAll: async () => {
    const allUsers = Student.findAll({});
    return JSON.stringify(await allUsers);
  }
}