const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
});

//schema defines the body of the document
const userSchema = mongoose.Schema({
  //ObjectId e unikatno za sekoe entry
  name: String,
  age: Number,
  email: String,
  createdAt: {
    type: Date,
    immutable: true, //ni ovozmozuva da ne go promenime poleto createdAt pri update ili druga operacija
    default: () => Date.now(), //ja zema momentalnata data
  }, //date in the moment of communication
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  }, //date in the moment of communication
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addressSchema,
});

const User = mongoose.model("User", userSchema, "user");

//CRUD functionality for MONGODB

const findUsers = async () => {
  return await User.find({});
};

const create = async (data) => {
  //req.body
  const user = new User(data);
  return await user.save();
};

const update = async (id, data) => {
  // const newData = {
  //   name: "Vangel New Account"
  // }
  return await User.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await User.deleteOne({ _id: id });
};

module.exports = {
  findUsers,
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
