const express = require("express");

const app = express();
const Port = process.env.NODEJS_PORT || 8080;

const Student = require("./server/api/student");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Connected");
// });

app.use("/", Student);

app.listen(Port, () => {
  console.log(["Info"], `Server started on port ${Port}`);
});
