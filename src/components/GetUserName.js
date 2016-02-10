var React = require('react');
var GetUserName = React.createClass({
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  logUserName: function() {
    console.log(this.state.value);
  },
  render: function() {
    return (
      <div>
       <input
        type="text"
        placeholder="enter userName"
        onChange={this.handleChange}
        />
       <button onClick={this.logUserName}>get user name</button>
      </div>
    )
  }
});

module.exports = GetUserName;
