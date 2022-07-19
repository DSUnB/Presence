'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Responde extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Responde.belongsTo(models.alunos);
      Responde.belongsTo(models.chamadas);
    }
  }
  Responde.init({
    idAluno: DataTypes.INTEGER,
    idChamada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Responde',
  });
  return Responde;
};