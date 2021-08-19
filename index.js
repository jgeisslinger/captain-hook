const server = require('./api/server.js');

//Launch app
const PORT = process.env.PORT || 5000; //For Heroku Hosting - Assing dynamic port

server.listen(PORT, () => {
  console.log("Launching App - ship arrived on port ${PORT}");
});

