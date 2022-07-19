'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.professores);
      Usuario.hasMany(models.alunos);
    }
  }
  Usuario.init({
    matricula: DataTypes.STRING,
    nome: DataTypes.STRING,
    emailInstitucional: DataTypes.STRING,
    tipoUsuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};