/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactAsync  = require('react-async');
var superagent  = require('superagent');
var Cortex = require('cortexjs');

var UserPage = ReactAsync.createClass({

  handleClick: function(event) {
    this.props.data.username.set(this.props.data.username.getValue() === 'shilpan' ? 'andrey' : 'shilpan');
  },

  getInitialStateAsync: function(callback) {
    superagent.get(
      'http://localhost:3000/api/users/' + this.props.username,
      function(error, result) {
        callback(error, result ? result.body : null);
      });
  },

  render: function() {
    if (!this.props.data && Object.keys(this.state).length != 0) {
      this.props.data = new Cortex(this.state, function(updatedState) {
        this.setState(this.props.data);
      }.bind(this));
    }

    return (
      <div className="MainPage">
        {this.props.data ? 'Hello, ' + this.props.data.username.getValue() : 'Loading...'}
        <button type="button" onClick={this.handleClick}>Toggle</button>
      </div>
    );
  }
});

module.exports = UserPage;
