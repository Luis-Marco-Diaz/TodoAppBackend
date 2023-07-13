const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Tasks = db.define('tasks' , {
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  categoriesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  timestamps: true,
},
)

module.exports = Tasks;