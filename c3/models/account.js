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

const findAccounts = async () => {
  return await Account.find({}); //gi vrakja site accounts
  //db.accounts.find()
};

const create = async (data) => {
  //data e isto kako req.body
  const account = new Account(data);
  return await account.save();
  //db.accounts.insertOne()
};

const update = async (id, data) => {
  return await Account.updateOne({ _id: id }, data);
  //db.accounts.updateOne()
};

const remove = async (id) => {
  return await Account.deleteOne({ _id: id });
  //db.accounts.deleteOne()
};

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
