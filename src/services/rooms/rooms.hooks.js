'use strict';

const processData = require('../../hooks/process-data');



const filterStudents = require('../../hooks/filter-students');



module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processData()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [filterStudents()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
