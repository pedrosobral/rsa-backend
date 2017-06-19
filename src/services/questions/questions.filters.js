/* eslint no-console: 1 */

module.exports = function (data, connection, hook) { // eslint-disable-line no-unused-vars
  if (data.user !== connection.user._id) {
    return false;
  }

  return data;
};
