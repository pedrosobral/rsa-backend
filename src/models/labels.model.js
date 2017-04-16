'use strict';

// labels-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const labels = new mongooseClient.Schema({
    text: { type: String, required: true },

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('labels', labels);
};
