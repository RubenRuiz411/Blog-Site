const Users = require('/Users');
const Posts = require('/Posts');
const Comments = require('.Comments');

Users.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Users.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(Posts, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});



module.exports = { Users, Posts, Comments };
