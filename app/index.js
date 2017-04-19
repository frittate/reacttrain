var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('../css/index.css');
require('../css/bootstrap.min.css');
require('../css/mdb.min.css');

// state
// lifecycle event
// UI
var App = require('./components/App');


ReactDOM.render(
  <App />,  
  document.getElementById('app')
);
