var express = require('express');
var router = express.Router();


// var MongoClient = require('mongodb').MongoClient,
//     assert = require('assert');

// // Connection URL 
// var url = 'mongodb://localhost:27017/myproject';
// // Use connect method to connect to the Server 
// MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server");

//     insertDocuments(db, function() {
//         updateDocument(db, function() {
//             findDocuments(db, function() {
//                 db.close();
//             });
//         });
//     });
// });

// var insertDocuments = function(db, callback) {
//     // Get the documents collection 
//     var collection = db.collection('documents');
//     // Insert some documents 
//     collection.insertMany([
//         { a: 1 }, { a: 2 }, { a: 3 }
//     ], function(err, result) {
//         callback(result);
//     });
// }
// var updateDocument = function(db, callback) {
//         // Get the documents collection 
//         var collection = db.collection('documents');
//         // Update document where a is 2, set b equal to 1 
//         collection.updateOne({ a: 2 }, { $set: { b: 1 } }, function(err, result) {
//             callback(result);
//         });
//     }
//     //app.use('/birds', router);
// var findDocuments = function(db, callback) {
//         // Get the documents collection 
//         var collection = db.collection('documents');
//         // Find some documents 
//         collection.find({}).toArray(function(err, docs) {
//             console.log("Found the following records");
//             console.dir(docs);
//             callback(docs);
//         });
//     }
// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// 定义网站主页的路由
router.get('/login', function(req, res) {
    res.render('login', { test: 11, login: true });
});
// 定义 about 页面的路由
router.get('/regiest', function(req, res) {
    res.send('About birds');
});

module.exports = router;