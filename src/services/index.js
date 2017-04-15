'use strict';

const labels = require('./labels/labels.service.js');

const questions = require('./questions/questions.service.js');

const polls = require('./polls/polls.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(labels);
  app.configure(questions);
  app.configure(polls);
};
