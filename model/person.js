var orm = require('orm');
var person = module.exports = {
  properties: {
    id: {type: 'serial', key: true},
    firstName: String,
    lastName: String,
    userName: String,
    // location: Array,
  }
};
