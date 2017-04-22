'use strict';

// attendance-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const attendance = new mongooseClient.Schema({
    code: { type: String, required: true },
    room: '',
    students: [],
    online: { type: Boolean, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('attendance', attendance);
};
