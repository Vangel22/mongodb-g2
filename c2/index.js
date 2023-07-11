const mongoose = require("mongoose");
const User = require("./user");

mongoose
  .connect(
    "mongodb+srv://Vangel22:test1234@cluster0.12jzasd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

async function run() {
  //POST baranje
  //req.body.name i req.body.age
  //   const user = new User({ name: "Test User", age: 100 }); //podatocite bi stignale od req.body
  //   await user.save();

  //HINT if you want to test out Accounts
  const foundUser = await User.findOne({
    name: "Test User",
    age: 100,
  });

  console.log("user found", foundUser);
}

run();
