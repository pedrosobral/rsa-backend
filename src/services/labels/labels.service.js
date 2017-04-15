'use strict';

// Initializes the `labels` service on path `/labels`
const createService = require('feathers-mongoose');
const createModel = require('../../models/labels.model');
const hooks = require('./labels.hooks');
const filters = require('./labels.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'labels',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/labels', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('labels');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
