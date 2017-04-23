/* eslint no-console: 1 */

module.exports = {
  patched: [
    function (data, connection) {

      if (!connection.user) {
        return false;
      }

      return data;
    }
  ],
};
