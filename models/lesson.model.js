const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Lesson = sequelize.define('Lesson', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'lessons',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  Lesson.associate = (models) => {
    const { Student, Lesson_Student } = models;
    Lesson.Students = Lesson.belongsToMany(Student, {
      as: 'Students',
      through: Lesson_Student,
      primaryKey: true
    });
    return Lesson;
  }
  return Lesson;
}