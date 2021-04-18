const { DataTypes } = require('sequelize');
const db = require('../db');

const Lesson = db.Lesson;
const Student = db.Student;

module.exports = (sequelize, Sequelize) => {
  const Lesson_Student = sequelize.define('Lesson_Student', {
    lesson_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Lesson,
        key: 'id'
      }
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: 'id'
      }
    },
    visit: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'lesson_students',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  Lesson_Student.associate = (models) => {
    const { Lesson, Student } = models;
    Lesson_Student.belongsTo(Lesson, {foreignKey: 'lesson_id', as: 'Lesson'});
    Lesson_Student.belongsTo(Student, {foreignKey: 'student_id', as: 'Student'});
  };
  return Lesson_Student;
}