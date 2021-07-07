//Server
const server = require("./app");
const db = require("./db");

//----------------------------End of Import-----------------

//Start Server
const PORT = process.env.PORT || 5000;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
