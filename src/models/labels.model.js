'use strict';

// labels-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const labels = new mongooseClient.Schema({
    user: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },

    text: { type: String, required: true },

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('labels', labels);
};
