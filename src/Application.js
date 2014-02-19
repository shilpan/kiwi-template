/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router-component');
var Pages = Router.Pages;
var Page = Router.Page;

var MainPage = require('./pages/MainPage');
var UserPage = require('./pages/UserPage');
var SiteBoilerPlate = require('./views/SiteBoilerPlate');

var App = React.createClass({

  onClick: function (event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      this.refs.router.navigate(event.target.attributes.href.value);
    }
  },

  render: function () {
    return (
      <SiteBoilerPlate>
        <Pages ref="router" onClick={this.onClick} path={this.props.path}>
          <Page path="/" handler={MainPage} />
          <Page path="/users/:username" handler={UserPage} />
        </Pages>
      </SiteBoilerPlate>
    );
  }
});

module.exports = App;
