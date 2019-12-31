const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const DataBaseConnection = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Database connection successful !!!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = DataBaseConnection;
