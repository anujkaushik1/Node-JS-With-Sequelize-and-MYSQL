module.exports = function (sequelize, DataTypes) {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        defaultValue: "test@gmail.com",
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
