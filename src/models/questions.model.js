'use strict';

// questions-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const questions = new mongooseClient.Schema({
    user: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },

    question: { type: {}, required: true },

    type: { type: String, required: true, enum: ['mc', 'bool', 'free'] },

    description: { type: String },

    options: [],

    correct: Number,

    votes: { type: Number, default: 0},

    // votes
    students: [],

    showChart: { type: Boolean, default: false },

    showAnswer: { type: Boolean, default: false },

    // labels
    labels: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'labels' }],

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('questions', questions);
};
