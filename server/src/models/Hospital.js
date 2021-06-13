module.exports = (sequelize, DataTypes) => {
  const Hospital = sequelize.define('Hospital', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    patientsId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
    },
    // vaccineId: {
    //     type: DataTypes.INTEGER,
    //     required: true,
    //     allowNull: false
    // },
    newCase: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    case: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    recovered: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Hospital.associate = (models) => {
    Hospital.hasMany(models.User, {
      allowNull: true,
      foreignKey: 'HospitalId',
      SourceKey: 'id'
    })
  }

  return Hospital
}
