module.exports = (sequelize, DataTypes) => {
  return sequelize.define('product', {
    name: DataTypes.STRING
  });
};