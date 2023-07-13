const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Users = db.define('users' , {
  userName: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  taskId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  timestamps: false,
},
)

module.exports = Users;