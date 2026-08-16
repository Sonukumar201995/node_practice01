const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/e-commerse";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("connected to the mongodb server");
});

db.on("disconnected", () => {
    console.log("disconnected from the mongodb server");
});

db.on("error", (error) => {
    console.log("mongodb connection error", error);
});

module.exports = db;