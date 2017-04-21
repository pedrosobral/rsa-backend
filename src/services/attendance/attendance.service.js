'use strict';

// Initializes the `attendance` service on path `/attendance`
const createService = require('feathers-mongoose');
const createModel = require('../../models/attendance.model');
const hooks = require('./attendance.hooks');
const filters = require('./attendance.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'attendance',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/attendance', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('attendance');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
