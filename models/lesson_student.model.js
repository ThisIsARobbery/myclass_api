const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Lesson_Student = sequelize.define('Lesson_Student', {
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
  return Lesson_Student;
}