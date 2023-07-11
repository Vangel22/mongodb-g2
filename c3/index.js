const express = require("express");

const {
  getAllUsers,
  getOneUser,
  getUserByEmail,
  createUser,
  updateUser,
  removeUser,
} = require("./controllers/user");

require("./db/mongo-config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.write("Hello World");
  res.end();
});

app.get("/users", getAllUsers);
app.get("/users/:id", getOneUser);
app.get("/users/:email", getUserByEmail);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", removeUser);

app.listen(8080, (err) => {
  err ? console.log(err) : console.log(`Server started on port 8080`);
});
