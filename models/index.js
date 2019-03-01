const Sequelize = require('sequelize');
let sequelize = null;

// console.log(process.env.DB);

sequelize = new Sequelize("postgres://ypgmjzvv:zHmD2q7tGMwf3KKS91_J7SpDFXQqBinr@baasu.db.elephantsql.com:5432/ypgmjzvv");

global.db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Product: sequelize.import(__dirname+'/Product')
};
module.exports = global.db;