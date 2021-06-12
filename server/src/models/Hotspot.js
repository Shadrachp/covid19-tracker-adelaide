module.exports = (sequelize, DataTypes) =>
 sequelize.define('Hotspot', {
     id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
     },
     address: DataTypes.STRING,
     checkInCode: DataTypes.STRING,
     case: DataTypes.INTEGER,
     startDate: DataTypes.DATEONLY
 })
