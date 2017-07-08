/* eslint no-console: 1 */

module.exports = {
  all: [
    function(data, connection) {
      if (!connection.user) {
        return false;
      }

      if (connection.user._id.toString() !== data.user.toString()) {
        return false;
      }

      return data;
    }
  ],
};
