'use strict';
var Post = require('./posts');
var Comment = require('./comments');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('users', {
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(Post, {as: 'posts', foreignKey: 'userId'});
    models.User.hasMany(Comment, {as: 'comments', foreignKey: 'userId'});
  };
  return User;
};