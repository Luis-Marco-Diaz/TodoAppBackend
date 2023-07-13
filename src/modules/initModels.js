const Categories = require('./categories.model');
const Tasks = require('./tasks.model');
const Users = require('./users.model');

const initModels = () => {
  //Users - Tasks
  Tasks.belongsTo(Users, {foreignKey:
  'taskId'});
  Users.hasMany(Tasks, {foreignKey:
    'taskId'
  });

  // Tasks - Categories
  Categories.belongsTo(Tasks, {foreignKey:
    'categoriesId'
  });
  Tasks.hasMany(Categories, {foreignKey:
    'categoriesId'
  })
}

module.exports = initModels;