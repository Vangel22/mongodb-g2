const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Vangel22:test1234@cluster0.12jzasd.mongodb.net/users?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err.message);
  }
}

connect();
