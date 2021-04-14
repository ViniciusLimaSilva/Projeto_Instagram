module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      texto: DataTypes.STRING,
      img: DataTypes.STRING,
      usuarios_id: DataTypes.INTEGER,
      n_likes: DataTypes.INTEGER,
    },
    {
      tablename: 'posts',
      timestamps: false,
    }
  );

  return Post;
};
