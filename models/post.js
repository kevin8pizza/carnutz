<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
=======
module.exports = function (sequelize, DataTypes) {
>>>>>>> master
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

<<<<<<< HEAD
  Post.associate = function(models) {
    // We're saying that a Post should belong to a User
    // A Post can't be created without a User due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
=======
  //   Post.associate = function(models) {
  //     // We're saying that a Post should belong to a User
  //     // A Post can't be created without a User due to the foreign key constraint
  //     // Post.belongsTo(models.Author, {
  //     //   foreignKey: {
  //     //     allowNull: false
  //     //   }
  //     });
  //   };

    return Post;
>>>>>>> master
};
