'use strict';

const processData = require('../../hooks/process-data');


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
    find: [],
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
