var express = require('express');
var router = express.Router();
var Comment = require('../models/index').Comment;

router.get('/', function(req, res) {
    Comment.findAll()
        .then(function(comments){
            res.send(comments);
        });
})

router.post('/', function(req, res) {
    Comment.create(req.body)
        .then(function(comment){
            res.send(comment);
        });
})

module.exports = router;