module.exports = (sequelize, DataTypes) => {
  return sequelize.define('images', {
    name: DataTypes.STRING,
    photoURL: DataTypes.STRING
  });
};