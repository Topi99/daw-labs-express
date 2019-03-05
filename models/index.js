const Sequelize = require('sequelize');
let sequelize = null;

sequelize = new Sequelize(process.env.DB);

global.db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Lab: sequelize.import(__dirname+'/Lab')
};
module.exports = global.db;