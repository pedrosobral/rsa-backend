'use strict';

// rooms-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const rooms = new mongooseClient.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    online: { type: Boolean, default: false },
    peopleOnline: { type: Number, default: 0 },
    default: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('rooms', rooms);
};
