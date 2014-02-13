/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactAsync  = require('react-async');
var superagent  = require('superagent');
var Cortex = require('../../lib/cortex/cortex');

var UserPage = ReactAsync.createClass({

  handleClick: function(e) {
    this.props.data.get('username').set('shilpan');
  },

  getInitialStateAsync: function(cb) {
    superagent.get(
      'http://localhost:3000/api/users/' + this.props.username,
      function(err, res) {
        cb(err, res ? res.body : null);
      });
  },

  render: function() {
    this.props.data = new Cortex(this.state, function(updatedState) {
      this.setState(this.props.data);
    }.bind(this));

    return (
      <div className="MainPage" onClick={this.handleClick}>
        {this.props.data.get('username') ? 'Hello, ' + this.props.data.get('username').getValue() : 'Loading...'}
        <button type="button" onClick={this.handleClick}>click</button>
      </div>
    );
  }
});

module.exports = UserPage;
