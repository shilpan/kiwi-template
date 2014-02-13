/**
 * @jsx React.DOM
 */

var React = require('react');

var SiteBoilerPlate = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Kiwi framework</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
          <script src="/bundle.js" />
        </head>
        {this.props.children}
      </html>
    );
  }
});

module.exports = SiteBoilerPlate;
