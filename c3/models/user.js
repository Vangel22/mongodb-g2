const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
});

//schema defines the body of the document
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: {
    immutable: true,
    type: Date,
    default: () => Date.now(),
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

const create = async (data) => {
  const user = new User(data);
  return await user.save();
};

const getById = async (id) => {
  return await User.findOne({ _id: id });
};

const getByEmail = async (email) => {
  return await User.findOne({ email });
};

const getAll = async () => {
  try {
    return await User.find({});
  } catch (err) {
    throw err;
  }
};

const update = async (id, data) => {
  return await User.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await User.deleteOne({ _id: id });
};

userSchema.methods.sayHi = function () {
  console.log(`Hi my name is ${this.name}`);
};

//Middleware
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

userSchema.post("save", function (doc, next) {
  //doc is the object that has been saved
  doc.sayHi();
  next();
});

module.exports = {
  create,
  getById,
  getByEmail,
  getAll,
  update,
  remove,
};
