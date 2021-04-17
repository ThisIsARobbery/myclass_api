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
  return Teacher;
}