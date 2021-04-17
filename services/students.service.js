const db = require('../db')
const Student = db.Student;

module.exports = {
  findAll: async () => {
    return JSON.stringify(await Student.findOne({ id: 2 }).Lessons.findAll());
  }
}