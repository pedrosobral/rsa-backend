const socketio = require('feathers-socketio');

module.exports = socketio(function (io) {
  const app = this;

  io.on('connection', function (socket) {
    console.info('socket connect')
    socket.on('enter room', function (code) {
      if (!code) {
        console.info('No code provided. Abort.');
        return;
      };
      console.info('Enter room with code', code);

      app.service('rooms').find({
          query: {
            'code': code
          }
        })
        .then((room) => {
          if (!room.total) {
            console.info('Room does not exist. Abort.');
            return;
          }
          socket.room_id = room.data[0]._id;

          inc(socket.room_id, 1);
        });
    });

    socket.on('leave room', (room) => {
      inc(socket.room_id, -1);
      delete socket.room_id;
    });

    socket.on('disconnect', function () {
      console.info('socket disconnect');
      if (!socket.room_id) {
        console.info('socket without room code. Abort.');
        return;
      }

      app.service('rooms').get(socket.room_id)
        .then((room) => {
          console.info('disconnect room', room);
          inc(socket.room_id, -1);
        });
    });

    const inc = (id, value) => {
      if (!id) return;
      app.service('rooms').patch(id, {
        $inc: {
          peopleOnline: value
        }
      });
    }
  });
});