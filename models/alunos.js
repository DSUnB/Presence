'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Aluno.hasMany(models.entrarTurma);
      Aluno.hasMany(models.responderChamada);
    }
  }
  Aluno.init({
    idAluno: DataTypes.INTEGER,
    matricula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};