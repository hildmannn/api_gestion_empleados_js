module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
      fecha: { type: DataTypes.DATE, allowNull: false },
      hora_inicio: { type: DataTypes.TIME, allowNull: false },
      hora_fin: { type: DataTypes.TIME, allowNull: false },
      id_empleado: {
        type: DataTypes.INTEGER,
        references: { model: 'Employees', key: 'id' },
      },
    });
  
    return Schedule;
  };
  