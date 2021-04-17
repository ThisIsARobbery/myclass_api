const db = require('../db')
const Teacher = db.Teacher;

module.exports = {
  findAll: async () => {
    return JSON.stringify(await Teacher.findAll({}));
  }
}