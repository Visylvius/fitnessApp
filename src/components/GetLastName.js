var React = require('react');
var GetLastName = React.createClass({
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  logLastName: function() {
    console.log(this.state.value);
  },
  render: function() {
    return (
      <div>
       <input
        type="text"
        placeholder="enter last name"
        onChange={this.handleChange}
       />
       <button onClick={this.logLastName}>Log Last Name</button>
      </div>
    )
  }
});

module.exports = GetLastName;
