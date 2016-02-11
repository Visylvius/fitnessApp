var React = require('react');
var ReactDOM = require('react-dom');
var GetField = require('./GetField');
var axios = require('axios');
var App = React.createClass({
  getInitialState: function() {
    return {
      users: [],
      selectedUser: null
    };
  },
  componentWillMount: function() {
    axios.get('http://localhost:8080/people')
     .then((function(resp) {
       this.setState({users: resp.data});
     }).bind(this));
  },
  handleChange: function(field, value) {
    var user = this.state.selectedUser;
    user[field] = value;
    this.setState({selectedUser: user});
  },
  updateUser: function() {
    axios.put('http://localhost:8080/people/' + this.state.selectedUser.id, this.state.selectedUser)
     .then((function(resp) {
       this.setState({selectedUser: resp.data});
     }).bind(this));

  },
  selectUser: function(event) {
    var selectedId = parseInt(event.target.value);
    var selectedUser = this.state.users.find(function(user, index){
      return user.id === selectedId;
    });
    this.setState({selectedUser: selectedUser});
  },
  createUser: function() {
    //post is exactly like put but without id in url 
    //create an object with empty fields ie firstname lastname username
    // if user has an id
    //then updateuser
    //else create user
  },
  render: function() {
    if (this.state.selectedUser === null) {
      return (
        <select onChange={this.selectUser}>
         <option>select a user</option>
         {this.state.users.map(function(user) {
           return <option value={user.id} key={user.userName}>{user.firstName} {user.lastName}</option>
         })}
         </select>
      );
    } else {
       return (
        <div>
         <GetField changeCallBack={this.handleChange} value={this.state.selectedUser.firstName} field="firstName" placeholder="enter first name" />
         <GetField changeCallBack={this.handleChange} value={this.state.selectedUser.lastName} field="lastName" placeholder="enter last name"/>
         <GetField changeCallBack={this.handleChange} value={this.state.selectedUser.userName} field="userName" placeholder="enter user name" />
         <button onClick={this.updateUser}>change info</button>
        </div>
      )
    }
  }
})
module.exports = App;
