const db = require('../db')
const Teacher = db.Teacher;
const Lesson = db.Lesson;

module.exports = {
  findAll: async () => {
    const teacher = await Teacher.findOne({ id: 1 }, {
      include: 'Lessons'
    });
    console.log(teacher);
    return JSON.stringify(teacher);
  }
}