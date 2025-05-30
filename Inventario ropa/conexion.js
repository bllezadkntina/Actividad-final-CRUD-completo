const Sequelize = require('sequelize')

const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './InventarioRopa.db'
});

module.exports = sequelize;