var express = require('express');
var router = express.Router();
var Post = require('../models/index').Post;

router.get('/', function(req, res) {
    Post.findAll()
        .then(function(posts){
            res.send(posts);
        })
})

router.post('/', function(req, res) {
    Post.create(req.body)
        .then(function(post){
            res.send(post);
        })
})
module.exports = router;