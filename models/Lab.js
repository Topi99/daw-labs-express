module.exports = (sequelize, DataTypes) => {
  return sequelize.define('labs', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    photoURL: DataTypes.STRING
  });
};