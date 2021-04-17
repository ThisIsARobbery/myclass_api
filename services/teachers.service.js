const db = require('../db')
const Student = db.students;

module.exports = {
  findAll: async () => {
    return JSON.stringify(await Student.findAll({}));
  }
}