const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const DB = process.env.MONGO_URL;
const connectToDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db successfly");
  } catch (error) {
    console.log("cant connect to db");
  }
};

module.exports = connectToDB;
