var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var GetFirstName = require('./components/GetFirstName');
var GetLastName = require('./components/GetLastName');
var GetUserName = require('./components/GetUserName');


function renderApp() {
 ReactDOM.render(
   <App />,
   document.querySelector('.container')
 );
}
renderApp();


//make a form to submit data firstName, lastName, userName,
//use axios to post data for the user
