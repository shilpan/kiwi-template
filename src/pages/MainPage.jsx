/**
 * @jsx React.DOM
 */

var React = require('react');

var MainPage = React.createClass({

  render: function() {
    return (
      <div className="UserPage">
        <img src="/images/nybl-green.png"/>
        <p>Hello, anonynous!
          <a href="/users/andrey">Login</a>
        </p>
      </div>
    );
  }
});

module.exports = MainPage;
