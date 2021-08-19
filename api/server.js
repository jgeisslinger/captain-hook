/****************************+
 * 
 * 
 * 
 *****************************/

const express = require('express'); //General API Server
const helmet = require('helmet'); //Hemlet for Secure Header


const app = express();

const ShipRouter = require("./ship");


app.use(express.json());
app.use(hemlet (
  {
    hsts: false,
  }
));


app.get("/", (req, res) => {
   res.json({ hello: "Aaaaaargh....Captain on board" });
});

app.use('/api/ship', ShipRouter);


module.exports = app;