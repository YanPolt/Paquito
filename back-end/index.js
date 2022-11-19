const express = require("express");
const app = express();
const port = 5000;

app.get("/api/users", (req, res) => {
  res.json({ users: ["Usuario 1", "Usuario 2", "Usuario 3", "Usuario 4"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
