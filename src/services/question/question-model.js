'use strict';

// question-model.js - A mongoose model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: { type: {}, required: true },
  type: { type: String, required: true, enum: ['mc', 'bool', 'free'] },
  description: { type: String },
  options: [],
  correct: Number,
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const questionModel = mongoose.model('question', questionSchema);

module.exports = questionModel;
