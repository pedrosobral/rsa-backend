'use strict';

const logger = require('winston');

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise

    /**
     * Just return one student info on login
     */
    if (hook.params.query['students.id']) {
      const studentId = hook.params.query['students.id'];
      const room = hook.result && hook.result.data && hook.result.data[0];
      room.students = room && room.students && room.students.find(x => x.id === studentId);
      logger.info('Hook::after::find::rooms::(studenId, room)', studentId, room);
    }

    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
