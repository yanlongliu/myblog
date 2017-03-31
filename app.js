//var router = require('./birds');
var express = require('express');
var app = express();
var account = require('./routes/accountRouter');

var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('./webpack.config.js');

var compiler = webpack(webpackDevConfig);

// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {

    // public path should be the same with webpack config
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    quiet: false,
    // display nothing to the console 
 
    lazy: false,
    // switch into lazy mode 
    // that means no watching, but recompilation on every request 
 
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    // public path to bind the middleware to 
    // use the same as in webpack 
    
    index: "index.html",
    // the index path for web server 
 
    headers: { "X-Custom-Header": "yes" },
    // custom headers 
    // options for formating the statistics 
 
    reporter: null,
    // Provide a custom reporter to change the way how logs are shown. 
 
    serverSideRender: false,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));


app.use(express.static('bundle'));
//app.use('/static', express.static('bundle'));
app.set('views', './views'); // 指定视图所在的位置
app.set('view engine', 'jade'); // 注册模板引擎

app.get('/test', function(req, res, next) {
    res.render('test', { test: 11 });
});


app.use('/account', account);

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});