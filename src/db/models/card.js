'use strict';
const { text } = require('express');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ User, Basket }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Basket, { foreignKey: 'card_id' });
    }
  }
  Card.init({
    nameCard: DataTypes.STRING,
    status: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};