'use strict';
var Post = require('./posts');
var User = require('./users');

module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('comments', {
    author: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};