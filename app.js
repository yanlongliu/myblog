//var router = require('./birds');
var express = require('express');
var app = express();
var account = require('./routes/accountRouter');

app.use(express.static('public'));
app.use('/static', express.static('public'));

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