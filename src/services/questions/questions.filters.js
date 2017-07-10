/* eslint no-console: 1 */

module.exports = function(data, connection, hook) { // eslint-disable-line no-unused-vars
  // only connected users
  // if (!connection.user) return;
  //
  // if (data.user.toString() !== connection.user._id.toString()) {
  //   return false;
  // }
  return data;
};
