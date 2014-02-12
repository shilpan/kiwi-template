var ReactAsync = require('react-async'),
    ReactMount = require('react/lib/ReactMount');

var Application = module.exports = require('./src/Application');

// Mount the client unless we're running on the server
if (typeof window !== 'undefined') {
  window.onload = function() {
    ReactMount.allowFullPageRender = true;
    ReactAsync.renderComponent(Application(), document);
  }
}