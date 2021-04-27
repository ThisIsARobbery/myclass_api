const db = require('../db');

const {Lesson, Teacher, Student} = db;

const Op = db.Sequelize.Op;

const moment = require('moment');

module.exports = {
  findAll: async () => {
    const lessons = await Lesson.findAll({ include: [
        {
          model: Student,
          as: 'students'
        },
        {
          model: Teacher,
          as: 'teachers'
        }
      ]
    });
    return JSON.stringify(lessons);
  },

  find: async (filter) => {
    let sequelizeFilter = {};
    // Checking and applying date filter
    if ('date' in filter) {
      const splitAttempt = filter.date.split(',');
      if (splitAttempt.length == 2
        && moment(splitAttempt[0], 'YYYY-MM-DD', true).isValid()
        && moment(splitAttempt[1], 'YYYY-MM-DD', true).isValid()
      ) {
        const date1 = moment(splitAttempt[0], 'YYYY-MM-DD', true);
        const date2 = moment(splitAttempt[1], 'YYYY-MM-DD', true);
        if (date1.isAfter(date2)) {
          throw new Error('Invalid date interval. First date must be before second.')
        }
        sequelizeFilter.where = {
          date: {
            [Op.between]: [date1, date2] 
          }
        };
      } else if (moment(filter.date, 'YYYY-MM-DD', true).isValid()) {
        const date = moment(filter.date, 'YYYY-MM-DD', true);
        sequelizeFilter.where = {
          date: date
        };
      } else {
        throw new Error('Invalid date format.');
      }
    }
    // Checking and applying status filter
    if ('status' in filter) {
      if (typeof filter.status != 'boolean') {
        throw new TypeError('Invalid type of status (must be true or false).');
      }
      if (!('where' in sequelizeFilter)) {
        sequelizeFilter.where = {
          status: filter.status ? 1 : 0
        };
      } else {
        sequelizeFilter.where.status = filter.status ? 1 : 0;
      }
    }
    if ('teacherIds' in filter) {
      // getting all lesson ids with teachers from range
      const lessonsWithTeachers = await Lesson.findAll({
        attributes: ['id'],
        raw: true,
        include: [{
          model: Teacher,
          as: 'teachers',
          where: {
            id: {
              [Op.in]: filter.teacherIds
            }
          }
        }]
      });
      // mapping lessons to array
      const lessonIds = lessonsWithTeachers.map(lesson => lesson.id);
      // adding to filter
      if ('where' in sequelizeFilter) {
        sequelizeFilter.where = {
          id: {
            [Op.in]: lessonIds
          }
        }
      } else {
        sequelizeFilter = {
          where: {
            id: {
              [Op.in]: lessonIds
            }
          }
        }
      }
    }
    return Lesson.findAll({
      ...sequelizeFilter,
      include: {
        model: Teacher,
        as: 'teachers'
      }
    });
  }
}