'use strict';

const socketio = require('feathers-socketio');
const logger = require('winston');

module.exports = socketio(function(io) {
  const app = this;

  /**
   * Logout student from a given room
   * @param  {string} room    room id
   * @param  {string} student student id
   */
  const logout = (room, student) => {
    if (!room || !student) return;

    logger.info('logout student', room, student);
    app.service('rooms').patch(room._id, {
      $set: {
        'students.$.online': false
      }
    }, {
      query: {
        'students.id': student,
        '$select': ['']
      }
    });
  };

  /**
   * Increment people online on an anonymous room
   * @param  {string} id    room id
   * @param  {number} value value to increment
   */
  const inc = (id, value) => {
    if (!id) return;
    app.service('rooms').patch(id, {
      $inc: {
        peopleOnline: value
      }
    });
  };

  const clear = (id) => {
    if (!id) return;
    app.service('rooms').patch(id, {
      'peopleOnline': 0
    });

    // force clear
    app.service('rooms').patch(id, {
      'students.$.online': false,
    }, {
      query: {
        'students.online': true,
      }
    });
  };

  io.on('connection', function(socket) {
    logger.info('socket connect');

    socket.on('clear room', (data) => {
      logger.info('broadcasting clear room event', data);
      socket.broadcast.emit('clear room', {
        room: data.room._id
      });

      // reset people online
      // wait just a bit sockets inc
      setTimeout(() => clear(data.room._id), 500);
    });

    socket.on('student enter room', (data) => {
      logger.info('student enter room', data);
      socket.room = data.room;
      socket.student = data.student;
    });

    socket.on('student leave room', () => {
      logger.info('student leave room', socket.room, socket.student);

      logout(socket.room, socket.student);
    });

    socket.on('anonymous enter room', (data) => {
      if (!data.room) {
        logger.info('No code provided. Abort.');
        return;
      }
      logger.info('anonymous enter room with code', data.room);

      socket.room = data.room;
      socket.anonymous = true;

      inc(socket.room._id, 1);
    });

    socket.on('anonymous leave room', () => {
      inc(socket.room._id, -1);
      delete socket.room;
    });

    socket.on('disconnect', function() {
      logger.info('socket disconnect');
      if (!socket.room) {
        logger.info('socket without room code. Abort.');
        return;
      }

      // logout student user
      if (socket.student) {
        logger.info('socket with student connected...');
        logout(socket.room, socket.student);
      }

      // logout anonymous user
      if (socket.anonymous) {
        logger.info('anonymous disconnect room');
        inc(socket.room._id, -1);
      }
    });
  });
});
