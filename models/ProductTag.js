const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    productTag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      //////////////References the Product model's id./////////////////////////
      references: {
        model: 'product',
        key: 'product_id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      //////////////References the Tag model's id/////////////////////////
      references: {
        model: 'tag',
        key: 'tag_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
