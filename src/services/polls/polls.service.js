'use strict';

// Initializes the `polls` service on path `/polls`
const createService = require('feathers-mongoose');
const createModel = require('../../models/polls.model');
const hooks = require('./polls.hooks');
const filters = require('./polls.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'polls',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/polls', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('polls');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
