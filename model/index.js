var personDef = require('./person');
var config = {
  define: function(db, model, next) {
    model.person = db.define("person", personDef.properties);
    db.sync(function(err) {
      if (err) {
        throw err;
      }
      next();
    });
  }
}
module.exports = config;
