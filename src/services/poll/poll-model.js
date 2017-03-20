'use strict';

// poll-model.js - A mongoose model

const question = require('../question/question-model');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  questions: [question.schema],
  room: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    'default': Date.now
  },
  updatedAt: {
    type: Date,
    'default': Date.now
  }
});

const pollModel = mongoose.model('poll', pollSchema);

module.exports = pollModel;
