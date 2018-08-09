<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
=======
module.exports = function (sequelize, DataTypes) {
>>>>>>> master
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    name: DataTypes.STRING
  });

<<<<<<< HEAD
  User.associate = function(models) {
=======
  User.associate = function (models) {
>>>>>>> master
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
