'use strict';

// polls-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const polls = new mongooseClient.Schema({
    questions: [],

    room: {},

    // current question available
    available: { type: Number, default: -1 },

    // has ended
    isOver: { type: Boolean, default: false },

    // TODO
    participants: { type: Number },

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('polls', polls);
};
