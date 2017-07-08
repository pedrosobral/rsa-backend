/* eslint no-console: 1 */

module.exports = function (data, connection, hook) { // eslint-disable-line no-unused-vars
  if (connection.user) {
    if (connection.user._id.toString() !== data.user.toString()) {
      return false;
    }
  }
  return data;
};
