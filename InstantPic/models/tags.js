'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('tags', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsTo(models.users);
    Tag.belongsTo(models.posts);
  };
  return Tag;
};