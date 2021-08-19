/****************************+
 * 
 * 
 * 
 *****************************/

const express     = require('express'); //General API Server
const helmet      = require('helmet'); //Hemlet for Secure Header
const volleyball  = require('volleyball');
const validate    = require('express-validator');

const app = express();

const GithubRouter  = require("../Routes/v1/github");
const GitlabRouter  = require("../Routes/v1/gitlab");
const GiteaRouter   = require("../Routes/v1/gitea");


app.use(express.json());
app.use(helmet (
  {
    hsts: false,
  }
));


app.get("/", (req, res) => {
   res.json({ hello: "Aaaaaargh....Captain on board" });
});

app.use(volleyball);

app.use('/api/v1/github', GithubRouter);
app.use('/api/v1/gitlab', GitlabRouter);
app.use('/api/v1/gitea', GiteaRouter);


module.exports = app;