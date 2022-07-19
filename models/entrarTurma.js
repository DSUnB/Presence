'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entra.belongsTo(models.alunos);
      Entra.belongsTo(models.turmas);
    }
  }
  Entra.init({
    idAluno: DataTypes.INTEGER,
    codigoTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entra',
  });
  return Entra;
};