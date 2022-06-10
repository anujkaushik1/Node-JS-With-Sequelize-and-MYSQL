const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("Users", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: { max: 5, min: 0, idle: 10000 },
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Connection Successful");
  })
  .catch(function (err) {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

var { users } = require("./users");
db.users = users(sequelize, DataTypes);

db.sequelize
  .sync()
  .then(function () {
    console.log("Data Inserted Successfully");
  })
  .catch(function (err) {
    console.log("Error" + err);
  });
module.exports = db;