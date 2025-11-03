gaconst { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api_saude', 'root', 'sua_senha', {
  host: 'localhost',  
  dialect: 'mysql',   
  logging: false,     
});

module.exports = sequelize; 