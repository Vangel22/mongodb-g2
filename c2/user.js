const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
});

// {
//     name: "Vangel",
//     age: 23,
//     address: {
//         street: "9th Avenue",
//         city: "NYC"
//     }
// }

//schema defines the body of the document
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  //   createdAt: {
  //     default: () => Date.now(),
  //   }, //date in the moment of communication
  //   updatedAt: {
  //     default: () => Date.now(),
  //   }, //date in the moment of communication
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  //   address: {
  //     street: String,
  //     city: String,
  //   },
  address: addressSchema,
});

//const user = fetchUser(1)
//const idOfBFF = user.bestFriend // ke ni vrati ObjectId
//const bestFriend = fetchUserById(idOfBFF) // mozeme da gi zememe site podatoci od userSchema za ovoj bestFriend

// const userOne = {
//   _id: "test1",
//   name: "Vangel",
//   age: 23,
//   bestFriend: "test2",
// };

// db.users.find({ name: "Vangel" })
// db.users.find({ _id: "test2" }) -> userTwo

// const userTwo = {
//   _id: "test2",
//   name: "Petar",
//   age: 23,
//   bestFriend: null,
// };
//eden korisnik ima eden najdobar prijatel

module.exports = mongoose.model("User", userSchema, "user");
