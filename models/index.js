const Sequelize = require('sequelize');
let sequelize = null;

sequelize = new Sequelize(process.env.DB);

global.db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Product: sequelize.import(__dirname+'/Product')
};
module.exports = global.db;