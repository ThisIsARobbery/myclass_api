const DB_CONFIG = require('../config/db.config');
const Sequelize = require('sequelize');
const Student = require('../models/student.model');
const Teacher = require('../models/teacher.model');

console.log(DB_CONFIG.DB,
  DB_CONFIG.USER,
  DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST,
    dialect: 'postgres'
  })
const sequelize = new Sequelize(
  DB_CONFIG.DB,
  DB_CONFIG.USER,
  DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST,
    dialect: 'postgres'
  }
);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  students: Student(sequelize, Sequelize),
  teachers: Teacher(sequelize, Sequelize)
}