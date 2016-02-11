var React = require('react');
var GetLastName = React.createClass({
  handleChange: function(event) {
    this.props.changeCallBack(this.props.field, event.target.value);
  },
  render: function() {
    return (
      <div>
       <input
        type="text"
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        value={this.props.value}
       />
      </div>
    )
  }
});

module.exports = GetLastName;
