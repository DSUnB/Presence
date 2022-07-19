'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turma.hasMany(models.iniciarTurma);
      Turma.hasMany(models.entrarTurma);
      Turma.hasMany(models.efetuarChamada);
    }
  }
  Turma.init({
    codigoTurma: DataTypes.STRING,
    nomeTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};