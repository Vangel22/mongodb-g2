const { create, findUsers, remove, update } = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    //const users = readFile("data.json");
    //writeFile() -> za da ja zapiseme promenata
    const users = await findUsers();
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllUsers,
};
