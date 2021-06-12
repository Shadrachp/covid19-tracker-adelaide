module.exports = (sequelize, DataTypes) =>
 sequelize.define('Vaccine', {
     id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
     },
     appointmentTime:  DataTypes.DATE,
     hospitalId: {
         type: DataTypes.INTEGER,
         required: true,
         allowNull: false
     }
 })
