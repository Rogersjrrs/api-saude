const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  doenca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataConsulta: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'pacientes',
  timestamps: true,
});
module.exports = Paciente;