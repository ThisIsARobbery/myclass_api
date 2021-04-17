const { DataTypes } = require('sequelize');
const db = require('../db');

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
  return Lesson;
}