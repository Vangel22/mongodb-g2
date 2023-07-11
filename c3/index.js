const express = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  getSortedByName,
  getOneUser,
  getUserByEmail,
  removeUser,
} = require("./controllers/user");
const {
  getAccounts,
  createAccount,
  updateAccount,
  removeAccount,
} = require("./controllers/account");
require("./db/mongo-config"); //ke ja izvrsi funkcijata connect()

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.write("Hello Semos");
  res.end();
});

app.get("/users", getAllUsers);
app.get("/users/sorted", getSortedByName);
app.get("/users/:id", getOneUser);
app.get("/users/:email", getUserByEmail);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users", removeUser);

app.get("/accounts", getAccounts);
app.post("/accounts", createAccount);
app.put("/accounts/:id", updateAccount);
app.delete("/accounts", removeAccount);

app.listen(8080, (err) => {
  if (err) console.log(err);
  console.log("Server started on 8080!");
});
