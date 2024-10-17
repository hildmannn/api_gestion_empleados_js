module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      nombre: { type: DataTypes.STRING, allowNull: false },
      posición: { type: DataTypes.STRING, allowNull: false },
      fecha_contratación: { type: DataTypes.DATE, allowNull: false },
      estado: { type: DataTypes.BOOLEAN, defaultValue: true },
      id_usuario: {
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
    });
  
    return Employee;
  };
  