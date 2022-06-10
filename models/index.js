const Sequelize = require("sequelize");

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
