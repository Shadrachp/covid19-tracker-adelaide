module.exports = (sequelize, DataTypes) =>
 sequelize.define('Address', {
     id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
     },
     streetName: DataTypes.STRING,
     cityName: DataTypes.STRING,
     postalCode: DataTypes.STRING
 })
