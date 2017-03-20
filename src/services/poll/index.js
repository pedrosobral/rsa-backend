'use strict';

const service = require('feathers-mongoose');
const poll = require('./poll-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: poll,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/polls', service(options));

  // Get our initialize service to that we can bind hooks
  const pollService = app.service('/polls');

  // Set up our before hooks
  pollService.before(hooks.before);

  // Set up our after hooks
  pollService.after(hooks.after);
};
