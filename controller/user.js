var db = require("../models/index");
const Users = db.users;

exports.createUser = async function (req, res) {
  const body = req.body;
  let data = await Users.build({
    id: body.id,
    name: body.name,
    email: body.email,
    gender: body.gender,
  });

  const user = await data.save();

  data.name = "Nishant Jain";
  data.save();

  res.status(200).json({
    success : true,
    data : user
  })
};
