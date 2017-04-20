'use strict';

// rooms-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const student = new mongooseClient.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  });

  const rooms = new mongooseClient.Schema({
    user: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },

    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    students: [student],
    online: { type: Boolean, default: false },
    peopleOnline: { type: Number, default: 0 },
    default: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('rooms', rooms);
};
