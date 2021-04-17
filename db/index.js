const DB_CONFIG = require('../config/db.config');
const Sequelize = require('sequelize');
const Student = require('../models/student.model');
const Teacher = require('../models/teacher.model');
const Lesson = require('../models/lesson.model');
const Lesson_Student = require('../models/lesson_student.model');

const sequelize = new Sequelize(
  DB_CONFIG.DB,
  DB_CONFIG.USER,
  DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST,
    dialect: 'postgres'
  }
);

const models = {
  Student: Student(sequelize, Sequelize),
  Teacher: Teacher(sequelize, Sequelize),
  Lesson: Lesson(sequelize, Sequelize),
  Lesson_Student: Lesson_Student(sequelize, Sequelize),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  ...models
}