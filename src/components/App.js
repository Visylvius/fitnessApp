var React = require('react');
var ReactDOM = require('react-dom');
var GetFirstName = require('./GetFirstName');
var GetLastName = require('./GetLastName');
var GetUserName = require('./GetUserName');
var App = React.createClass({
  render: function() {
    return (
      <div>
       <GetFirstName />
       <GetLastName />
       <GetUserName />
      </div>
    )
  }
})
module.exports = App;
