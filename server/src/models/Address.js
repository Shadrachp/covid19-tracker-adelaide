module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    accountType: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      required: true
    }
  })

  Address.associate = (models) => {
    Address.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
      // sourceKey: 'checkInCode',
      // targetKey: 'id'
    })

    Address.belongsTo(models.Venue, {
      foreignKey: {
        allowNull: true
      }
      // sourceKey: 'checkInCode',
      // targetKey: 'id'
    })
  }

  return Address
}
