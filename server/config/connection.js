const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cup-of-sugar",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log();
module.exports = mongoose.connection;
