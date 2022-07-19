'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Turmas.init({
    codigoTurma: DataTypes.STRING,
    nomeTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};