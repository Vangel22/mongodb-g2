const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  email: String,
  password: String,
  username: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Account = mongoose.model("Account", accountSchema, "account");

//CRUD functionality for MONGODB

const findAccounts = async () => {};
const create = async () => {};
const update = async () => {};
const remove = async () => {};

module.exports = {
  findAccounts,
  create,
  update,
  remove,
};

//CRUD
//insertOne -> create
//insertMany -> create
//updateOne -> update
//updateMany -> update
//deleteOne -> delete
//deleteMany -> delete
//find -> read
//findOne -> read
