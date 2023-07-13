const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('tasks' , {
  categoryName: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
},
{
  timestamps: false,
}
);

module.exports = Categories;