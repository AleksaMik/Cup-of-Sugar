const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://unicorn:wordpass@cluster0.ooujm2n.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log();
module.exports = mongoose.connection;
