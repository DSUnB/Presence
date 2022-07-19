'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inicia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inicia.belongsTo(model.professores);
      Inicia.belongsTo(model.turmas);
    }
  }
  Inicia.init({
    idProfessor: DataTypes.INTEGER,
    codigoTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Inicia',
  });
  return Inicia;
};