const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define('Teacher', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'teachers',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  // Teacher.associate = (models) => {
  //   const { Lesson } = models;
  //   Teacher.Lessons = Lesson.belongsToMany(Lesson, {
  //     as: 'Lessons',
  //     through: 'lesson_teachers',
  //     primaryKey: true
  //   });
  //   return Teacher;
  // }
  return Teacher;
}