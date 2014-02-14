var express = require('express'),
    middleware = require('./lib/middleware'),
    path = require('path'),
    nodejsx = require('node-jsx').install();

var api = express()
  .get('/users/:username', function(req, res) {
    res.send({username: req.params.username, likes: ['choclate', 'vanilla', 'strawberry']});
  })

var app = module.exports = express()
app.use(express.static(path.join(__dirname, 'src', 'res')));
app.use('/api', api)
app.use(middleware(path.resolve('./client')))

if (!module.parent) {
  app.listen(process.env.PORT || 3000)
}
