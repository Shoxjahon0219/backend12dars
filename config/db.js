const mongoose = require("mongoose");

async function connectDb() {
  mongoose // 1GQbO7Leto8hluZ5
    .connect(
      "mongodb+srv://shoxjahonzohirov2010:1GQbO7Leto8hluZ5@gg.oja43su.mongodb.net/?retryWrites=true&w=majority&appName=gg"
    )
    .then(() => console.log("Connected to Db"))
    .catch((e) => console.log(e.message));
}

module.exports = connectDb;
