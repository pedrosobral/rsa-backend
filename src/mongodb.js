'use strict';

const mongoose = require('mongoose');

module.exports = function () {
  const app = this;

  // mongoose.connect(app.get('mongodb'));
  mongoose.connect('mongodb://sobral:0*0thEEnd@cluster0-shard-00-00-ay1sb.mongodb.net:27017,cluster0-shard-00-01-ay1sb.mongodb.net:27017,cluster0-shard-00-02-ay1sb.mongodb.net:27017/rsa?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
