const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) =>
 sequelize.define('CheckInHistory', {
     id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
     },
     checkInCode: {
         type: DataTypes.INTEGER,
         required: true,
         allowNull: false
     },
     venueId: {
         type: DataTypes.INTEGER,
         required: true,
         allowNull: false
     },
     username: {
         type: DataTypes.INTEGER,
         required: true,
         allowNull: false
     },
     address: DataTypes.STRING,
     duration: DataTypes.INTEGER,
     checkInTime: {
         type: DataTypes.DATE,
         defaultValue: Sequelize.NOW()
     }
 })
