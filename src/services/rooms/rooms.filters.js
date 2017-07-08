/* eslint no-console: 1 */

module.exports = {
  all: [
    function(data, connection) {
      if (!connection.user) {
        return false;
      }

      return data;
    }
  ],
};
