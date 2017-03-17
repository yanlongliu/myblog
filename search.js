var qs = require('querystring');
var http = require('http');

module.exports = function search(query, fn) {
    http.request({
        host: 'search.twitter.com',
        path: '/search.json?' + qs.stringify({ q: query })
    }, function(res) {
        res.setEncoding('utf8');
        var body = '';
        res.on('data', function(chunk) {
            body = body + chunk;
        });
        res.on('end', function() {
            var object = JSON.parse(body);
            var msg = object.results;
            try {
                if (object.errors) {
                    msg = object.errors;
                }
            } catch (e) {
                return fn(new Error('Bad twitter response'));
            }
            fn(null, msg);
        });
    }).end();
}