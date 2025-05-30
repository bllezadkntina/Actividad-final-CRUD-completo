const { DataTypes } = require('sequelize');
const sequelize = require('./conexion')

const inventario = sequelize.define('inventario', {
      id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
            
      },
      Nombre: {
            type: DataTypes.STRING
      },
      Precio: {
            type: DataTypes.STRING
      },
      Talla: {
            type: DataTypes.STRING
      },
      Stock: {
            type: DataTypes.STRING
      }
}, {
      timestamps: false // no mapear createAt y updateAt
})

module.exports = inventario;
