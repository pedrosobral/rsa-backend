/* eslint no-console: 1 */
module.exports = {
  patched: [
    function(data, connection, hook) {

      if (!connection.user) {
        // case end attendance
        // should propagate to all connections
        if (hook.data.online === false) {
          return true;
        }

        return false;
      }

      return data;
    },
  ],
  created: [
    function(data, connection, hook) {

      // remove sensitive for unauthenticated  users
      if (!connection.user) {
        delete data.code;
        delete data.students;
      }

      return data;
    }
  ]
};
