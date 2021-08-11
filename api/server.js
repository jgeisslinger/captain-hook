const express = require('express'); //General API Server

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
   res.json({ hello: "Walhalla is real" });
});

//Launch app
port = 3000;

app.listen(port, () => {
  console.log("Launching App - Checking for Hooks - Aaargh");
  
});
