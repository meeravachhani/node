const express = require("express");
const app = express();
app.use(express.json());
app.use("/students", studentRoute);
app.listen(3000, () => {
  console.log("server is running : 127.0.0.1");
});