const Sequelize = require('sequelize');
let sequelize = null;

sequelize = new Sequelize(process.env.DB);

global.db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Image: sequelize.import(__dirname+'/Image')
};

module.exports = global.db;