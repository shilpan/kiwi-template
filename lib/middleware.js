var express = require('express'),
    browserify = require('connect-browserify'),
    ReactAsync = require('react-async');

module.exports = function(clientPath, options) {
  options = options || {};

  var app = express();

  // Client bundling
  app.get('/bundle.js', browserify({
    entry: clientPath,
    extensions: ['.jsx', '.js', '.json'],
    debug: options.debug,
    watch: options.debug
  }));

  // Async bundle loading
  app.get('/init.js', function(req, res){
    res.send(
      'function downloadJSAtOnload() {' +
          'var element = document.createElement("script");' +
          'element.src = "/bundle.js";' +
          'document.body.appendChild(element);' +
        '}' +

        'if (window.addEventListener)' +
          'window.addEventListener("load", downloadJSAtOnload, false);' +
        'else if (window.attachEvent)' +
          'window.attachEvent("onload", downloadJSAtOnload);' +
        'else window.onload = downloadJSAtOnload;');
  });

  // Server rendering
  app.use(function(req, res, next) {
    var Client = require(clientPath);

    ReactAsync.renderComponentToString(Client({path: req.path}), function(err, markup) {
      if (err) return next(err);

      res.send(markup);
    })
  })

  return app;
}
