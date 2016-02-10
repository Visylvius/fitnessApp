var React = require('react');
var GetFirstName = React.createClass({
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  userInput: function() {
    console.log(this.state.value);
  },
  render: function() {
    return (
      <div>
       <input
        type="text"
        placeholder="please enter firstName"
        onChange={this.handleChange}
       />
       <button onClick={this.userInput}>get user info</button>
      </div>
    )
  }
});

module.exports = GetFirstName;
