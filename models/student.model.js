const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'students',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  return Student;
}