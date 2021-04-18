const { DataTypes } = require('sequelize');
const db = require('../db');

const Lesson = db.Lesson;
const Teacher = db.Teacher;

module.exports = (sequelize, Sequelize) => {
  const Lesson_Teacher = sequelize.define('Lesson_Teacher', {
    lesson_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Lesson,
        key: 'id'
      }
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Teacher,
        key: 'id'
      }
    }
  });
  Lesson_Teacher.associate = (models) => {
    const { Lesson, Teacher } = models;
    Lesson_Teacher.belongsTo(Lesson, {foreignKey: 'lesson_id', as: 'Lesson'});
    Lesson_Teacher.belongsTo(Teacher, {foreignKey: 'teacher_id', as: 'Teacher'});
  }
  return Lesson_Teacher;
}