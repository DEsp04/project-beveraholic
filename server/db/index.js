//--- DB connection ---
const mongoose = require("mongoose");

//--- In case we use .env file ---
//require("dotenv").config();

// let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || process.env.DB_Cluster_URL;

//--- Mongoose establish connection with MongoDB ---
let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/beverageDatabase";

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;
module.exports = db;
