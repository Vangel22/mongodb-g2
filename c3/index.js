const express = require("express");
const { getAllUsers } = require("./controllers/user");
require("./db/mongo-config"); //ke ja izvrsi funkcijata connect()

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.write("Hello Semos");
  res.end();
});

app.get("/users", getAllUsers);

app.listen(8080, (err) => {
  if (err) console.log(err);
  console.log("Server started on 8080!");
});
