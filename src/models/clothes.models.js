'use strict';

const Clothes = (sequelize, DataTypes) => 
   sequelize.define('Clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    }
  });


module.exports = Clothes;