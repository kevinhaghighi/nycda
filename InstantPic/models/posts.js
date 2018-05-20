'use strict';
var Comment = require('./comments');
var Tag = require('./tags');
var User = require('./users');
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('posts', {
    url: DataTypes.STRING,
    description: DataTypes.STRING(150)
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.comments);
    Post.hasMany(models.tags);
  };
  return Post;
};